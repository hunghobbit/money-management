import { defineStore, acceptHMRUpdate } from 'pinia'
export const useWalletsStore = defineStore('wallets', {
 state: () => ({
   wallets: [],
   owner: 
 }),
 getters: {},
 actions: {},
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useWalletsStore, import.meta.hot))
}
