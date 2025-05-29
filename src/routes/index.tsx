import { lazy } from "react"
import { RouteObject } from "react-router"
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const Dashboard = lazy(() => import("@/pages/dashboard"))
const Users = lazy(() => import("@/pages/users"))

export const routes: RouteObject[] = [
    {
        path: '/dashboard',
        element: <Dashboard />,
        handle: {
            title: 'Dashboard',
            icon: <MdDashboard size={25}/>,
            showInSidebar: true,
        }
    },
    {
        path: '/users',
        element: <Users />,
        handle: {
            title: 'Users',
            icon: <FaUsers size={25}/>,
            showInSidebar: true,
        }
    },
]

