var firebaseConfig = {
      apiKey: "AIzaSyB_J7LfW60qHAW7ZPyvMpO4pY1AfC0kTxk",
      authDomain: "lets-chat-web-app-1e9b6.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-1e9b6-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-1e9b6",
      storageBucket: "lets-chat-web-app-1e9b6.appspot.com",
      messagingSenderId: "232367109700",
      appId: "1:232367109700:web:313db46c2907fafc44ee11",
      measurementId: "G-JGDD45TJYB"
    };
    
    // Initialize Firebase
    var app = firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code

      //End code
     });});}
getData();
