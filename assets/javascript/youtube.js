$('#search').on('click', function (event) {
    event.preventDefault();
    var breed = $('#breed').val();
    var animal = $('#animal').val();
    if (breed) {
        var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';
        $('#youtubeSection').empty();
        $('#youtubeSection').append($('<h1><span>' + breed + '</span></h1>'));
        $.ajax({
            url: youtubeUrl,
            method: 'GET',
            dataType: 'json',
            data: {
                key: 'AIzaSyAhcfF1-dZJMw6lxGpP0igDZ-RkdlRNHdo',
                videoEmbeddable: true,
                type: 'video',
                safeSearch: 'strict',
                q: breed + '+' + animal,
                order: 'viewCount',
                maxResults: '6',
                part: 'snippet'
            }
        }).done(function (response) {
            var videos = response.items;
            for (var i = 0; i < videos.length; i++) {
                $('#youtubeSection').append('<div class="col l4 m6 s12"><div class="video-container"><iframe allowfullscreen width="480" height="360" src="https://www.youtube.com/embed/' + videos[i].id.videoId + '"</iframe></div></div>');
            }
        });
    }
    else if (animal) {
        animal = animal == 'cat' ? 'Cat' : 'Dog';
        var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';
        $('#youtubeSection').empty();
        $('#youtubeSection').append($('<h1><span>' + animal + '</span></h1>'));
        $.ajax({
            url: youtubeUrl,
            method: 'GET',
            dataType: 'json',
            data: {
                key: 'AIzaSyAhcfF1-dZJMw6lxGpP0igDZ-RkdlRNHdo',
                videoEmbeddable: true,
                type: 'video',
                safeSearch: 'strict',
                q: animal,
                order: 'viewCount',
                maxResults: '6',
                part: 'snippet'
            }
        }).done(function (response) {
            var videos = response.items;
            for (var i = 0; i < videos.length; i++) {
                $('#youtubeSection').append('<div class="col l4 m6 s12"><div class="video-container"><iframe allowfullscreen width="480" height="360" src="https://www.youtube.com/embed/' + videos[i].id.videoId + '"</iframe></div></div>');
            }
        });
    }
    else {
        Materialize.toast('You must select a breed or animal to search!', 3000);
    }
});