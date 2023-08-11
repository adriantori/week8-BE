//user data
interface Transaction {
    id: number;
    type: string;
    name: string;
    detail: string;
    amount: number;
}

const transactions: Transaction[] = [
    { id: 1, type:"cash in", name: "gajian", detail: "gajian bulanan", amount: 100000},
    { id: 2, type: "cash out", name: "khilaf", detail: "steam sale", amount: 50000},
]

export default transactions;