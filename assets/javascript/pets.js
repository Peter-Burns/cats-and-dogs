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
var apiKey = 'fff64394dcb68ac0d534ca0aa808bd69';
var queryUrl = 'https://api.petfinder.com/pet.find';
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
    card.attr('data-email', petRef.contact.email.$t);
    card.attr('data-shelterId', petRef.shelterId.$t);
    var petCard = $('<div class="card-image"></div>');
    petCard.append($('<img src = "' + petRef.media.photos.photo[2].$t + '" />'));
    petCard.append($('<a class="btn-floating btn-large halfway-fab waves-effect waves-light red favButton"><i class="material-icons">favorite_border</i></a>'));
    card.append(petCard);
    card.append($());
    card.append($('<div class="card-content white-text">' + '<span class="white-text card-title">' + petRef.name.$t + '</span>' + '<p class="desc">' + petRef.description.$t + '</p>' + '</div>'));
    card.append($('<div class="card-action"><a class="mapLink" href="#"><i class="material-icons">location_on</i>Shelter</a><a class="emailLink" href="#"><i class="material-icons">mail</i> Email</a></div>'));
    $('#cards').append(card);
});
$('body').on('click', '.favButton', function () {
    if (localUser) {
        var name = $(this).parent().parent().children('.card-content').children('.card-title').text();
        var description = $(this).parent().parent().children('.card-content').children('.desc').text();
        var shelterId = $(this).parent().parent().attr('data-shelterId');
        var email = $(this).parent().parent().attr('data-email');
        $(this).children(0).text('favorite');
        console.log(name, description, shelterId, email);
        userRef.push({
            name: name,
            description: description,
            shelterId: shelterId,
            email: email,
        });
    }
    else {
        alert('have to be logged in to save favorites');
    }
});
$('#login').on('click', function () {
    firebase.auth().signInWithPopup(provider).then(function (result) {
    }).catch(function (error) {
        console.log(error);
    });
});
$('body').on('click','.mapLink', function (event) {
    event.preventDefault();
    var shelterId = $(this).parent().parent().attr('data-shelterId');
    console.log(shelterId);
});