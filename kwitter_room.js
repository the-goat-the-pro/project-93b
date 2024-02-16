// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAEGuZmxbQVGO8q4RWMgAdU3EvPAoYKzkA",
      authDomain: "project-kwitter-3b292.firebaseapp.com",
      databaseURL: "https://project-kwitter-3b292-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-3b292",
      storageBucket: "project-kwitter-3b292.appspot.com",
      messagingSenderId: "169674822315",
      appId: "1:169674822315:web:d75024bc5f8a344f059dee"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("User_name");
    document.getElementById("User_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding Room (room.exe)"
      });
      localStorage.setItem("room_name", room_name);
    
      window.location = "kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log("room_name " + Room_names);
          row = '<div class="room_name" id="' + Room_names + '" onclick="redirectToRoomName(this.id)">' + Room_names + '</div>';
          document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name) 
    {
      console.log(name);
      localStorage.setItem("room_name", nama);
      window.location = "kwitter_page.html";
    }
    
    function logout() 
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.localStorage = "index.html";
    }