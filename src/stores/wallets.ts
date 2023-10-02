// import useCollection from '~/composables/useCollection'
import { defineStore } from 'pinia'
import { ref } from 'vue';
import {
  type QueryDocumentSnapshot,
  type WithFieldValue,
  doc,
  setDoc,
  getDocs,
  collection,
  addDoc,
  type FirestoreDataConverter
} from 'firebase/firestore';
import { fireStoreCore } from '~/configs/firebase';
import { useUser } from '~/composables/useUser';

class Wallet {
  constructor(readonly name: string, readonly balance: number, readonly owner: string, userId: string, readonly note?: string) {
    this.userId = userId;
    this.balance = balance;
    this.name = name;
    this.owner = owner;
    this.note = note ?? "This is your wallets!";
  }
}


interface WalletDbModel {
  name: string;
  balance: number;
  owner: string;
  note?: string;
  userId: string;
}

let walletConverter: FirestoreDataConverter<Wallet> = {
  toFirestore(wallet: WithFieldValue<Wallet>): WithFieldValue<WalletDbModel> {
    return {
      name: wallet.name,
      balance: wallet.balance,
      owner: wallet.owner,
      userId: wallet.userId,
      note: wallet?.note,
    }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<Wallet>
  ): Wallet {
    const data = snapshot.data() as unknown as WalletDbModel;
    return new Wallet(
      data.name,
      data.balance,
      data.owner,
      data.note,
      data.userId
    );
  }
}

export const useWalletsStore = defineStore('wallets', () => {

  let wallets = ref<any[]>([]);
  let error: Error | null = null;

  const addWallet = async (name: string, note: string, balance: number): Promise<{ success: boolean; message: string; }> => {
    try {
      const walletCollRef = collection(fireStoreCore, 'wallets').withConverter(walletConverter);
      const owner = useUser().userInfo()?.displayName ?? "";
      await addDoc(walletCollRef, new Wallet(name, balance, owner, note));

    } catch (err: any) {
      error = new Error(err);
      console.log(error.message);

    }
    return (error === null) ? { success: true, message: `Created ${name} wallet!` } : { success: false, message: error.message }
  };


  const getWallets = async () => {
    const collRefs = await getDocs(collection(fireStoreCore, "wallets").withConverter(walletConverter));
    
    wallets.value = collRefs.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  };


  return { wallets, error, getWallets, addWallet }

})

