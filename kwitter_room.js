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

    username = localStorage.getItem("username");

    document.getElementById("username").innerHTML = "Welcome "+ username + "!";
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
//Start code
      row = "<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
//End code
});});}
getData(); 

roomname = document.getElementById("addRoom").innerHTML

function addRoom() {

      username = document.getElementById('addRoom').value;
      localStorage.setItem('addRoom', addRoomname);
  
      window.location = "kwitter_room.html";
      
  
  }
function redirectToRoomName(){

      localStorage.setItem("roomname", roomname);


      console.log(name);

      window.location = "kwitter_room.html";
}

function send(){
      
}
function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}