import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ITableParams, ITableProps } from '../../types';

interface ITable {
    tableData: ITableProps[]
    setParams: (params: ITableParams) => void
}

const HeaderHeight = 80

const StyledTable = styled.table`
  margin-top:${HeaderHeight}px;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const StyledTd = styled.td`
  padding: 10px;
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledP = styled.p`
  width: 100%;
  margin: 10 auto;
  text-align: center;
`;


export const TableRowComponent: FC<ITable> = ({ tableData, setParams }) => {
    const tableRef = useRef<HTMLTableElement>(null);

    const handleScroll = () => {
        if (tableRef.current) {
            const offset = tableRef.current.getBoundingClientRect().top;
            const width = tableRef.current.getBoundingClientRect().width;
            setParams({
                isSticky: offset <= HeaderHeight,
                width
            });
        }
    };

    useEffect(() => {
        handleScroll()
        window.addEventListener('resize', handleScroll);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        tableData.length !== 0 ?
            <StyledTable ref={tableRef}>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item.id}>
                            {/* <StyledTd>{item.id}</StyledTd> */}
                            <StyledTd>{item.title}</StyledTd>
                            <StyledTd>{item.cost}</StyledTd>
                            {/* <StyledTd>{item.nomenclature}</StyledTd> */}
                            {/* <StyledTd>{item.photoUrl}</StyledTd> */}
                            <StyledTd>{item.portion}</StyledTd>
                            <StyledTd>{item.saleType}</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable> :
            <StyledP>нет соответствующих данных</StyledP>
    );
};

