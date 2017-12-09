$.ajax({
    get the list
}).done(list){
    var dropdownList = $('#breedList');
    for(var i = 0;i<list.length;i++){
        dropdownList.append($('<li>' + list[i].$t + '</li>'));
    }
}