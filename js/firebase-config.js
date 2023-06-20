const firebaseConfig = {
 apiKey: "AIzaSyD7X2NjPhtAIM57UVOhxrulwgFfcA4WJCA",
 authDomain: "dent-lab-cea8c.firebaseapp.com",
 projectId: "dent-lab-cea8c",
 storageBucket: "dent-lab-cea8c.appspot.com",
 messagingSenderId: "761107778035",
 appId: "1:761107778035:web:9b13bcf068fb26d00aea86",
 measurementId: "G-1WF5TVHB3D"
};


//incializa o site com firebase
firebase.initializeApp(firebaseConfig);

//cria objeto da authentication para que eu possa usar meus métodos
const auth = firebase.auth();

//cria objeto do DB firestore para que eu possa usar meus métodos
const db = firebase.firestore();
