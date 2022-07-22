import { createContext } from "react";
import StorageService from "../service/storage_service";
import { app } from "../service/firebase";

const StorageContext=createContext();

export const StorageProvider=({children})=>{
    
    const storageService=new StorageService(app);

    return(
        <StorageContext.Provider value={{storageService}}>
            {children}
        </StorageContext.Provider>
    )
}

export default StorageContext;