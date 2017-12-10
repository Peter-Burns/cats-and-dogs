var config = {
    apiKey: "AIzaSyCMeDF6cjf0vzOv7RptvWC3qzbdeLfna-Q",
    authDomain: "cats-and-dogs-97a5d.firebaseapp.com",
    databaseURL: "https://cats-and-dogs-97a5d.firebaseio.com",
    projectId: "cats-and-dogs-97a5d",
    storageBucket: "cats-and-dogs-97a5d.appspot.com",
    messagingSenderId: "182184356455"
};
firebase.initializeApp(config);
var database = firebase.database();
var localUser = null;
var userRef;
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        localUser = user.displayName;
        userRef = database.ref('users/' + localUser);
    }
    else {
        localUser = null;
    }
});
$('#login').on('click', function () {
    firebase.auth().signInWithPopup(provider).then(function (result) {
    }).catch(function (error) {
        console.log(error);
    });
});