import { addDoc, collection, getFirestore } from 'firebase/firestore'; 
import {app} from './firebase';

class NawitService{
    constructor(){
        this.firestore=getFirestore(app);
    }

    async uploadContent(nawitObj){
        await addDoc(collection(this.firestore,"nawits"),nawitObj)
    }
}

export default NawitService;