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





document.getElementById("tabledisplay").style.display = "none";
//document.getElementById("textform").style.display = "none";
      
//
//
        document.getElementById('formReg').addEventListener('submit',function(e){
            e.preventDefault();

          document.getElementById("tabledisplay").style.display = "block";
          document.getElementById("textform").style.display = "none";

            var firstname = document.getElementById('firstname');
            var lastname = document.getElementById('lastname');
            var email = document.getElementById('email');
            var address = document.getElementById('address');
            var city = document.getElementById('city');
            var state = document.getElementById('state');
            var pincode = document.getElementById('pincode');

          //  alert(firstname+lastname+email+address+city+state+pincode );
            
           firebase.database().ref('DeliveryAddress').push({
                          firstname: firstname.value,
                          lastname: lastname.value,
                          email: email.value,
                          address: address.value,
                          city: city.value,
                          state: state.value,
                          pincode: pincode.value })
            .catch(function(error) {
                            //Errors
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            console.log(errorCode);
                            console.log(errorMessage);
            });            
                          
                    // firebase.auth().signout();
                    firstname.value = '';
                    lastname.value = '';
                    email.value = '';
                    address.value = '';
                    city.value = '';
                    state.value= '';
                    pincode.value= '';
      });
      
      


   
        firebase.database().ref('DeliveryAddress').on('value',(data)=>{
         
            let DeliveryAddress= data.val();
            //document.getElementById('tableUsers').innerHTML='';
            for(const user in DeliveryAddress) {
                
                document.getElementById('tableUsers1').innerHTML=`
                <tr>
                <td>${DeliveryAddress[user].firstname}</td>
                </tr>
                `;
                document.getElementById('tableUsers2').innerHTML=`
                <tr>
                <td>${DeliveryAddress[user].lastname}</td>
                </tr>
                `;
                document.getElementById('tableUsers3').innerHTML=`
               <tr>
                <td>${DeliveryAddress[user].email}</td>
                </tr>
                `;
                document.getElementById('tableUsers4').innerHTML=`
               <tr>
                <td>${DeliveryAddress[user].address}</td>
                </tr>
                `;
                document.getElementById('tableUsers5').innerHTML=`
               <tr>
                <td>${DeliveryAddress[user].city}</td>
                </tr>
                `;
                document.getElementById('tableUsers6').innerHTML=`
               <tr>
                <td>${DeliveryAddress[user].state}</td>
                </tr>
                `;
                document.getElementById('tableUsers7').innerHTML=`
               <tr>
                <td>${DeliveryAddress[user].pincode}</td>
                </tr>
                `;
               
            }
        });





        

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
  


 