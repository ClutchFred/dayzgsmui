import CreateServerWizard from "./CreateServerWizard.tsx";
import {DataTable} from "mantine-datatable";
import {Group, Text} from "@mantine/core";
import {IconCheck} from "@tabler/icons-react";

function ServerOverview() {
    return (
        <>
            <CreateServerWizard/>
            <ServerTable/>
        </>
    )
}

function ServerTable() {
    return (
        <>
            <DataTable
                highlightOnHover
                columns={columns}
                records={data}
                defaultColumnRender={ColumnRender}
            >
            </DataTable>
        </>
    )
}

function ColumnRender(row: any, _index: number, accessor: any) {
    const data = row[accessor as keyof typeof row]
    if (accessor == 'status') return StatusRender(row, _index, accessor);

    return (
        <>
            {data}
        </>
    )
}

function StatusRender(row: any, _index: number, accessor: any) {
    const data = row[accessor as keyof typeof row];
    return (
        <>
            <Group>
                {data == 'online' && <><IconCheck color={"green"}></IconCheck> <Text>Healthy</Text></>}
            </Group>
        </>
    )
}

const data = [
    {status: 'online', name: 'Server 1', ip: '127.0.0.1'},
]

const columns = [
    {accessor: 'status'},
    {accessor: 'name'},
    {accessor: 'ip'},
];

export default ServerOverview;