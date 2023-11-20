
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCjb1IEHm4dpc83rjNY777XAaRkhwx_MMw",
      authDomain: "luvchat-c3958.firebaseapp.com",
      databaseURL: "https://luvchat-c3958-default-rtdb.firebaseio.com",
      projectId: "luvchat-c3958",
      storageBucket: "luvchat-c3958.appspot.com",
      messagingSenderId: "1061626220090",
      appId: "1:1061626220090:web:9f91382062ba9866d02f03"
    };
    firebase.initializeApp(firebaseConfig)

    username = localStorage.getItem("username")
    document.getElementById("user_name").innerHTML = "Welcome " + username + ", to LuvChat 🥰!"

function getData() {
      firebase.database().ref("/").on('value', function(snapshot)
       {document.getElementById("output").innerHTML = "";snapshot.forEach(
            function(childSnapshot)
        {childKey  = childSnapshot.key;
       Group_names = childKey;
      //Start code
      console.log(Group_names)
      row = "<div class = 'group_name' id='" + Group_names + "' onclick='redirect_toGroupname(this.id)' >" + Group_names + "</div> <hr>" 
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();


function Add_Group(){
      group_name = document.getElementById("group_name").value
      firebase.database().ref("/").child(group_name).update({
            purpose: "adding_group"
        })
      localStorage.setItem("group_name", group_name) 
      window.location = "LuvChat_page.html"
}

function redirect_toGroupname(name){
      localStorage.setItem("group_name", name)
      window.location = "LuvChat_page.html"
}

function LogOut(){
      localStorage.removeItem("username")
      localStorage.removeItem("group_name")
      window.location = "index.html"
}