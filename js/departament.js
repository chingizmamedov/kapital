$(function() {

    var searchParams = new URLSearchParams(window.location.search)
    console.log("TCL: searchParams", searchParams.get('filial'))



    $('.open').click(function() {
        var departament = $(this).attr('data-departament')
        $('#' + departament).toggle('slow')
    })

    var heatmap_url = 'http://192.168.1.194:8000/heatmap';

    $.ajax({
        url:  heatmap_url + '/get_branches_data/',
        type: 'GET',
        success: function(data) {
            console.log('data', data)
        }
    });

})