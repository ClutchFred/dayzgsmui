import {
    Box,
    Button,
    CheckIcon,
    Combobox,
    ComboboxChevron,
    Fieldset,
    Group,
    InputBase,
    Modal, NumberInput, Select, TextInput,
    useCombobox
} from "@mantine/core";
import {useState} from "react";
import {useDisclosure} from "@mantine/hooks";

function CreateServerWizard() {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: (eventSource) => {
            if (eventSource === 'keyboard') {
                combobox.selectActiveOption();
            } else {
                combobox.updateSelectedOptionIndex('active');
            }
        },
    });


    const apps = [
        {
            id: 1,
            name: "DayZ Dedicated Server",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6a46523-46b8-41d2-ad2c-659991cd6054/d593bfp-bdd5927f-fd4c-402f-b9f6-dfef2871bac8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2YTQ2NTIzLTQ2YjgtNDFkMi1hZDJjLTY1OTk5MWNkNjA1NFwvZDU5M2JmcC1iZGQ1OTI3Zi1mZDRjLTQwMmYtYjlmNi1kZmVmMjg3MWJhYzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Gj8Qv9UvGR2KlAtzcL1YG4ca_8dxf7StSAe5i6loM00",
        },
        {
            id: 2,
            name: "Minecraft Server",
            image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",
        },
        {
            id: 3,
            name: "Rust Dedicated Server",
            image: "https://cdn.icon-icons.com/icons2/1381/PNG/512/rust_94773.png",
        },
        {
            id: 4,
            name: "Valheim Dedicated Server",
            image: "https://cdn2.steamgriddb.com/icon/a0b83c02d720415dada82e08bc09e9f3/32/256x256.png",
        },
        {
            id: 5,
            name: "Ark: Survival Evolved Dedicated Server",
            image: "https://user-images.githubusercontent.com/29803178/28756939-b63f7734-752d-11e7-95ea-14cbae53485c.png",
        },
    ];

    const [value, setValue] = useState<{ id: number; name: string; image: string; } | null>(apps[0]);

    const options = apps.map((item) => (
        <Combobox.Option value={item.name} key={item.id} active={item == value}>
            <Group gap="xs">
                {item == value && <CheckIcon size={12}/>}
                <img src={item.image} width={20} height={20}/>
                <Box>{item.name}</Box>
            </Group>
        </Combobox.Option>
    ));

    const [opened, {open, close}] = useDisclosure(false);

    const ipAddresses = [
        {
            value: "0.0.0.0",
            label: "0.0.0.0",
        }, {
            value: "127.0.0.1",
            label: "127.0.0.1",
        }
    ];

    return (
        <>
            <Modal opened={opened} onClose={close} title={"Create Server"} size={"lg"}>
                <div style={{padding: 20}}>

                    <Fieldset variant="unstyled">
                        <Combobox store={combobox} onOptionSubmit={(val) => {
                            setValue(apps.find((app) => app.name == val) || null);
                            combobox.closeDropdown();
                        }} rightSection={<ComboboxChevron/>}
                                  leftSection={<img src={value?.image} width={32} height={32}/>}
                        >
                            <Combobox.Target>
                                <InputBase label={"Application"} size={"md"} type="button" component="button" pointer
                                           onClick={() => combobox.toggleDropdown()}>
                                    {value!.name || "Select App"}
                                </InputBase>
                            </Combobox.Target>
                            <Combobox.Dropdown>
                                <Combobox.Options>
                                    {options}
                                </Combobox.Options>
                            </Combobox.Dropdown>
                        </Combobox>
                        <TextInput mt={"md"} label={"Server Name"} placeholder={"My Server"} size={"md"} required/>
                        <Select data={ipAddresses} mt={"md"} label={"IP Address"} defaultValue={"0.0.0.0"} size={"md"}
                                required allowDeselect={false}/>
                        <NumberInput placeholder={"Max Players"} mt={"md"} label={"Max Players"} size={"md"} required/>
                        <Group mt={"md"} justify={"flex-end"}>
                            <Button size={"md"}>Create Server</Button>
                        </Group>
                    </Fieldset>
                </div>
            </Modal>
            <Button onClick={open}>Open</Button>
        </>


    );
}

export default CreateServerWizard;