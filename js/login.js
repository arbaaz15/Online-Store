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
  
  
  
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    firebase.auth().signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred.user);
      // close the signup modal & reset form
     // const modal = document.querySelector('#modal-login');
     // M.Modal.getInstance(modal).close();
     // loginForm.reset();
     console.log('logged in....');
     window.alert("login successfull!");
     window.location.replace('products.html');
    })
    .catch(function(error) {
      //Errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Please check your Email and Password again!");
});
  
  });