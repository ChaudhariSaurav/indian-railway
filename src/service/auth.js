/* eslint-disable no-unused-vars */
// import { redirect } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";
import { auth, googleProvider } from "../config/firebase";
import useDataStore from "../zustand/userDataStore";

const userLogin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        useDataStore.getState().setUser(user);
        window.location.href = "/welcome";
        return user;
    } catch (error) {
        console.log({ error });
        if (error.code === "auth/user-not-found") {
            return "User not found";
        } else if (error.code === "auth/wrong-password") {
            return "auth/wrong-password";
        }
        // Return the raw error message from Firebase for any other error.
        return error.message;
    }
};

const GoogleLogin = () => {
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential) {
                    const user = result.user;
                    const db = getDatabase();

                    const userRef = ref(db, `Profile/`, `${user.email}`);
                    get(userRef).then((snapshot) => {
                        if (!snapshot.exists()) {
                            set(userRef, {
                                name: user.displayName,
                                email: user.email,
                                isPhoneNumberVisible: true,
                                isProfileImageVisible: true,
                                phone: user.phoneNumber,
                                profileImageUrl: user.photoURL,
                            });
                        }
                    });
                    resolve(user)
                }
                reject("Something Went Wrong");
                // toast.success({ credential });
                // return credential
            })
            .catch((error) => {
                const errorMessage = error.message;
                reject(errorMessage);
            });
    });
};

const userSignOut = async () => {
    const signOutUser = await signOut(auth);
    localStorage.removeItem("UserData Storage");
    localStorage.removeItem("isLoggedIn");
    window.location.href = '/';
    return signOutUser;
};



export {
    // userSignUp,
    userLogin,
    userSignOut,
    GoogleLogin,

};