import _ from 'lodash';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Configuración de Firebase usando las variables de entorno de .env
const firebaseConfig = {
    apiKey: "AIzaSyDLcVRrInDRrU6SozC8TeXT4TAAOI9F3H4",
    authDomain: "i-glue.firebaseapp.com",
    projectId: "i-glue",
    storageBucket: "i-glue.appspot.com",
    messagingSenderId: "1016994644319",
    appId: "1:1016994644319:web:5f23689a4c1418dbbeb6ea"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const button = document.getElementById("boton");
button.addEventListener("click", function () {
    const usuario = document.getElementById("username");
    const pass = document.getElementById("password");
    const email = usuario.value;
    const password = pass.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Usuario registrado exitosamente
            const user = userCredential.user;
            alert("Usuario registrado con éxito. Puedes iniciar sesión ahora.");
            // Aquí puedes redirigir a otra página o realizar alguna otra acción.
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Ha ocurrido un error al registrar el usuario: " + errorMessage);
        });
});