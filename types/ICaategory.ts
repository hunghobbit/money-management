import { ITransaction } from "./ITransaction";

export interface ICaategory{
    categoryName: string;
    transactions: Array<ITransaction>
}