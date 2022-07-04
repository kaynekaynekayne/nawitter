import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import { v4 } from 'uuid';
import {app} from './firebase';

class StorageService{
    constructor(){
        this.storage=getStorage(app);
    }

    async uploadImage(attachment){
        const imageRef=ref(this.storage,`images/${attachment.name+v4()}`);
        const a= await uploadBytes(imageRef, attachment);
        console.log(a)
        // const attachmentUrl=await getDownloadURL(imageRef);
        // return attachmentUrl;
    }
    
    
}

export default StorageService;