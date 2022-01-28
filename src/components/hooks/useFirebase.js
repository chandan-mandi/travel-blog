import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import initializeAuthentication from "../LoginManager/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [userDetail, setUserDetail] = useState({});
    const [createdAc, setCreateAccount] = useState({});
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                console.log(userCredential);
                setCreateAccount(userCredential.user);
                toast.success("Please Check Your Email")
                const photoURL = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                saveUser(email, name, photoURL, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    verifyEmail();
                    navigate('/');
                }).catch((error) => {
                });
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() =>{
                setIsLoading(false)
                // window.location.reload();
            } );
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);

            })
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
                setUserDetail(userCredential.user)
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, user.photoURL, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
                setUserDetail(user)
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    //Observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            console.log("auth",auth);
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))
                setUser(user);
            } else if(user.emailVerified === false) {
                toast.error("Please Verify your email")
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    // admin checking
    useEffect(() => {
        axios.get(`http://localhost:5000/users/${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => setAdmin(data.data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            setIsLoading(false)
        }).catch((error) => {
            // An error happened.
            console.log(error);
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, photoURL, method) => {
        const user = { email, displayName, photoURL };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        authError,
        signInWithGoogle,
        admin,
        createdAc
    }
}

export default useFirebase;