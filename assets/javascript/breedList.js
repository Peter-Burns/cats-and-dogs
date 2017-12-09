var queryUrl = 'https://api.petfinder.com/breed.list';
var apiKey = 'fff64394dcb68ac0d534ca0aa808bd69';
$.ajax({
    url: queryUrl,
    method: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    data: {
        key: apiKey,
        animal: 'dog',
        format: 'json'
    }
}).done(function (response){
    var breeds = response.petfinder.breeds.breed;
    for(var i =0; i < breeds.length; i++){
        $('#dropdownBreed').append($('<option>' + breeds[i].$t + '</option>'));
    }
});