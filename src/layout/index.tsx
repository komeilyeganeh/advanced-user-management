import { Box } from "@mantine/core";
import { Outlet } from "react-router";
import { Sidebar } from "@/components/sidebar";
import { Suspense, useState } from "react";
import { Header } from "@/components/header";


export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // render the layout
  return (
    <Box className="flex h-screen overflow-hidden">
      {/* sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Box component="main" w={`calc(100% - ${isSidebarOpen ? "16rem" : "0%"})`} className="ml-auto duration-200">
        {/* header */}
        <Suspense fallback={<div>Loading...</div>}>
          <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  )
};
