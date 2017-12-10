$('body').on('click', '.favButton', function () {
    if (localUser) {
        if ($(this).children(0).text() == 'favorite_border') {
            var name = $(this).parent().parent().children('.card-content').children('.card-title').text();
            var description = $(this).parent().parent().children('.card-content').children('.desc').text();
            var shelterId = $(this).parent().parent().attr('data-shelterId');
            var email = $(this).parent().parent().attr('data-email');
            var imgSrc = $(this).parent().children('img').attr('src');
            $(this).children(0).text('favorite');
            var key = userRef.push({
                imgSrc: imgSrc,
                name: name,
                description: description,
                shelterId: shelterId,
                email: email,
            }); 
            key = key.toString().split('/').pop();
            $(this).parent().parent().attr('data-key',key);
        }
        else{
            $(this).children(0).text('favorite_border');
            userRef.child($(this).parent().parent().attr('data-key')).remove();
        }
    }
    else {
        alert('have to be logged in to save favorites');
    }
});