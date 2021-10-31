import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'

const NavbarContext = createContext({ tab: 0 })

const TabProvider = ({ children }) => {
    const [tab, setTab] = useState(1)

    const changeTab = useCallback((newTab) => {
        setTab(newTab)
    }, [])

    const value = useMemo(() => ({
        tab,
        changeTab
    }), [
        tab,
        changeTab
    ])

    return (
        <NavbarContext.Provider value={value}>
            { children }
        </NavbarContext.Provider>
    )
}

export const useTab = () => useContext(NavbarContext)
export default TabProvider