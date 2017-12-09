$('#submit').on('click',function(event){
    event.preventDefault();
    var breed = $('#breed').val();
    var queryUrl = 'https://en.wikipedia.org/w/api.php'
    $.ajax({
        queryUrl:queryUrl,
        method:'GET',
        data:{
            format:'json',
            prop:'extracts',
            action:'query',
            exintro:'true',
            titles:breed
        }
    }).done(function(response){
        console.log(response.query.pages);
    });
});