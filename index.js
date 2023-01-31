// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_m1kkAqaK1GUJpsx55q2HuN8EWl5OxHc",
    authDomain: "test-deploy-376314.firebaseapp.com",
    projectId: "test-deploy-376314",
    storageBucket: "test-deploy-376314.appspot.com",
    messagingSenderId: "831444875978",
    appId: "1:831444875978:web:b64722bb01a64bb7b29233",
    measurementId: "G-HLHGLP8GC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function save(){
    firebase.database().ref("users").set({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    })
}
