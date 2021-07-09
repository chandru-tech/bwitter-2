  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA_PBWFDj1IIhFamCV4PEhuD-yEnwBl_RY",
    authDomain: "lets-chat-6e548.firebaseapp.com",
    projectId: "lets-chat-6e548",
    storageBucket: "lets-chat-6e548.appspot.com",
    messagingSenderId: "549271346676",
    appId: "1:549271346676:web:478d03af2f39708ab32da1",
    measurementId: "G-K0RB4DPTEF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
