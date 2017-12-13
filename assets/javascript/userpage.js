firebase.auth().onAuthStateChanged(function (user) {
    $('#cards0').empty();
    $('#cards1').empty();
    $('#noUser').empty();
    if (user) {
        userRef.on('child_added', function (snap) {
            if (!$('[data-id="' + snap.key + '"]').children().length) {
                var cardBuilder = snap.val();
                cardBuilder.key = snap.key;
                var card = petCardBuilder(cardBuilder);
                if ($('#cards0').children().length <= $('#cards1').children().length) {
                    $('#cards0').append(card);
                }
                else {
                    $('#cards1').append(card);
                }
            }
            else{
                $('[data-id="' + snap.key + '"]').children('.card-image').children('a').children('i').text('favorite');
            }
        });
        userRef.on('child_removed', function (snap) {
            $('[data-id="' + snap.key + '"]').children('.card-image').children('a').children('i').text('favorite_border');
        });
    }
    else {
        $('#noUser').append('<h3>Must be logged in to see favorites!</h3>');
    }
});