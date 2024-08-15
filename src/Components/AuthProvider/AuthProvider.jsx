import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";





export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUsers] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const githubLogin = () => {
        setLoading(true)
        return  signInWithPopup(auth,githubProvider)
        
         
      }
    const googleLogin = () => {
        setLoading(true)
      return  signInWithPopup(auth,googleProvider)
      
       
    }



    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin,
        githubLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;