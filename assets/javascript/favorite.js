$('body').on('click', '.favButton', function () {
    if (localUser) {
        if ($(this).children(0).text() == 'favorite_border') {
            $(this).children(0).text('favorite');
            var name = $(this).parent().parent().children('.card-content').children('.card-title').text();
            var description = $(this).parent().parent().children('.card-content').children('.desc').text();
            var shelterId = $(this).parent().parent().attr('data-shelterId');
            var id = $(this).parent().parent().attr('data-id');
            var animal = $(this).parent().parent().attr('data-animal');
            var email = $(this).parent().parent().attr('data-email');
            var imgSrc = $(this).parent().children('img').attr('src');
            Materialize.toast(name + ' added to favorites!', 3000);
            userRef.child(id).set({
                imgSrc: imgSrc,
                name: name,
                description: description,
                shelterId: shelterId,
                email: email,
                id: id,
                animal: animal
            });
            $(this).parent().parent().attr('data-key', id);
        }
        else {
            $(this).children(0).text('favorite_border');
            var name = $(this).parent().parent().children('.card-content').children('.card-title').text();
            Materialize.toast(name + ' removed from favorites :(', 3000);
            userRef.child($(this).parent().parent().attr('data-key')).remove();
        }
    }
    else {
        Materialize.toast('have to be logged in to save favorites', 3000);
    }
});