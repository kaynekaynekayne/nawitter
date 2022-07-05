import { 
    addDoc, 
    collection, 
    deleteDoc, 
    doc, 
    getDocs, 
    getFirestore, 
    onSnapshot, 
    orderBy, 
    query, 
    updateDoc,
    where
} from 'firebase/firestore'; 
import {app} from './firebase';

class FirestoreService{
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

    async getMyContents(id, onUpdate){
        const q=query(collection(this.firestore, "nawits"),where("creatorId","==",id),orderBy("createdAt","desc"));
        const posts=await getDocs(q);
        const getPosts=posts.docs.map((post)=>({...post.data(),id:post.id}));
        getPosts && onUpdate(getPosts)
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

export default FirestoreService;