import { ArgusAppHeaders, ArgusSearchParams, ITableProps } from "../types";

export async function fetchData(params: ArgusSearchParams, headers: ArgusAppHeaders): Promise<any> {
    const { limit, search } = params;
    const apiUrl = "https://api0.sms-dnevnik.com/rest/food/items";

    const queryParams = new URLSearchParams({
        limit,
        search,
    });

    const urlWithParams = `${apiUrl}?${queryParams.toString()}`;
    try {
        const response = await fetch(urlWithParams, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }



        const data = await response.json();
        const result: ITableProps[] = Object.values(data.items)
        if (!Array.isArray(result) || !result.every((item: ITableProps) => typeof item === 'object')) {
            throw new Error('Ошибка: некорректный формат полученных данных от сервера');
        }
        return result;
    } catch (error) {
        throw error;
    }
}