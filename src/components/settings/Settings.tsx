import {Card, RingProgress, Tabs, Text} from "@mantine/core";
import {useState} from "react";

function Settings() {

    return (
        <Tabs defaultValue="general" >
            <Tabs.List>
                <Tabs.Tab value="general">
                    General settings
                </Tabs.Tab>
                <Tabs.Tab value="account">
                   Accounts
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="general">
                <Card title={"Host Information"} m={"lg"} p={"lg"}>
                    <p>Host: localhost</p>
                    <p>Port: 8080</p>
                    <p>Protocol: http</p>
                    <p>API Version: 1.0</p>
                    <RingProgress size={140} label={<Text size={"xs"} ta={"center"}>Disk Usage</Text>}
                        sections={[
                            {value: 17, color: "blue", tooltip: "System"},
                            {value: 11, color: "red", tooltip: "Templates"},
                            {value: 33, color: "green", tooltip: "Instances"},
                            {value: 27, color: "yellow", tooltip: "Backups"},
                        ]}
                    />
                </Card>
            </Tabs.Panel>
            <Tabs.Panel value="account">
                Accounts
            </Tabs.Panel>
        </Tabs>
    );
}

export default Settings;