import { fireStoreCore } from '../configs/firebase.js'
import { collection, getDocs } from 'firebase/firestore';


import { ref, onUnmounted } from 'vue'


const collections = ref([]);
const error = ref(null);
const isPending = ref(false);
const useCollection = (collectionName) => {
    const getAll = async () => {
        try {
            error.value = null;
            isPending.value = true;
            const querySnapshot = await getDocs(collection(fireStoreCore, collectionName));
            if(querySnapshot.empty) 
            {
                console.log('No matching documents.');
                return;
            }
            collections.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            isPending.value = false;
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        } finally{
            isPending.value = false;
        }
    }
    
    onUnmounted(() => {
        collections.value = [];
    });
    

    return { collections, error, getAll };
}
export default useCollection;