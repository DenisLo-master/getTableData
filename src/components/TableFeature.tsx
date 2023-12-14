import { FC, useEffect, useState } from 'react'
import { fetchData } from '../api/fetchData'
import { ArgusSearchParams, ITableProps } from '../types';
import { SearchRowComponent, TableHeaderComponent, TableRowComponent } from '.';
import styled from 'styled-components';
import { useDebounce } from 'react-use';


const StyledTableWrapper = styled.div`
  min-width:500px;
  max-width: 1000px;
  overflow-x: auto;
  position: relative;
`;

const ErrorMessage = styled.p`
  margin:60px auto;
  color:red;
`;

export const TableFeature: FC = () => {
    const [params, setParams] = useState({
        isSticky: false,
        width: 10
    });
    const [rowData, setRowData] = useState<ITableProps[] | null>(null)
    const [searchValue, setSearch] = useState<string>('');
    const [debouncedValue, setDebouncedValue] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>()

    const searchParams: ArgusSearchParams = {
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
            const response = await fetchData(searchParams)
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
                position: params.isSticky ? 'fixed' : 'absolute',
                top: 0,
                width: params.width,
                minWidth: '500px',
                maxWidth: '1000px',
                zIndex: "1",
                backgroundColor: 'white'
            }}>
                <SearchRowComponent setSearch={setSearch} />
                <TableHeaderComponent />
            </div>
            {rowData !== null && <TableRowComponent tableData={rowData} setParams={setParams} />}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledTableWrapper >
    )
}
