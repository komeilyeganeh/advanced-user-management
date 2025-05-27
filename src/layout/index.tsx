import { Box } from "@mantine/core";
import { Outlet } from "react-router";
import { Sidebar } from "@/components/sidebar";
import { Suspense } from "react";
export const Layout = () => {
  // render the layout
  return (
    <Box className="flex h-screen overflow-hidden">
      {/* sidebar */}
      <Sidebar />
      <Box component="main">
        {/* header */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  )
};
