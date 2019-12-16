$(function() {

    var searchParams = new URLSearchParams(window.location.search),
        searchParamsId = searchParams.get('filial'),
        mustBranch = {};
        console.log("TCL: searchParamsId", searchParamsId)

    function drowTable() {



    }


    $('.open').click(function() {
        var departament = $(this).attr('data-departament')
        $('#' + departament).toggle('slow')
    })

    var heatmap_url = 'http://192.168.1.194:8000/heatmap';

    $.ajax({
        url:  heatmap_url + '/get_departments_data/',
        type: 'POST',
        data: {branch : searchParamsId},
        success: function(data) {
            console.log('data', data)
            // mustBranch = data.branches.filter(function(item){
            //     if(item.id == searchParamsId) {
            //         return item;
            //     }
            // })

        }
    });

})

