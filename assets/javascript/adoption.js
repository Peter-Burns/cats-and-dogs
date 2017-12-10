$('#submit').on('click', function (event) {
    event.preventDefault();
    var apiKey = 'fff64394dcb68ac0d534ca0aa808bd69';
    var queryUrl = 'https://api.petfinder.com/pet.find';
    var count = $('#howManyRecords').val();
    var location = $('#zipcode').val();
    var breed = $('#breed').val();
    var sex = $('#sex').val();
    var age = $('#age').val();
    var animal = $('#animal').val();
    var params = {};
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
        var card = $('<div class="card teal petCard"></div>');
        card.attr('data-email', petRef.contact.email.$t);
        card.attr('data-shelterId', petRef.shelterId.$t);
        var petCard = $('<div class="card-image"></div>');
        petCard.append($('<img src = "' + petRef.media.photos.photo[2].$t + '" width=100% />'));
        petCard.append($('<a class="btn-floating btn-large halfway-fab waves-effect waves-light red favButton"><i class="material-icons">favorite_border</i></a>'));
        card.append(petCard);
        card.append($());
        card.append($('<div class="card-content white-text">' + '<span class="white-text card-title">' + petRef.name.$t + '</span>' + '<p class="desc">' + petRef.description.$t + '</p>' + '</div>'));
        card.append($('<div class="card-action"><a class="mapLink modal-trigger" href="#modal1"><i class="material-icons">location_on</i>Shelter</a><a class="emailLink" href="mailto:' + petRef.contact.email.$t + '"><i class="material-icons">mail</i> Email</a></div>'));
        $('#cards').append(card);
    });
});