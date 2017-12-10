$('body').on('click', '.favButton', function () {
    if (localUser) {
        var name = $(this).parent().parent().children('.card-content').children('.card-title').text();
        var description = $(this).parent().parent().children('.card-content').children('.desc').text();
        var shelterId = $(this).parent().parent().attr('data-shelterId');
        var email = $(this).parent().parent().attr('data-email');
        var imgSrc = $(this).parent().children('img').attr('src');
        $(this).children(0).text('favorite');
        console.log(name, description, shelterId, email);
        userRef.push({
            imgSrc: imgSrc,
            name: name,
            description: description,
            shelterId: shelterId,
            email: email,
        });
    }
    else {
        alert('have to be logged in to save favorites');
    }
});