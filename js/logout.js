// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyACg1Uo-t-2nEI2Zr81o5zs6NFYWevb_0A",
    authDomain: "web-store-watch-store.firebaseapp.com",
    databaseURL: "https://web-store-watch-store.firebaseio.com",
    projectId: "web-store-watch-store",
    storageBucket: "web-store-watch-store.appspot.com",
    messagingSenderId: "1098443288857",
    appId: "1:1098443288857:web:9c549d55032cca49189588",
    measurementId: "G-CHZZ00869C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  

  
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  firebase.auth().signOut().then((cred) => {


    console.log('user signed out');
    window.alert("loged out !");
    window.location.replace('index.html');
  });
})
