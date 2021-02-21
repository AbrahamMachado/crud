import firebase from 'firebase/app'
import 'firebase/firestore'

//nos permite conectar a la base de datos no relacional
const firebaseConfig = {
    apiKey: "AIzaSyC3kFzfJQZ9qI0BKvJEeVUMvg0ZEPRTRPM",
    authDomain: "crud-95e1c.firebaseapp.com",
    projectId: "crud-95e1c",
    storageBucket: "crud-95e1c.appspot.com",
    messagingSenderId: "583854871929",
    appId: "1:583854871929:web:6da07fab633dfb155c4ba8"
  }

  //metodo que nos permite conectarnos a la base de datos con el string conection
  export const firebaseApp = firebase.initializeApp(firebaseConfig)