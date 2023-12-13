import { FC } from 'react';
import { ITableProps } from '../types';
import styled from 'styled-components';

interface ITable {
    tableData: ITableProps[]
}

const StyledTableWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 500px;
  min-width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  padding: 10px;
  text-align: right;
  border-bottom: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 10px;
  text-align: right;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
`;

const SearchRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 40px; /* Adjust as needed */
  z-index: 1;
`;

export const TableComponent: FC<ITable> = ({ tableData }) => {
    return (
        <StyledTableWrapper>
            <StickyHeader>
                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTh>ID</StyledTh>
                            <StyledTh>Title</StyledTh>
                            <StyledTh>Cost</StyledTh>
                            <StyledTh>Nomenclature</StyledTh>
                            <StyledTh>Photo URL</StyledTh>
                            <StyledTh>Portion</StyledTh>
                            <StyledTh>Sale Type</StyledTh>
                        </tr>
                    </thead>
                </StyledTable>
            </StickyHeader>

            <SearchRow>
                {/* Add your search input or any other content here */}
                <input type="text" placeholder="Search" />
            </SearchRow>

            <StyledTable>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item.id}>
                            <StyledTd>{item.id}</StyledTd>
                            <StyledTd>{item.title}</StyledTd>
                            <StyledTd>{item.cost}</StyledTd>
                            <StyledTd>{item.nomenclature}</StyledTd>
                            <StyledTd>{item.photoUrl}</StyledTd>
                            <StyledTd>{item.portion}</StyledTd>
                            <StyledTd>{item.saleType}</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </StyledTableWrapper>
    );
};

