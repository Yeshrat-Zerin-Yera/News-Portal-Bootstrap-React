// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8Sz2tIvhpbL_jD710NMaSJLVFEjjO8w4",
    authDomain: "news-portal-bootstrap-react.firebaseapp.com",
    projectId: "news-portal-bootstrap-react",
    storageBucket: "news-portal-bootstrap-react.appspot.com",
    messagingSenderId: "676807949685",
    appId: "1:676807949685:web:d7c332b9d604080b01a73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;