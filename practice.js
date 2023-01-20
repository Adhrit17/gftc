// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAT-pF9itl84UsloudRjeXAiKx4zDUzATs",
    authDomain: "kwitter-6ac06.firebaseapp.com",
    projectId: "kwitter-6ac06",
    storageBucket: "kwitter-6ac06.appspot.com",
    messagingSenderId: "580838740723",
    appId: "1:580838740723:web:f2d95f6c5e20c8e49f1d86"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE 

function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
}