export interface ITableProps {
    cost: string;
    id: number;
    nomenclature: string | null;
    photoUrl: string;
    portion: string;
    saleType: string;
    title: string;
}

export interface ITableParams {
    isSticky: boolean;
    width: number
}