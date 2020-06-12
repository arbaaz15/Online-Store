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
  
  
  
  
  
  function billingpage()
  {
    window.location.replace("Billing-Address-after-cart.html");
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  
  
  var r = localStorage.getItem("value");
  var sc = document.getElementById("r");
  
  
  
  ////////////////////////////////////////////////////////////////////////////////////////
  if( r == "btn-1")
  {
  window.addEventListener('load',(e)=>{
  
  
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var j = 0;
  
  storageRef.child('product_display/first').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        console.log(imageRef.toString());
  
        j++;
        displayImage(j,imageRef);
    });
  });
  
  function displayImage(row,images){
    images.getDownloadURL().then(function(url){
  
      document.getElementById('imags').innerHTML+=`
      <a href="${url}" target="_blank">
      <img src="${url}" alt="rabibio DSR" class="img-fluid">
      </a>`;
     
    });
  }
  });
  
}

 
  
  /////////////////////////////////////////////////////////////////////////////
  else if( r == "btn-2")
  {
  window.addEventListener('load',(e)=>{
  
  
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var j = 0;
  
  storageRef.child('product_display/second').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        console.log(imageRef.toString());
  
        j++;
        displayImage(j,imageRef);
    });
  });
  
  function displayImage(row,images){
    images.getDownloadURL().then(function(url){
  
      document.getElementById('imags').innerHTML+=`<img style="padding: 5px; border: 2px solid" src="${url}">`;
      
    });
  }
  document.getElementById('f1').innerHTML+=` <p style="float: right;">Sony</p>`;
      document.getElementById('f2').innerHTML+=`<p style="float: right;">G675</p>`;
      document.getElementById('f3').innerHTML+=`<p style="float: right;">105g5641323dsg2</p>`;
      document.getElementById('f4').innerHTML+=`<p style="float: right;">2017</p>`;
      document.getElementById('f5').innerHTML+=`<p style="float: right;">DSLR</p>`;
      document.getElementById('f6').innerHTML+=`<p style="float: right;">2 Years</p>`;
      document.getElementById('f7').innerHTML+=`<p style="float: right;">Rs. 40,000/- (Including GST 18%)</p>`;
  });
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
  
    firebase.firestore().collection("images").doc().get(
  
      var srcurl = url.data();
     
      document.getElementById('imags').innerHTML=` <img width="250" height="250" src="${url}">`;
  
    });
  
  
  
  
  
  
  /*
  
  function loadimg()
  {
    firebase.firestore().collection("images").doc("1").get().then(function(doc) {
      if (doc.exists) {
  
          var urlsrc = doc.data().url;
         
  
          document.getElementById('imags').innerHTML+=` <img width="250" height="250" src="${urlsrc}">`;
          alert(urlsrc);
       //   console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  
  }
  
  */
  
  
  /*
  
  function loadimg()
  {
    var storage = firebase.storage();
  var pathReference = storage.ref('images/1.jpg');
  
  
  var gsReference = storage.refFromURL('gs://bucket/images/1.jpg')
  
  
  storage.child('images/1.jpg').getDownloadURL().then(function(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
  
    var img = document.getElementById('imags');
    img.src = "url";
  }).catch(function(error) {
    // Handle any errors
  });
  
  
  }
  
  
  const theparent = document.querySelector("#parentproducts");
  theparent.addEventListener("click",loadimage,false);
  
  function loadimage(e){
    if(e.target !== e.currentTarget)
    {
      const clickedItem = e.target.id;
       alert("hello" +"--------" + clickedItem);
       localStorage.setItem()
    }
    e.stopPropagation();
  }
  
  
  
  
  */
  
  
  
  
  
  /*
  
  
  
  function loadimg1(){
   localStorage.setItem("value",document.querySelector("#btn-1"));
   window.location.replace("cart.html");
    return false;
  }
  
  
  window.addEventListener('load',(e)=>{
  e.preventDefault();
  
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var i = 0;
  
  storageRef.child('product_display/').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        console.log(imageRef.toString());
  
        i++;
        displayImage(i,imageRef);
  
    });
  });
  
  function displayImage(row,images){
    images.getDownloadURL().then(function(url){
  
      document.getElementById('imags').innerHTML+=`<img width="250" height="250" src="${url}">`;
      alert(url);
    });
  }
  });
  
  
  
  
  
  
  
  function loadimg2(){
    // localStorage.setItem("value",document.getElementById("btn-1"));
    window.location.replace("cart.html");
    // return false;
   }
  
   document.getElementById("btn-2").addEventListener('click',(e)=>{
  
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var j = 0;
  
  storageRef.child('product_display/first/').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        console.log(imageRef.toString());
  
        j++;
        displayImage(j,imageRef);
    });
  });
  
  function displayImage(row,images){
    images.getDownloadURL().then(function(url){
  
      document.getElementById('imags').innerHTML+=` <img width="250" height="250" src="${url}">`;
    });
  }
  });
  
  
  
  */
  
