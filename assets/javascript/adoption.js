$('#search').on('click', function (event) {
    $('#cards').empty();
    event.preventDefault();
    var apiKey = 'fff64394dcb68ac0d534ca0aa808bd69';
    var queryUrl = 'https://api.petfinder.com/pet.find';
    var location = $('#zipcode').val();
    var breed = $('#breed').val();
    var sex = $('#sex').val();
    var age = $('#age').val();
    var animal = $('#animal').val();
    var size = $('#size').val();
    var params = {
        key:apiKey,
        format:'json',
        count:15
    };
    if(breed)params.breed = breed;
    if(age)params.age =age;
    if(sex)params.sex = sex;
    if(animal)params.animal = animal;
    if(size)size.size = size;
    if(location)params.location = location;
    $.ajax({
        url: queryUrl,
        method: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        data: params
    }).done(function (response) {
        var petRef = response.petfinder.pets.pet;
        if (Array.isArray(petRef)) {
            for (var i = 0; i < petRef.length; i++) {
                var cardBuilder = {
                    name: petRef[i].name.$t,
                    email: petRef[i].contact.email.$t,
                    shelterId: petRef[i].shelterId.$t,
                    imgSrc: petRef[i].media.photos.photo[2].$t,
                    description: petRef[i].description.$t
                };
                var cardCol = petCardBuilder(cardBuilder);
                $('#cards').append(cardCol);
            }
        }
        else {
            var cardBuilder = {
                name: petRef.name.$t,
                email: petRef.contact.email.$t,
                shelterId: petRef.shelterId.$t,
                imgSrc: petRef.media.photos.photo[2].$t,
                description: petRef.description.$t
            };
            var cardCol = petCardBuilder(cardBuilder);
            $('#cards').append(cardCol);
        }
    });
});