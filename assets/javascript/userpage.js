firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userRef.on('child_added', function (snap) {
            cardRef = snap.val();
            var card = $('<div class="card teal petCard"></div>');
            card.attr('data-email', cardRef.email);
            card.attr('data-shelterId', cardRef.shelterId);
            card.attr('data-key',snap.key);
            var petCard = $('<div class="card-image"></div>');
            petCard.append($('<img src = "' + cardRef.imgSrc + '" />'));
            petCard.append($('<a class="btn-floating btn-large halfway-fab waves-effect waves-light red favButton"><i class="material-icons">favorite</i></a>'));
            card.append(petCard);
            card.append($('<div class="card-content white-text">' + '<span class="white-text card-title">' + cardRef.name + '</span>' + '<p class="desc">' + cardRef.description + '</p>' + '</div>'));
            card.append($('<div class="card-action"><a class="mapLink modal-trigger" href="#modal1"><i class="material-icons">location_on</i>Shelter</a><a class="emailLink" href="mailto:' + cardRef.email + '"><i class="material-icons">mail</i> Email</a></div>'));
            $('#cards').append(card);
        });
    }
    else {
        $('#cards').empty();
    }
});