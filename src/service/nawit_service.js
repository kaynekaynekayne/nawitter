import { addDoc, collection, doc, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'; 
import {app} from './firebase';

class NawitService{
    constructor(){
        this.firestore=getFirestore(app);
    }

    async uploadContent(nawitObj){
        await addDoc(collection(this.firestore,"nawits"),nawitObj)
    }

    getContent(onUpdate){
        const q=query(collection(this.firestore, "nawits"),orderBy("createdAt","desc"));
        onSnapshot(q,(snapshot)=>{
            const getNawits=snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
            getNawits && onUpdate(getNawits);
        })
    }
}

export default NawitService;