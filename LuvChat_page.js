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

console.log(username, groupname)

firebase.initializeApp(firebaseConfig)
function getData() {
      firebase.database().ref("/" + groupname).on('value', function (snapshot) {
           document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id)
                        console.log(message_data)
                        name1 = message_data["name"]
                        mesge = message_data["message"]
                        like = message_data["like"]
                        t1 = "<h4>" + name1 + "<img class='user_tick' src = 'tick1.png'>  </h4>"
                        t2 = "<h3 class='message_h4'>" + mesge + "</h3>"
                        t3 = "<button class = 'btn btn-primary' id=" + firebase_message_id + " value = " + like + " onclick='updateLike(this.id)'>"
                        t4 = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: "+ like +" </span> </button> <hr>"
                        row = t1 + t2 + t3 + t4
                        document.getElementById("output").innerHTML += row
                        //End code
                  }
            });
      });
}
getData();

function LogOut() {
      localStorage.removeItem("username")
      localStorage.removeItem("group_name")
      window.location = "index.html"
}

username = localStorage.getItem("username")

groupname = localStorage.getItem("group_name")

function Send() {
      mes = document.getElementById("mesg").value
      firebase.database().ref(groupname).push({
            name: username, message: mes, like: 0
      })
      document.getElementById("mesg").value = " "
}

function updateLike(message_id) {
      likes = document.getElementById(message_id).value
      updatelike = Number(likes) +1
      firebase.database().ref(groupname).child(message_id).update({like: updatelike})
}