import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {useApi} from "./ApiProvider";
import {useUser} from "@auth0/nextjs-auth0";
import {useSidebar} from "./SidebarProvider";

const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const { getUser, createUser } = useApi()
    const { user: userAuth0, isLoading } = useUser()
    const { currentPage } = useSidebar()

    const fetchUser = async () => {
        return (await getUser(userAuth0.sub)).data[0]
    }

    useEffect(() => {
        (async () => {
            try {
                if (!isLoading && userAuth0 && userAuth0.sub) {
                    const userData = await fetchUser()
                    console.log(userAuth0.sub, userData)
                    if (userData && Object.keys(userData).length > 0) {
                        setUser({...userData, user_id: userAuth0.sub})
                    } else {
                        console.log("CREATING", userAuth0.sub)
                        const newUser = await createUser(userAuth0.sub)
                        console.log(newUser)
                        setUser({...newUser, user_id: userAuth0.sub})
                    }
                }
            } catch (e) {
                console.error(e)
            }
        })()
    }, [userAuth0, isLoading, userAuth0?.sub])

    useEffect(() => {
        (async () => {
           try {
               const userData = await fetchUser()
               setUser({ ...userData })
           } catch (e) {
               console.error(e)
           }
        })()
    }, [currentPage])

    const value = useMemo(() => ({
        ...user
    }), [
        user
    ])

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export const useAuthUser = () => useContext(UserContext)
export default UserProvider