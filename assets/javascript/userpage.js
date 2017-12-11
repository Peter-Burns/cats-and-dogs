firebase.auth().onAuthStateChanged(function (user) {
    $('#cards').empty();
    if (user) {
        userRef.on('child_added', function (snap) {
            var cardBuilder = snap.val();
            cardBuilder.key = snap.key;
            if (!$('[data-key="-L02qbk1EcRzXru7CZlx"]')) {
                var cardCol = petCardBuilder(cardBuilder);
                $('#cards').append(cardCol);
            }
        });
    }
    else {
        $('#cards').append('<h3>Must be logged in to see favorites!</h3>');
    }
});