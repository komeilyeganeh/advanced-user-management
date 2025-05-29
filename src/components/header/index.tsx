import { FC } from "react";
import { Box, Flex, Group } from "@mantine/core"
import { HeaderProps } from "@/types/ui/header.type";
import { ToggleTheme } from "@/components/toggle-theme";
import { UserMenu } from "@/components/user-menu"
import { FaBarsStaggered } from "react-icons/fa6";


export const Header: FC<HeaderProps> = ({ setIsSidebarOpen, isSidebarOpen }) => {
    // return jsx
    return (
        <Box component="header" p={18} className="w-full bg-gray-100 dark:bg-neutral-900">
            <Flex justify="space-between" align="center">
                <FaBarsStaggered size={22} className="cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                <Group>
                    <ToggleTheme />
                    <UserMenu />
                </Group>
            </Flex>
        </Box>
    )
}
