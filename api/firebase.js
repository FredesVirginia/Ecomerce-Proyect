// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');


const { getAuth } = require('firebase/auth');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCORZ-KblwSjLEtCpOiU5gVFiIYbDEVnZ8",
  authDomain: "ecommerce-7a774.firebaseapp.com",
  projectId: "ecommerce-7a774",
  storageBucket: "ecommerce-7a774.appspot.com",
  messagingSenderId: "516600010753",
  appId: "1:516600010753:web:fcc58e49ea10b8662e0800",
  measurementId: "G-50WJDBH3TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

module.exports = {
    auth
}