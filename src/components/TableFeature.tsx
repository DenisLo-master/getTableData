import { FC, useEffect, useState } from 'react'
import { fetchData } from '../api/fetchData'
import { ArgusAppHeaders, ArgusSearchParams, ITableProps } from '../types';
import { SearchRowComponent, TableHeaderComponent, TableRowComponent } from '.';
import styled from 'styled-components';
import { useDebounce } from 'react-use';



const appHeaders: ArgusAppHeaders = {
    "Argus-App-Type": "food",
    "Argus-Auth-Token": "teNSmM0i0Pz2Wph_-7nSYg",
    "Argus-School-Id": "587",
};

const StyledTableWrapper = styled.div`
  overflow-x: auto;
  position: relative;
`;

const ErrorMessage = styled.p`
  margin:60px auto;
  color:red;
`;

export const TableFeature: FC = () => {
    const [isSticky, setSticky] = useState(false);
    const [rowData, setRowData] = useState<ITableProps[] | null>(null)
    const [searchValue, setSearch] = useState<string>('');
    const [debouncedValue, setDebouncedValue] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>()

    const searchParams: ArgusSearchParams = {
        limit: "100",
        search: debouncedValue,
    };

    useDebounce(
        () => {
            setDebouncedValue(searchValue);
        },
        500,
        [searchValue]
    );

    const getData = async () => {
        try {
            const response = await fetchData(searchParams, appHeaders)
            setRowData(response)
        } catch (err: any) {
            console.log(err)
            setErrorMessage(err.message)
            setRowData([])
        }
    }

    useEffect(() => {
        getData()
    }, [debouncedValue])

    return (
        <StyledTableWrapper>
            <div style={{
                position: isSticky ? 'fixed' : 'absolute',
                top: 0,
                width: '100%',
                maxWidth: '1000px',
                zIndex: "1",
                backgroundColor: 'white'
            }}>
                <SearchRowComponent setSearch={setSearch} />
                <TableHeaderComponent />
            </div>
            {rowData !== null && <TableRowComponent tableData={rowData} setSticky={setSticky} />}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledTableWrapper>
    )
}
