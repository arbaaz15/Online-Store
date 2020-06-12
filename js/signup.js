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
  firebase.analytics();




  var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'products.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
     // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'raj.html',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };


  // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
 
 
 
 
 
 
 




//
  document.getElementById('signupform').addEventListener('submit',function(e){
     e.preventDefault();


      var first_name = document.getElementById('first_name');
      var last_name = document.getElementById('last_name');
      var email = document.getElementById('email');
      var phone = document.getElementById('phone');
      var password = document.getElementById('password');
      var confirm_password = document.getElementById('confirm_password');
      var gender = document.getElementById('result');


      if(password.value != confirm_password.value)
      {
          window.alert("Confirm password doesnot match ! Try again...");
      }
      
else{


      
      firebase.database().ref('New_User_signup').push({
        first_name:  first_name.value,
        last_name: last_name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        gender: gender.value
      })
  .catch(function(error) {
          //Errors
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
  });        

  //
  firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
  .then(function(response) {
      
      console.log(response);
      console.log('successful!');
      window.alert('Signup Successfull');
         window.location.replace('products.html');
  })
  
  .catch(function(error) {
        //Errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
  });
  
  
  
  

}


    });
     




    
    





