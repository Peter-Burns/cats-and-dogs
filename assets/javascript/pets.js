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
var queryUrl = 'http://api.petfinder.com/pet.find';
$.ajax({
    url: queryUrl,
    method: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    data: {
        key: apiKey,
        count: 1,
        location: 44118,
        format: 'json'
    }
}).done(function (response) {
    var petRef = response.petfinder.pets.pet;
    var card = $('<div class="card teal"></div>');
    var petCard = $('<div class="card-image"></div>');
    petCard.append($('<img src = "' + petRef.media.photos.photo[2].$t + '" />'));
    petCard.append($('<span class="card-title">' + petRef.name.$t + '</span>'));
    $(card).append(petCard);
    card.append($('<div class="card-content white-text">' + petRef.description.$t + '</div>'));
    $('#cards').append(card);
});