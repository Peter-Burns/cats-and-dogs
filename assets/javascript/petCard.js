function petCardBuilder(petRef) {
    var cardCol = $('<div class="col s4">');
    var card = $('<div class="card teal petCard"></div>');
    card.attr('data-email', petRef.email);
    card.attr('data-shelterId', petRef.shelterId);
    var icon = 'favorite_border';
    if(petRef.key){
        card.attr('data-key', petRef.key);
        icon = 'favorite';
    }
    var petCard = $('<div class="card-image"></div>');
    petCard.append($('<img class = "petPic" src = "' + petRef.imgSrc + '" />'));
    petCard.append($('<a class="btn-floating btn-large halfway-fab waves-effect waves-light red favButton"><i class="material-icons">' + icon + '</i></a>'));
    card.append(petCard);
    card.append($('<div class="card-content left-align white-text">' + '<span class="white-text card-title">' + petRef.name + '</span>' + '<p class="desc">' + petRef.description + '</p>' + '</div>'));
    card.append($('<div class="card-action"><a class="mapLink modal-trigger" href="#modal1"><i class="material-icons">location_on</i>Shelter</a><a class="emailLink" href="mailto:' + petRef.email + '"><i class="material-icons">mail</i> Email</a></div>'));
    cardCol.append(card);
    return cardCol;
}