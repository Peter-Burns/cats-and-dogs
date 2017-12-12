$('body').on('click','.petPic', function () {
    var petPic = $(this);
    var name = petPic.parent().parent().children('.card-content').children('.card-title').text();
    var shelterId = $(this).parent().parent().attr('data-shelterId');
    console.log(name);
});