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
var userRef = null;
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        localUser = user.displayName;
        userRef = database.ref('users/' + user.uid);
        $('#logout').show();
        $('.userLink').text(localUser);
        $('#login').hide();
    }
    else {
        localUser = null;
        if (userRef) userRef.off();
        userRef = null;
        $('#logout').hide();
        $('.userLink').text('User');
        $('#login').show();
    }
});
$('#login').on('click', function (event) {
    event.preventDefault();
    firebase.auth().signInWithPopup(provider).then(function (result) {
    }).catch(function (error) {
        console.log(error);
    });
});
$('#logout').on('click', function (event) {
    event.preventDefault();
    firebase.auth().signOut();
});