import { FC, useEffect, useState } from 'react'
import { fetchData } from '../api/fetchData'
import { ArgusAppHeaders, ArgusSearchParams, ITableProps } from '../types';
import { TableComponent } from '.';

const searchParams: ArgusSearchParams = {
    limit: "5",
    search: "",
};

const appHeaders: ArgusAppHeaders = {
    "Argus-App-Type": "food",
    "Argus-Auth-Token": "teNSmM0i0Pz2Wph_-7nSYg",
    "Argus-School-Id": "587",
};


export const TableFeature: FC = () => {
    const [rowData, setRowData] = useState<ITableProps[] | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>()

    const getData = async () => {
        try {
            const result = await fetchData(searchParams, appHeaders)
            console.log('Data:', result.items)
            setRowData(Object.values(result.items))
        } catch (err: any) {
            console.log(err)
            setErrorMessage(err.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div style={{ color: 'white', padding: 10 }}>
            {rowData !== null && <TableComponent tableData={rowData} />}
        </div>
    )
}
