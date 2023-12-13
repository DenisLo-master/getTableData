import { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components';

const SearchRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 1;
`;

interface ISearchRowComponent {
    setSearch: (value: string) => void;
}
export const SearchRowComponent: FC<ISearchRowComponent> = ({ setSearch }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setSearch(value)
    }

    return (
        <SearchRow>
            {/* Add your search input or any other content here */}
            <input type="text" value={inputValue} placeholder="Поиск" onChange={handleInputChange} />
        </SearchRow>
    )
}
