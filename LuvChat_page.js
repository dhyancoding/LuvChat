//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCjb1IEHm4dpc83rjNY777XAaRkhwx_MMw",
      authDomain: "luvchat-c3958.firebaseapp.com",
      databaseURL: "https://luvchat-c3958-default-rtdb.firebaseio.com",
      projectId: "luvchat-c3958",
      storageBucket: "luvchat-c3958.appspot.com",
      messagingSenderId: "1061626220090",
      appId: "1:1061626220090:web:9f91382062ba9866d02f03"
    };

username = localStorage.getItem("username")

groupname = localStorage.getItem("group_name")

    firebase.initializeApp(firebaseConfig)
function getData() { firebase.database().ref("/"+groupname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function LogOut(){
      localStorage.removeItem("username")
      localStorage.removeItem("group_name")
      window.location = "index.html"
}

username = localStorage.getItem("username")

groupname = localStorage.getItem("group_name")

function Send(){
      mes = document.getElementById("mesg").value 
      firebase.database().ref(groupname).push({
            name: username, message: mes, like:0
      })
      document.getElementById("mesg").value = " "

}