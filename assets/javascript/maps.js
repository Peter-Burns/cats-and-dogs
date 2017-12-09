$(document).ready(function () {
    $('.modal').modal();
});
$('body').on('click', '.mapLink', function (event) {
    var shelterId = $(this).parent().parent().attr('data-shelterId');
    var queryURL = 'https://api.petfinder.com/shelter.get';
    var apiKey = 'fff64394dcb68ac0d534ca0aa808bd69';
    $.ajax({
        url: queryURL,
        method: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        data: {
            key: apiKey,
            id: shelterId,
            format: 'json'
        }
    }).done(function (response) {
        var latitude = response.petfinder.shelter.latitude.$t;
        var longitude = response.petfinder.shelter.longitude.$t;
        var shelterName = response.petfinder.shelter.name.$t;
        $('#mapModal').empty();
        var iframe = $('<iframe width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
        iframe.attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBE9zfgNK24i9DFGAdb1t1AhDQ0WIwhIdk&q=' + latitude + ',' + longitude);
        $('#mapModal').append('<h5>' + shelterName + '</h5>');
        $('#mapModal').append(iframe);
    });
});