import {
    Button,
    Checkbox,
    Paper,
    PasswordInput,
    TextInput,
    Title
} from "@mantine/core";

import classes from "./Authentication.module.css";

function Authentication() {

    return (
        <div className={classes.wrapper} >
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    DayZ GSM
                </Title>

                <TextInput label="Username" placeholder="h4ckz0r" size="md"/>
                <PasswordInput label="Password" placeholder="12345678" mt="md" size="md"/>
                <Checkbox label="Save username" mt="xl" size="md"/>
                <Button fullWidth mt="xl" size="md">
                    Login
                </Button>

            </Paper>
        </div>
    );
}

export default Authentication;