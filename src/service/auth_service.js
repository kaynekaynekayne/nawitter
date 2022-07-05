import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    GithubAuthProvider, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from 'firebase/auth';
import {app} from './firebase';

class AuthService{
    constructor(){
        this.firebaseAuth=getAuth(app);
        this.googleProvider=new GoogleAuthProvider();
        this.githubProvider=new GithubAuthProvider();
    }

    async signup(email,password){
        return await createUserWithEmailAndPassword(this.firebaseAuth,email,password)
    }

    async loginWithEmail(email,password){
        return await signInWithEmailAndPassword(this.firebaseAuth, email,password);
    }

    onAuthChange(changeLoginInfo){
        onAuthStateChanged(this.firebaseAuth, (user)=>{
            changeLoginInfo(user);
        })
    }

    async updateNickname(newDisplayName){
        await updateProfile(this.firebaseAuth.currentUser, {
            displayName: newDisplayName,
        });
    }

    logout(){
        return signOut(this.firebaseAuth);
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