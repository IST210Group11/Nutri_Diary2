import {createContext, useCallback, useContext, useMemo, useState} from "react";

const SidebarContext = createContext({})

const SidebarProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const changePage =(index) => {
        setCurrentPage(index)
    }

    const value = useMemo(() => ({
        currentPage,
        changePage
    }), [
        currentPage,
        changePage
    ])

    return (
        <SidebarContext.Provider value={value}>
            { children }
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext)
export default SidebarProvider

