$(function() {

    // variables

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        years = [ 2019 ],
        branches = null,
        users = null,
        requestYear = null,
        requersBranches = null,
        requestUsers = null,
        postArray= [ {branch: []}, {user: []}, {year : []}, {month:[]} , {day:[]} ],
        url = 'http://192.168.1.194:8000/heatmap',
        nowYear = new Date().getFullYear(),
        yearDifferents = nowYear - years[years.length - 1];
    
    for(var i = 0; i < yearDifferents;i++) {
        years.push(years[0] + (i + 1));
    }

     // sortable filters (function) for sorting elemnt in modal filter

    function sortFilterElement(filterOne, filterTwo, dataName) {
        var fullFilterOne = filterOne + " li",
            fullFilterTwo = filterTwo + " li";
        var filItems = $(fullFilterOne);
        filItems.sort(function(a, b) {
        
            return +$(a).find('.filter-item').data(dataName) - +$(b).find('.filter-item').data(dataName);
        })
        $(filterOne).html(filItems);

        var selectedFilItems = $(fullFilterTwo);
        selectedFilItems.sort(function(a, b) {
            return +$(a).find('.filter-item').data(dataName) - +$(b).find('.filter-item').data(dataName);
        })
        $(filterTwo).html(selectedFilItems);
        
    }

    function selectPostProps(item) {
        console.log("TCL: selectPostProps -> item.data('type')", item.data('type'))
        switch(item.data('type')) {
            
            case 'branches': 
                console.log('branch')
                break;
            case 'year':
                console.log('year')
                break;
            case 'month':
                console.log('month')
                break;
            case 'user':
                console.log('month')
                break;

        }


    }
    
    $('#select-branch').sortable({
        // handle: '.drag-handler',
        connectWith: '#selected-branch',
        stop: function(ui, event) {
            // console.log('selected element stop', event.item.find('.filter-item'))
            // var itemText = event.item.find('.filter-item').text();
            // console.log("TCL: itemText", itemText);

            // var element = '<div class="filter-select-item">'+ itemText +'</div>';

            // $(".filter-selected-items").append(element);
            // $("#selected-user .filter-selected-items").addClass('d-flex');

            // selectPostProps(event.item.find('.filter-item'));
            // sortFilterElement(".modal-filter-select", ".modal-filter-selected", "month")
        },
        change: function() {
            
        }
    });

    $('#selected-branch').sortable({
        // handle: '.drag-handler',
        connectWith: '#select-branch',
        stop: function() {
            // sortFilterElement(".modal-filter-select", ".modal-filter-selected", "month");
        },
        change: function() {
            
        }
    });

    $('#select-user').sortable({
        // handle: '.drag-handler',
        connectWith: 'selected-user',
        stop: function(ui, event) {
            console.log('selected element stop', event.item.find('.filter-item'))
            var itemText = event.item.find('.filter-item').text();
            console.log("TCL: itemText", itemText);

            var element = '<div class="filter-select-item">'+ itemText +'</div>'

            $(".filter-selected-items").append(element)
            $("#selected-user .filter-selected-items").addClass('d-flex');

            selectPostProps(event.item.find('.filter-item'))
            // sortFilterElement(".modal-filter-select", ".modal-filter-selected", "month")
        },
        change: function() {
            
        }
    });

    $('#selected-user').sortable({
        // handle: '.drag-handler',
        connectWith: 'select-user',
        stop: function() {
            // sortFilterElement(".modal-filter-select", ".modal-filter-selected", "month");
        },
        change: function() {
            
        }
    });

    $('.modal-filter-back').click(function() {

        $(this).hide();
        $("#branches").hide();
        $("#date").hide();
        $("#user").hide();
        
    });


    $.ajax({
        url: url + '/get_filters_data/',
        type: 'GET',
        success: function (data) {

          users = data.users;
          branches = data.branches;
        //   console.log("TCL: branches", branches);

        }
    });

    // selector work for selected list (include <> exclude)

    $(".selector-display").click(function() {
        $(".selector-list").toggle();
    })

    /**
     * filter aside
     *  */ 

    $('.setting-table').sortable({
        handle: '.drag-handler',
        connectWith: '.models-table',
        stop: function() {
            sortFilterElement(".setting-table", ".models-table", "pos");
        },
        change: function() {
            
        }
    });

    $('.models-table').sortable({
        handle: '.drag-handler',
        connectWith: '.setting-table',
        helper: "clone",
        stop: function() {
            sortFilterElement(".setting-table", ".models-table", "pos");
        },
        change: function() {

        }
    });

    $(".filter-aside").on("dblclick", '.filter-item',function() {
        console.log('bouble click')
        var parentTable = $(this).parent().parent().attr('id'),
            currentItem = $(this).parent();
        console.log("TCL: parentTable", parentTable)
        if(parentTable == 'models-table') {
            $('#setting-table').append(currentItem);
        } else {
            $('#models-table').append(currentItem);
        }
        sortFilterElement(".setting-table", ".models-table", "pos");
    })

    $(".filter-aside").on("click", '#branches-icon',function() {

        $(this).css({
            "transform": "rotate(180deg)"
        })
        $("#branches").show();
        $('.modal-filter-back').show();

        var tableBranches = ''
        for(var i=0; i < branches.length; i++) {

            tableBranches += '<li class="ui-sortable-handle"><div data-type="branch" data-branchid="'+ branches[i].id +'" class="filter-item">'+ branches[i].name +'</div></li>';

        }
        $("#branches .modal-filter-select").html(tableBranches);
        
        
    })

    $(".filter-aside").on("click", '#user-icon',function() {

        $(this).css({
            "transform": "rotate(180deg)"
        })
        $("#user").show();
        $('.modal-filter-back').show();

        var tableBranches = ''
        for(var i=0; i < users.length; i++) {

            tableBranches += '<li class="ui-sortable-handle"><div data-type="user" data-userid="'+ users[i].id +'" class="filter-item">'+ users[i].full_name +'</div></li>';

        }
        $("#user .modal-filter-select").html(tableBranches);
        
        
    })

    $(".filter-aside").on("click", '#date-icon',function() {

        $(this).css({
            "transform": "rotate(180deg)"
        })
        $("#date").show();
        $('.modal-filter-back').show();

        var tableBranches = ''
        // for(var i=0; i < branches.length; i++) {

        //     tableBranches += '<li class="ui-sortable-handle"><div data-type="branch" data-branchid="'+ branches[i].id +'" class="filter-item">'+ branches[i].name +'</div></li>';

        // }
        // $("#date .modal-filter-select").html(tableBranches);
        
        
    })
   
    function getReport() {

        console.log('branch', requersBranches)
        console.log('users', requestYear)
        console.log('requestYear', requestYear)
        
        if (requersBranches == null && requestYear == null && requestYear == null) {

            $.ajax({
                url: url + '/get_report/',
                type: 'POST',
                data: {filters:JSON.stringify( [{'branch' : []}, {'user' : []}],{'year' : []}) },
                success: function(data) {
                    
                //   console.log('report: ', data);
                  
                }
            });
            return null;

        } else if (requersBranches != null && requestYear == null && requestYear == null) {

            $.ajax({
                url: url + '/get_report/',
                type: 'POST',
                data: {filters:JSON.stringify( [{'branch' : branches}, {'user' : []}],{'year' : []}) },
                success: function(data) {
                  
                  console.log('report: ', data);
                  
                }
            });

        } else if (requersBranches == null && requestYear != null && requestYear == null) {

            $.ajax({
                url: url + '/get_report/',
                type: 'POST',
                data: {filters:JSON.stringify( [{'branch' : []}, {'user' : users}],{'year' : []}) },
                success: function(data) {
                  
                  console.log('report: ', data);
                  
                }
            });

        } else if (requersBranches != null && requestYear != null && requestYear == null) {

            $.ajax({
                url: url + '/get_report/',
                type: 'POST',
                data: {filters:JSON.stringify( [{'branch' : branches}, {'user' : users}],{'year' : []}) },
                success: function(data) {
                  
                  console.log('report: ', data);
                  
                }
            });

        } else if (requersBranches != null && requestYear == null && requestYear != null) {

            $.ajax({
                url: url + '/get_report/',
                type: 'POST',
                data: {filters:JSON.stringify( [{'branch' : branches}, {'user' : []}],{'year' : requestYear}) },
                success: function(data) {
                  
                  console.log('report: ', data);
                  
                }
            });

        } else if (requersBranches == null && requestYear != null && requestYear != null) {

            $.ajax({
                url: url + '/get_report/',
                type: 'POST',
                data: {filters:JSON.stringify( [{'branch' : branches}, {'user' : []}],{'year' : requestYear}) },
                success: function(data) {
                  
                  console.log('report: ', data);
                  
                }
            });

        } else if (requersBranches == null && requestYear == null && requestYear != null) {

            $.ajax({
                url: url + '/get_report/',
                type: 'POST',
                data: {filters:JSON.stringify( [{'branch' : []}, {'user' : []}],{'year' : requestYear}) },
                success: function(data) {
                  
                  console.log('report: ', data);
                  
                }
            });

        } else if (requersBranches != null && requestYear != null && requestYear != null) {

            $.ajax({
                url: url + '/get_report/',
                type: 'POST',
                data: {filters:JSON.stringify( [{'branch' : branches}, {'user' : users}],{'year' : requestYear}) },
                success: function(data) {
                  
                  console.log('report: ', data);
                  
                }
            });

        }
        
    }
    
    $('#search-report').click(function () {
        getReport();
    })

})