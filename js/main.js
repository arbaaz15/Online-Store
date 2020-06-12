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
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




  //Reference messages collection
  var messagesRef = firebase.database().ref('messages');





document.getElementById('contactform').addEventListener('submit',submitForm);


//submit form

function submitForm(e){
    e.preventDefault();


    var name = getInputVal('name');
    var email = getInputVal('email');
    var password = getInputVal('password');
    var phone = getInputVal('phone');
    var city = getInputVal('city');
    var address = getInputVal('address');

    //save message
    saveMessage(name,email,password,phone,city,address);
    
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}



// save the messages to firebase
function saveMessage(name,email,password,phone,city,address){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        password:password,
        phone:phone,
        city:city,
        address:address
    });
}









//LOGIN PART


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.alert("Authentication successfull.");
    } else {
      // No user is signed in.
      window.alert("Authentication unsuccessfull !!");
    }
  });


/*
  document.getElementById('login-btn').addEventListener('submit',loginForm);

  function loginForm(e)
  {
    e.preventDefault();

    var useremail = document.getElementById('email_field').value;
    var userpassword = document.getElementById('password_field').value;

    window.alert(useremail + " " + userpassword);


    firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error : " + errorMessage);
      });
}
  }*/


/*

function login()
{
    var useremail = document.getElementById('email_field').value;
    var userpassword = document.getElementById('password_field').value;

    window.alert(useremail + " " + userpassword);
    preventDefault();

    firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error : " + errorMessage);
      });
}*/