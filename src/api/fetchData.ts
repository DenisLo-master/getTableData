import { ArgusAppHeaders, ArgusSearchParams } from "../types";

export async function fetchData(params: ArgusSearchParams, headers: ArgusAppHeaders): Promise<any> {
    const { limit, search } = params;
    const apiUrl = "https://api0.sms-dnevnik.com/rest/food/items";

    const queryParams = new URLSearchParams({
        limit,
        search,
    });

    const urlWithParams = `${apiUrl}?${queryParams.toString()}`;
    console.log("Request URL:", urlWithParams);
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
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}