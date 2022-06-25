import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    GithubAuthProvider, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged
} from 'firebase/auth';
import {app} from './firebase';

class AuthService{
    constructor(){
        this.firebaseAuth=getAuth(app);
        this.googleProvider=new GoogleAuthProvider();
        this.githubProvider=new GithubAuthProvider();
    }

    async signup(email,password){
        const user=await createUserWithEmailAndPassword(this.firebaseAuth,email,password)
        return user;
    }

    async loginWithEmail(email,password){
        const user=await signInWithEmailAndPassword(this.firebaseAuth, email,password);
        return user;
    }

    onAuthChange(changeLoginInfo){
        onAuthStateChanged(this.firebaseAuth, (user)=>{
            changeLoginInfo(user);
        })
    }

    async login(providerName){
        const authProvider=this.getProvider(providerName);
        return await signInWithPopup(this.firebaseAuth, authProvider);
    }

    getProvider(providerName){
        switch(providerName){
            case 'google':
                return this.googleProvider;
            case 'github':
                return this.githubProvider;
            default:
                throw new Error(`not supported ${providerName}`);
        }

    }
}

export default AuthService;