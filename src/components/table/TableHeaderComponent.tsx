import { FC } from 'react'
import styled from 'styled-components';

const StyledTable = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const StyledTh = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const TableHeaderComponent: FC = () => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    {/* <StyledTh>ID</StyledTh> */}
                    <StyledTh>Наименование</StyledTh>
                    <StyledTh>Цена</StyledTh>
                    {/* <StyledTh>Nomenclature</StyledTh> */}
                    {/* <StyledTh>Photo URL</StyledTh> */}
                    <StyledTh>Порция</StyledTh>
                    <StyledTh>Тип продукции</StyledTh>
                </tr>
            </thead>
        </StyledTable>

    )
}
