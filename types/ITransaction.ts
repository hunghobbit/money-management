import { IWallet } from "./IWallet";
import { ICaategory } from './ICaategory'
import { User } from "firebase/auth";
export interface ITransaction {
    balance: number;
    title : string;
    note: string;
    createAt: Date;
    userId: string;
    user: User
    walletId: string;
    wallet: IWallet;
    category: ICaategory
}