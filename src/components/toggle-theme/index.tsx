import { Flex, useMantineColorScheme } from "@mantine/core";
import { FC } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";


export const ToggleTheme: FC = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    // return jsx
    return (
        <Flex gap={10}>
            {colorScheme === "dark" ? (
                <IoMdSunny size={22} className="cursor-pointer" onClick={() => setColorScheme("light")} />
            ) : (
                <IoMdMoon size={22} className="cursor-pointer" onClick={() => setColorScheme("dark")} />
            )}
        </Flex>
    )
}