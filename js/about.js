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





 // document.getElementById("tabledisplay").style.display = "none";
      
//
//
        document.getElementById('formReg').addEventListener('submit',function(e){
            e.preventDefault();
           
            var fname = document.getElementById('firstname');
            var lname = document.getElementById('lastname');
            var email = document.getElementById('email');
            var message = document.getElementById('message');
            
           firebase.database().ref('Feedback(users)').push({
                        fname: fname.value,
                        lname: lname.value,
                        email: email.value,
                        message: message.value
                        })
            .then(function(e){
                window.alert("Feedback Successfully sent! Thanks for giving your Feedback.");
                window.location.replace("feedbacksuccess.html");
            })
            .catch(function(error) {
                            //Errors
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            console.log(errorCode);
                            console.log(errorMessage);
            });            
                          
                    // firebase.auth().signout();
                 //    user2.value = '';
                 //    pass.value = '';
                  //   userName.value = '';
                  //   role.value = '';
          
      });
      
      





            

      /*
        firebase.database().ref('users').on('value',(data)=>{
         
            let users= data.val();
            document.getElementById('tableUsers').innerHTML='';
            for(const user in users) {
                document.getElementById('tableUsers').innerHTML=`
                <tr>
               
                <td>${users[user].userName}</td>
                <td>${users[user].email}</td>
                <td>${users[user].role}</td>
                </tr>
                `;
            }
        });



*/

        

    /*  
        var userId = firebase.auth().currentUser.uid;
 firebase.database().ref('users' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ..

  let users= data.val();
  document.getElementById('tableUsers').innerHTML='';
  for(const user in users) {
      document.getElementById('tableUsers').innerHTML=`
      <tr>
     
      <td>${users[user].userName}</td>
      <td>${users[user].email}</td>
      <td>${users[user].role}</td>
      </tr>
      `;
  }


});
      
      

*/
  


 