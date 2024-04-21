import "@mantine/core/styles.css";
import '@mantine/spotlight/styles.css';
import {
    AppShell,
    Group,
    MantineProvider, NavLink,
    rem, Text
} from "@mantine/core";
import 'mantine-datatable/styles.css';

import {theme} from "./theme";


import {
    IconEye,
    IconList,
    IconPencil, IconSearch,
    IconSettings
} from "@tabler/icons-react";
import {createBrowserRouter, Outlet, RouterProvider, useLocation, useNavigate} from "react-router-dom";
import ServerOverview from "./components/ServerOverview.tsx";
import Authentication from "./components/Authentication.tsx";
import Settings from "./components/settings/Settings.tsx";
import {Spotlight, SpotlightActionData} from "@mantine/spotlight";
import React from "react";


const router = createBrowserRouter([
    {
        path: '/', element: <BaseLayout/>, children: [
            {path: 'servers', element: <ServerOverview/>},
            {path: 'settings', element: <Settings/>},
        ]
    },
    {path: '/login', element: <Authentication/>},
]);


const spotlightActions: SpotlightActionData[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        description: 'View the dashboard',
        onClick: () => router.navigate('/'),
        leftSection: <IconEye/>,
    },
    {
        id: 'servers',
        label: 'Servers',
        description: 'View the servers',
        onClick: () => router.navigate('/servers'),
        leftSection: <IconList/>,
    },
    {
        id: 'settings',
        label: 'Settings',
        description: 'View the settings',
        onClick: () => router.navigate('/settings'),
        leftSection: <IconSettings/>,
    },
    {
        id: 'templates',
        label: 'Templates',
        description: 'View the templates',
        onClick: () => router.navigate('/templates'),
        leftSection: <IconPencil/>,
    },
    {
        id: 'logout',
        label: 'Logout',
        description: 'Logout of the application',
        onClick: () => router.navigate('/logout'),
        leftSection: <IconEye/>,
    },
];


function BaseLayout() {
    const routes = [
        {label: 'Home', href: '/', icon: <IconEye/>},
        {label: 'Servers', href: '/servers', icon: <IconList/>},
        {label: 'Templates', href: '/2fa', icon: <IconPencil/>},
        {label: 'Settings', href: '/settings', icon: <IconSettings/>},
    ];

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <AppShell navbar={{width: rem('300px'), breakpoint: 0}}>
                <AppShell.Navbar p="md">
                    <Group pb={20}>
                        <Text size={"xl"}>UniGSM <Text c={"grey"} inline size={"sm"}>Development</Text></Text>
                    </Group>
                    {routes.map((route) => (
                        <NavLink key={route.label} active={location.pathname == route.href}
                                 onClick={() => navigate(route.href)} leftSection={route.icon} label={route.label}/>
                    ))}
                </AppShell.Navbar>
                <AppShell.Main>
                    <Outlet/>
                </AppShell.Main>
            </AppShell>
            <Spotlight actions={spotlightActions} searchProps={
                {
                    placeholder: 'Search actions',
                    leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                }
            }></Spotlight>
        </>
    );
}

export default function App() {

    return (
        <MantineProvider theme={theme} defaultColorScheme={"dark"}>
            <RouterProvider router={router}/>
        </MantineProvider>
    )

}
