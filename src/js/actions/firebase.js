import firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyAOCQlCiGzArgH0zN3GAWoQ5zehhAWhNCE",
    authDomain: "collective-body.firebaseapp.com",
    databaseURL: "https://collective-body.firebaseio.com",
    projectId: "collective-body",
    storageBucket: "collective-body.appspot.com",
    messagingSenderId: "442870021202"
  };
var fire = firebase.initializeApp(config);
export default fire;