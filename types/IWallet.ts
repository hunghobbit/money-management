import { User } from "firebase/auth";

export interface IWallet {
    userId: string;
    owner: User;
    walletBalance: number;
    walletName: string;
    walletNote: string;
}
