import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core"
import { FC, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export const UserMenu: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // return jsx
    return (
        <Menu width={260} position="bottom-end" onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} withinPortal>
            <Menu.Target>
                <UnstyledButton>
                    <Group>
                        <Avatar size={36} radius="xl">
                            <FaUserCircle size={24} />
                        </Avatar>
                        <Text fw={500} c="dimmed" fz={14}>John Doe</Text>
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>
                    <Text fw={500} c="dimmed" fz={14}>Profile</Text>
                </Menu.Item>
                <Menu.Item>
                    <Text fw={500} c="dimmed" fz={14}>Logout</Text>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}
