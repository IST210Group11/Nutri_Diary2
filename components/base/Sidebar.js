import {Box, Button, Grid, styled, Typography} from "@mui/material";
import {useSidebar} from "./SidebarProvider";
import Link from 'next/link'

const SidebarContainer = styled(Grid)({
    width: "18%",
    height: "100%",
    // padding: "50px 0",
    backgroundColor: "#2878DA",
})

const SidebarItemStyled = styled(Grid)({
    width: "100%",
    padding: "30px 30px",
    color: "white",
    transition: "all 200ms ease-in-out",
    cursor: "pointer"
})

const LogoutButton = styled(Button)({
    padding: "5px 20px",
    backgroundColor: "#2878DA",
    color: "white",
    border: "solid 2px white"
})

const SidebarItem = ({ index, title }) => {
    const { currentPage, changePage } = useSidebar()

    const selected = currentPage === index

    const handleClick = () => {
        changePage(index)
    }

    return (
        <SidebarItemStyled
            sx={{ backgroundColor: selected ? "rgba(0, 0, 0, 0.15)" : "transparent" }}
            item
            onClick={handleClick}
        >
            <Typography
                sx={{ color: selected ? "white" : "rgba(0, 0, 0, 0.2)", userSelect: "none" }}
                fontSize={17}
                fontWeight="bold"
                fontFamily="Montserrat"
            >
                { title }
            </Typography>
        </SidebarItemStyled>
    )
}

const Sidebar = () => {
    return (
        <SidebarContainer
            direction="column"
            container
        >
            <Grid item container alignItems="center" justifyContent="center" height="10%" sx={{ mt: 2 }}>
                <Typography
                    fontSize={32}
                    fontFamily="Montserrat"
                    fontWeight="bold"
                    color="white"
                >
                    Nutri Diary
                </Typography>
            </Grid>
            <Grid item
                sx={{ flex: 1 }}
            >
                <SidebarItem index={0} title="Nutrition Tracker"  />
                <SidebarItem index={1} title="Food Input" />
                <SidebarItem index={2} title="Food List" />
                <SidebarItem index={3} title="User Specifications" />
            </Grid>
            <Grid item container justifyContent="center" sx={{ mb: 2 }}>
                <Link href="/api/auth/logout" passHref>
                    <LogoutButton
                        variant="outlined"
                    >
                        <Typography
                            fontSize={14}
                            fontFamily="Montserrat"
                            fontWeight="500"
                        >
                            Logout
                        </Typography>
                    </LogoutButton>
                </Link>
            </Grid>
        </SidebarContainer>
    )
}

export default Sidebar