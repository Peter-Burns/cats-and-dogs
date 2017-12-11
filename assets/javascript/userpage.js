firebase.auth().onAuthStateChanged(function (user) {
    $('#cards').empty();
    if (user) {
        userRef.on('child_added', function (snap) {
            var cardBuilder = snap.val();
            cardBuilder.key = snap.key;
            console.log($('[data-key="'+ cardBuilder.key + '"]').length);
            if ($('[data-key="'+ cardBuilder.key + '"]').length===0) {
                var cardCol = petCardBuilder(cardBuilder);
                $('#cards').append(cardCol);
            }
        });
    }
    else {
        $('#cards').append('<h3>Must be logged in to see favorites!</h3>');
    }
});