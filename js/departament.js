$(function() {

    var searchParams = new URLSearchParams(window.location.search),
        searchParamsId = searchParams.get('filial'),
        mustBranch = {};
        console.log("TCL: searchParamsId", searchParamsId)

    function drowTable(data) {
        console.log('departaments', data)
        var table = [];

        for(var i = 0; i < data.length; i++ ) {

            var tableHeader = '<tr data-departmentid='+ data[i].id +'><td>' + data[i].name + '</td><td data-departament="' + data[i].name + '" class="open">&#62;</td><td>'+ data[i].ticket_count +'</td><td>'+ data[i].served_customer_count +'</td><td>'+ data[i].waiting_customer_count +'</td><td>'+ data[i].avg_waiting_time +'</td><td>'+ data[i].avg_serving_time +'</td><td>'+ data[i].max_waiting_time +'</td><td>0'+ data[i].max_serving_time +'</td><td>'+ data[i].first_ticket_time +'</td><td>'+ data[i].last_ticket_time +'</td><td>'+ data[i].fte +'</td><td>'+ data[i].online_user_count +'</td><td>No API</td><td>No API</td><td>No API</td><td>'+ data[i].noshow_count +'</td><td>'+ data[i].removed_customer_count +'</td><td>' + data[i].reject_count + '</td></tr>';
            var tableBOdy = ''
            for(var j = 0; j < data[i].queues; i++) {
                
                tableBOdy += '<tr><td></td><td>'+ data[i].queues[j].name +'</td><td>'+ data[i].queues[j].ticket_count +'</td><td>'+ data[i].queues[j].served_customer_count +'</td><td>'+ data[i].queues[j].waiting_customer_count +'</td><td>'+ data[i].queues[j].avg_waiting_time +'</td>'+ data[i].queues[j].avg_serving_time +'</td><td>'+ data[i].queues[j].max_waiting_time +'</td><td>'+ data[i].queues[j].max_serving_time+'</td><td>'+ data[i].queues[j].first_ticket_time +'</td><td>'+ data[i].queues[j].last_ticket_time +'</td><td>'+ data[i].queues[j].fte +'</td><td>'+ data[i].online_user_count +'</td><td>No API</td><td>No API</td><td>No API</td><td>'+ data[i].queues[j].noshow_count +'</td><td>'+ data[i].queues[j].removed_customer_count +'</td><td>'+ data[i].queues[j].reject_count +'</td></tr>'
                console.log("TCL: drowTable -> tableBOdy", tableBOdy)

            }
            var arr = [];
            arr.push(tableHeader);
            arr.push(tableBOdy)
            table.push(arr);
        }
        console.log('dude aRR',table)
    }


    $('.open').click(function() {
        var departament = $(this).attr('data-departament')
        $('#' + departament).toggle('slow')
    })

    var heatmap_url = 'http://192.168.1.194:8000/heatmap';

    $.ajax({
        url:  heatmap_url + '/get_departments_data/',
        type: 'POST',
        data: {branch : 13},
        success: function(data) {
            console.log('data', data)
            drowTable(data.departments)
        }
    });


    $(".counters-open").click(function() {
        console.log('$(this).parent().parent()', $(this).parent().parent())
        $(this).parent().parent().siblings('tbody').toggle()
    })


    $('.tab-btn').click(function() {
        $('.tables-wrap').hide()
        var data = $(this).attr('data-map')
        $('.tab-btn').removeClass('tab-btn__active')
        $(this).addClass('tab-btn__active');
        if(data == 1) {
            $('.departaments').show();
            
        } else {
            $('.counters').show();
        }
    })
})

