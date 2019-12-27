$(function() {

    var searchParams = new URLSearchParams(window.location.search),
        searchParamsId = searchParams.get('filial'),
        mustBranch = {};

    function drowTable(data) {

        var tables = [];
        
        for(var i = 0; i < data.length; i++ ) {
            var btnInner = data[i].queues.length > 0 ? '<span>&#62;</span>' : 'No queues available',
            firstTicketTime = data[i].first_ticket_time ? data[i].first_ticket_time : 'no data',
            lastTicketTime = data[i].last_ticket_time ? data[i].last_ticket_time : 'no data';
            var tableHeader = '<table class="dep-table"><thead><tr><td>Departament</td><td id="queues">Queues</td><td>Total vizits</td><td id="served-customers">SC</td><td id="waiting-customers">WC</td><td id="average-waiting-time">AWT</td><td id="average-serving-time">AST</td><td id="max-waiting-time">MWT</td><td id="max-serving-time">MST</td><td id="first-ticket-time">FTT</td><td id="last-ticket-time">LTT</td><td id="fte">FTE</td><td id="online-users">OU</td><td>Vocation</td><td>Trip to </td><td>Trip from </td><td>No show </td><td>Remove </td><td>Reject </td></tr>'
            tableHeader += '<tr data-departmentid='+ data[i].id +'><td>' + data[i].name + '</td><td data-id="' + data[i].id + '" class="open">'+ btnInner +'</td><td>'+ data[i].ticket_count +'</td><td>'+ data[i].served_customer_count +'</td><td>'+ data[i].waiting_customer_count +'</td><td>'+ data[i].avg_waiting_time +'</td><td>'+ data[i].avg_serving_time +'</td><td>'+ data[i].max_waiting_time +'</td><td>0'+ data[i].max_serving_time +'</td><td>'+ firstTicketTime +'</td><td>'+ lastTicketTime +'</td><td>'+ data[i].fte +'</td><td>'+ data[i].online_user_count +'</td><td>No API</td><td>No API</td><td>No API</td><td>'+ data[i].noshow_count +'</td><td>'+ data[i].removed_customer_count +'</td><td>' + data[i].reject_count + '</td></tr></thead>';
            var tableBody = '<tbody id="'+ data[i].id  +'">';

            for(var j = 0; j < data[i].queues.length; j++) {
                var queusFirstTicketTime = data[i].queues[j].first_ticket_time ? data[i].queues[j].first_ticket_time : 'no data',
                    queuesLastTicketTime = data[i].queues[j].last_ticket_time ? data[i].queues[j].last_ticket_time : 'no data';
                tableBody += '<tr><td></td><td>'+ data[i].queues[j].name +'</td><td>'+ data[i].queues[j].ticket_count +'</td><td>'+ data[i].queues[j].served_customer_count +'</td><td>'+ data[i].queues[j].waiting_customer_count +'</td><td>'+ data[i].queues[j].avg_waiting_time +'</td><td>'+ data[i].queues[j].avg_serving_time +'</td><td>'+ data[i].queues[j].max_waiting_time +'</td><td>'+ data[i].queues[j].max_serving_time+'</td><td>'+ queusFirstTicketTime +'</td><td>'+ queuesLastTicketTime +'</td><td> --- </td><td> --- </td><td> --- </td><td> --- </td><td> --- </td><td>'+ data[i].queues[j].noshow_count +'</td><td>'+ data[i].queues[j].removed_customer_count +'</td><td>'+ data[i].queues[j].reject_count +'</td></tr>';

            }
            tableBody += '</tbody>';
            tableHeader += tableBody;
            tables.push(tableHeader);

        }
        
        for( var i = 0; i < tables.length; i++ ) {
            
            $('.departaments-item').append(tables[i])
            
        }

    }

    function drowUsersTable(data) {

        var tables = [];
            
        for(var i = 0; i < data.length; i++) {
            var currentFreeTime = data[i].current_free_time ? data[i].current_free_time : 'no data'
            var table = '<table class="dep-table"><thead><tr><td id="queues">Service point</td><td>User name</td><td>Now serving ticket</td><td>Now serving service</td><td>Now serving transactione time</td><td>Service name</td><td>Served</td><td>Average transaction time</td><td>Total transaction time</td><td>Total session time</td><td>Idle time total</td><td>İdle time now</td><td>Idle time count</td><td>No show</td><td>Reject</td><td>Walk direct</td></tr>';
            table += '<tr><td></td><td>'+ data[i].full_name +'</td><td>'+ data[i].current_serving_ticket +'</td><td>'+ data[i].current_serving_service +'</td><td>'+ data[i].current_serving_time +'</td><td class="counters-open">&#62;</td><td>'+ data[i].served_customer_count +'</td><td>'+ data[i].avg_serving_time +'</td><td>'+ data[i].total_serving_time +'</td><td>'+ data[i].total_session_time +'</td><td>'+ data[i].total_free_time +'</td><td>'+ currentFreeTime +'</td><td>'+ data[i].free_time_count +'</td><td>$32</td><td>$16</td><td>$19</td></tr></thead>';
            var services = '<tbody style="display: table-header-group;"><tr>';
            for(var j = 0; j < data[i].services.length; j++) {
                services += '<td colspan="5"></td> <td>'+ data[i].services[j].name +'</td> <td>'+ data[i].services[j].served_customer_count +'</td> <td>'+ data[i].services[j].avg_serving_time +'</td> <td>'+ data[i].services[j].total_serving_time +'</td> <td colspan="4"></td> <td>$10</td> <td>$16</td> <td>$8</td> </tr>';
            }
            services += '</tbody>';
            table += services;
            table += '</table>';
            tables.push(table);
        }
        
        for( var i = 0; i < tables.length; i++ ) {
            
            $('.counters-item').append(tables[i])
            
        }
        
    }

    $(document).on('click', '.open', function() {
        var id = $(this).attr('data-id')
        $('#' + id).toggle('slow')
        $(this).toggleClass('open-opened');
    })

    var heatmap_url = 'http://192.168.1.194:8000/heatmap';

    $.ajax({
        url:  heatmap_url + '/get_departments_data/',
        type: 'POST',
        data: {branch : searchParamsId},
        success: function(data) {
            $("#branch-name").text(data.branch.name)
            drowTable(data.departments)
        }
    });

    $.ajax({
        url:  heatmap_url + '/get_users_data/',
        type: 'POST',
        data: {branch : searchParamsId},
        success: function(data) {

            drowUsersTable(data.users);
            setTimeout(() => {
                addTippy();
            }, 1000)
            
        }
    });

    $(document).on('click', '.counters-open', function() {
        $(this).parent().parent().siblings('tbody').toggle()
    });

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
   

    function addTippy() {

        tippy('#served-customers', {
            content: "Served customers"
        });
        tippy('#waiting-customers', {
            content: "Waiting customers"
        });
        tippy('#average-waiting-time', {
            content: "Average waiting time"
        });
        tippy('#average-serving-time', {
            content: "Average serving time"
        });
        tippy('#max-waiting-time', {
            content: "Max waiting time"
        });
        tippy('#max-serving-time', {
            content: "Max serving time"
        });
        tippy('#first-ticket-time', {
            content: "First ticket time"
        });
        tippy('#last-ticket-time', {
            content: "First ticket time"
        });
        tippy('#online-users', {
            content: "Online user"
        });
        tippy('#fte', {
            content: "fte?"
        });

    }
    
})

