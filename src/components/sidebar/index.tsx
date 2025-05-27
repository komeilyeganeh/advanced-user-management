import { routes } from "@/routes"
import { Box, Text } from "@mantine/core"
import { NavItem } from "@/components/nav-item"
import { useLocation } from "react-router"

export const Sidebar = () => {
    const location = useLocation();
    // return jsx
    return (
        <Box className="flex flex-col h-full overflow-hidden w-72 bg-gray-900 p-4 items-center">
            {/* title */}
            <Box>
                <Text fw={700} c="cyan" fz={20}>USER-DASHBOARD</Text>
            </Box>
            {/* nav items */}
            <Box component="ul" className="w-full flex flex-col gap-3" mt={30}>
                {routes.filter((route) => route.handle?.showInSidebar).map((route) => (
                    <NavItem key={route.path} to={route.path!} icon={route.handle?.icon} active={location.pathname === route.path}>
                        {route.handle?.title}
                    </NavItem>
                ))}
            </Box>
        </Box>
    )
}
