import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../LoginManager/Firebase/firebase.init"

initializeAuthentication();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [sendVerificationEmail, setSendVerificationEmail] = useState(false);
    const [user, setUser] = useState({});
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
                setUser(userCredential.user);

                setSendVerificationEmail(true)
                const photoURL = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                saveUser(email, name, photoURL, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    verifyEmail();
                }).catch((error) => {
                });
                navigate('/');
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
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    //Observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user.emailVerified) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    // admin checking
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
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
        sendVerificationEmail
    }
}

export default useFirebase;