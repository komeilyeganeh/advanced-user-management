import { routes } from "@/routes"
import { Box, Text } from "@mantine/core"
import { NavItem } from "@/components/nav-item"
import { useLocation } from "react-router"
import { FC } from "react"
import { SidebarProps } from "@/types/ui/sidebar.type"

export const Sidebar: FC<SidebarProps> = ({isSidebarOpen}) => {
    const location = useLocation();
    // return jsx
    return (
        <Box className={`absolute flex flex-col h-full w-64 duration-200 overflow-hidden bg-gray-800 dark:bg-neutral-900 p-4 items-center ${isSidebarOpen ? "left-0" : "-left-64"}`}>
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
