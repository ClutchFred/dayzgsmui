import "@mantine/core/styles.css";
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
    IconPencil,
    IconSettings
} from "@tabler/icons-react";
import {createBrowserRouter, Outlet, RouterProvider, useLocation, useNavigate} from "react-router-dom";
import ServerOverview from "./components/ServerOverview.tsx";
import Authentication from "./components/Authentication.tsx";


const router = createBrowserRouter([
    {
        path: '/', element: <BaseLayout/>, children: [
            {path: 'servers', element: <ServerOverview />},
            {path: 'settings', element: <div>Settings</div>},
        ]
    },
    {path: '/login', element: <Authentication />},
]);


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
        <AppShell navbar={{width: rem('300px'), breakpoint: 0}}>
            <AppShell.Navbar p="md">
                <Group pb={20}>
                    <Text size={"xl"}>DayZ GSM <Text c={"grey"} inline size={"sm"}>Development</Text></Text>
                </Group>
                {routes.map((route) => (
                    <NavLink key={route.label} active={location.pathname == route.href} onClick={() => navigate(route.href)} leftSection={route.icon} label={route.label}/>
                ))}
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}

export default function App() {

    return (
        <MantineProvider theme={theme} defaultColorScheme={"dark"}>
            <RouterProvider router={router}/>
        </MantineProvider>
    )

}
