$(document).ready(function(){
    $('#search').keyup(function(){
        var input = $('#search').val();
        var toFind = input.toUpperCase();
        var li = $('#blogList>li');
        for (var i = 0; i < li.length; i ++ ) {
            content = li.eq(i).find('a').text();
            if (content.toUpperCase().indexOf(toFind) > -1) {
                li.eq(i).css('display', '');
            }
            else
                li.eq(i).css('display', 'none');
        }
    });
}); 