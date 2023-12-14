import { ArgusAppHeaders, ArgusSearchParams, ITableProps } from "../types";

const headers: ArgusAppHeaders = {
    "Argus-App-Type": "food",
    "Argus-Auth-Token": "teNSmM0i0Pz2Wph_-7nSYg",
    "Argus-School-Id": "587",
};

export async function fetchData(params: ArgusSearchParams): Promise<any> {
    const { search } = params;
    const apiUrl = "https://api0.sms-dnevnik.com/rest/food/items";

    const queryParams = new URLSearchParams({
        limit: '100',
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