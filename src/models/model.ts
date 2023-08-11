//user data
interface Transaction {
    id: number;
    name: string;
    details: string;
    amount: number;
}

const transactions: Transaction[] = [
    { id: 1, name: "cash in", details: "gajian", amount: 100000},
    { id: 2, name: "cash out", details: "steam sale", amount: 50000},
]

export default transactions;