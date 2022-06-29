import { 
    addDoc, 
    collection, 
    deleteDoc, 
    doc, 
    getFirestore, 
    onSnapshot, 
    orderBy, 
    query, 
    updateDoc
} from 'firebase/firestore'; 
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

    async deleteContent(id){
        const docRef=doc(this.firestore,"nawits",id);
        await deleteDoc(docRef);
    }

    async editContent(id,text){
        const docRef=doc(this.firestore,"nawits",id);
        await updateDoc(docRef, {
            content:text,
        })
        
    }
}

export default NawitService;