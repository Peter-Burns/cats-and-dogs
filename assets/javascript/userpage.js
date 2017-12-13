firebase.auth().onAuthStateChanged(function (user) {
    $('#cards').empty();
    if (user) {
        userRef.on('child_added', function (snap) {
            var cardBuilder = snap.val();
            cardBuilder.key = snap.key;
            var card = petCardBuilder(cardBuilder);
            if ($('#cards0').children().length <= $('#cards1').children().length) {
                $('#cards0').append(card);
            }
            else{
                $('#cards1').append(card);
            }
        });
        userRef.on('child_removed', function (snap) {
            var key = snap.key;
            $('[data-key="' + key + '"]').remove();
        });
    }
    else {
        $('#cards').append('<h3>Must be logged in to see favorites!</h3>');
    }
});