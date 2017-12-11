firebase.auth().onAuthStateChanged(function (user) {
    $('#cards').empty();
    if (user) {
        userRef.on('child_added', function (snap) {
            var cardBuilder = snap.val();
            cardBuilder.key = snap.key;
            var cardCol = petCardBuilder(cardBuilder);
            $('#cards').append(cardCol);
        });
        userRef.on('child_removed', function (snap) {
            var key = snap.key;
            $('[data-key="'+ key + '"]').remove();
        });
    }
    else {
        $('#cards').append('<h3>Must be logged in to see favorites!</h3>');
    }
});