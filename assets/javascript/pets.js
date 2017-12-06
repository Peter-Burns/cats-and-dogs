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
var user = 'Pete';
var userRef = database.ref('users/' + user);
userRef.push({
    petID: 3123,
    name: 'Brock'
});
var apiKey = 'fff64394dcb68ac0d534ca0aa808bd69';
var queryUrl = 'https://api.petfinder.com/pet.find?key=' + apiKey + '&count=25&location=44118&format=json';
$.ajax({
    url:queryUrl,
    method:'GET'
}).done(function(response){
    console.log(response);
});