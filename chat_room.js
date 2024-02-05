var firebaseConfig = {
  apiKey: "AIzaSyDFhhckLD5-8XWR2p4YFPkZSdbz0PDSdx0",
  authDomain: "html-hub-357ef.firebaseapp.com",
  databaseURL: "https://html-hub-357ef-default-rtdb.firebaseio.com",
  projectId: "html-hub-357ef",
  storageBucket: "html-hub-357ef.appspot.com",
  messagingSenderId: "134135487788",
  appId: "1:134135487788:web:3019d8e9f4c635fb212089"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
