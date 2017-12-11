$('#search').on('click', function (event) {
    event.preventDefault();
    var breed = $('#breed').val();
    var animal = $('#animal').val();
    if (breed) {
        if(!breed.includes('cat')&&!breed.includes('Dog')){
            breed = breed + ' ' + animal;
        }
        var wikiUrl = 'https://en.wikipedia.org/w/api.php?&callback=?&redirects';
        $('#wikiSection').empty();
        $.ajax({
            url: wikiUrl,
            method: 'GET',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: {
                format: 'json',
                prop: 'extracts',
                action: 'query',
                exlimit: '1',
                titles: breed,
            }
        }).done(function (response) {
            $('#wikiSection').append(Object.values(response.query.pages)[0].extract);
        });
    }
});