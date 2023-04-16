var firebaseConfig = {
    apiKey: "AIzaSyAV3ozsxfWN4mpH6f19UALLsBKV7u93vpk",
    authDomain: "kwitter-ac0e9.firebaseapp.com",
    databaseURL: "https://kwitter-ac0e9-default-rtdb.firebaseio.com",
    projectId: "kwitter-ac0e9",
    storageBucket: "kwitter-ac0e9.appspot.com",
    messagingSenderId: "359884449268",
    appId: "1:359884449268:web:c6f841d30ec0332805c5a1",
    measurementId: "G-NK9JF59W9G"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    var user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        name:"evan"
    });
}