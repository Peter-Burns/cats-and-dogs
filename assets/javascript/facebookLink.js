$('body').on('click', '.facebookLink', function () {
    var petPic = $(this).parent().parent().parent().parent().parent().children('.card-image').children('img');
    var name = petPic.parent().parent().children('.card-content').children('.card-title').text();
    name = name.replace(/[^a-zA-Z ]/g, "").trim();
    name = name.replace(/  /g, ' ');
    name = name.split(' ').join('-');
    var shelterId = petPic.parent().parent().attr('data-shelterId');
    var id = petPic.parent().parent().attr('data-id');
    var animal = petPic.parent().parent().attr('data-animal');
    $.ajax({
        url: 'https://api.petfinder.com/shelter.get',
        method: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        data: {
            key: 'fff64394dcb68ac0d534ca0aa808bd69',
            id: shelterId,
            format: 'json'
        },
    }).done(function (response) {
        var city = response.petfinder.shelter.city.$t.split(' ').join('-');
        var state = response.petfinder.shelter.state.$t;
        var shelterName = response.petfinder.shelter.name.$t;
        shelterName = shelterName.replace(/[^a-zA-Z ]/g, "").trim().split(' ').join('-');
        var link = ('https://www.petfinder.com/' + animal + '/' + name + '-' + id + '/' + state + '/' + city + '/' + shelterName + '-' + shelterId + '/').toLowerCase();
        FB.ui({
            method: 'share',
            href: link,
        }, function (response) { 
        });
    });
});
