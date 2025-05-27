import { Box } from "@mantine/core"
import { FC } from "react"
import { Link } from "react-router"
import { NavItem as NavItemType } from "@/types/nav-item.type"

export const NavItem: FC<NavItemType> = ({ children, to, icon, active }) => {
    return (
        <Box component="li">
            <Link to={to} className={`flex items-center gap-5 duration-300 hover:bg-cyan-100 hover:text-black p-2 rounded-lg ${active ? "bg-cyan-300" : "text-white"}`}>
                <Box component="span">{icon}</Box>
                <Box component="span">{children}</Box>
            </Link>
        </Box>
    )
}
