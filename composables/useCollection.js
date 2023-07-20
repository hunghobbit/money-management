import { fireStoreCore } from "../configs/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { reactive, onUnmounted } from "vue";

var myCollection = reactive([])
// var error = reactive({});
// var isPending = ref(false);
const useCollection = async (collName) => {
    myCollection = reactive([])
    
    const querySnapshot = await getDocs(collection(fireStoreCore, collName));
    myCollection = querySnapshot.docs.map(e => {return {id: e.id, ...e.data()}})
    
    if(myCollection.length === 0){
        console.log(`[Collection \"${collName}\"]:\t`+"Empty Collection!");
    }

    /**
     * 
     * @description This method is called
     * 
     * @param {*} collName 
     * @param {*} data 
     */
    const addDocumentData = async (collName, data) => {
        return await addDoc(collection(fireStoreCore, collName), data);

    }
    /**
     * 
     * @description add document data with the specified identifier to the collection
     * 
     * @param {*} collsRef 
     * @param {*} data 
     */
    const setDocumentData = async (collRef, data) => {
        const newDocRef = doc(collRef);
        await setDoc(newDocRef, data);
    }
    /**
     * 
     * @description Update the document with the given data
     * 
     * @param {*} collName
     * @param {*} docRefId 
     * @param {*} updateData 
     */
    const updateDocumentData = async (docRefId, updateData) => {
        const docRef = doc(fireStoreCore, collName, docRefId);
        await updateDoc(docRef, updateData);
    }

    

    /**
     * @param col @type CollectionReference -- collection whom the finding doc was save in
     * @param id @type String | nullable | undefined
     */
    const findDocById = async (id) => {
        return myCollection.find(data => data.id === id);
    }



    /**
     * @param col @type CollectionReference: CollectionReference instance whom the finding doc was save in
     * @param field @type String | nullable | undefined
     * @param fieldValue @type any
     * @param cprOprString @type String | nullable | undefined: compare operator string includes >,<, =, !=, >=, <=, ===
     * 
     * @returns any[]
     *  */
    const findDocsByField = async (fieldName, comparingOperator, fieldValue) => {
        eval?.(`"use strict";return myCollection.filter(_data =>_data[${fieldName}] ${comparingOperator} ${fieldValue})`)
    }
    
    onUnmounted(() => {
        myCollection = [];
    })
    return { 
        myCollection,
        setDocumentData,
        addDocumentData,
        findDocById,
        findDocsByField,
        updateDocumentData
    }
}

export default useCollection;