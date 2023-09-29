import { fireStoreCore } from "../configs/firebase";
import { collection, getDocs, addDoc, QuerySnapshot, doc, setDoc, updateDoc, CollectionReference } from "firebase/firestore";
import { reactive, onUnmounted } from "vue";

var myCollection = reactive<any[]>([])

/**
 * 
 * @param {string} collName 
 */
const useCollection = async (collName: string) => {
  myCollection = reactive([]);

  const querySnapshot: QuerySnapshot = await getDocs(collection(fireStoreCore, collName));
  myCollection = querySnapshot.docs.map((e) => ({ id: e.id, ...e.data() }));

  if (myCollection.length === 0) {
    console.log(`[Collection \"${collName}\"]:\t` + "Empty Collection!");
  }

  // =============== Paginate =====================
  /**
   * @param {number} l - Limit items
   */
  // const paginate = (l:number) => {
  //   return 
  // }
  
  /**
   *
   * @description This method is called
   *
   * @param {string} collName
   * @param {Object} data
   */
  const addDocumentData = async (collName: string, data: any) => {
    return await addDoc(collection(fireStoreCore, collName), data);
  };
  /**
   *
   * @description add document data with the specified identifier to the collection
   *
   * @param {*} collsRef
   * @param {*} data
   */
  const setDocumentData = async (collRef: CollectionReference<unknown>, data: any) => {
    const newDocRef = doc(collRef);
    await setDoc(newDocRef, data);
  };
  /**
   *
   * @description Update the document with the given data
   *
   * @param {*} collName
   * @param {*} docRefId
   * @param {*} updateData
   */
  const updateDocumentData = async (docRefId: string, updateData: any) => {
    const docRef = doc(fireStoreCore, collName, docRefId);
    await updateDoc(docRef, updateData);
  };

  /**
   * @param {string | null | undefined} id
   */
  const findDocById =  (id: any) : Promise<any> => {
    return  myCollection.find((data) => data.id === id);
  };

  /**
   * 
   * @returns any[]
   *  */
  const findDocsByField = async (fieldName: any, comparingOperator: any, fieldValue: any) => {
    eval?.(
      `"use strict";return myCollection.filter(_data =>_data[${fieldName}] ${comparingOperator} ${fieldValue})`
    );
  };

  
  return {
    myCollection,
    setDocumentData,
    addDocumentData,
    findDocById,
    findDocsByField,
    updateDocumentData,
  };
}

export default useCollection;