$(function() {

    // variables

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        years = [ 2019 ],
        branches = [],
        postArray= [ {branch: []}, {user: []}, {year : []}, {month:[]} , {day:[]} ],
        url = 'http://192.168.1.194:8000/heatmap',
        nowYear = new Date().getFullYear(),
        yearDifferents = nowYear - years[years.length - 1];
    
    for(var i = 0; i < yearDifferents;i++) {
        years.push(years[0] + (i + 1));
    }

     // sortable filters

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
    
    $('.modal-filter-select').sortable({
        // handle: '.drag-handler',
        connectWith: '.modal-filter-selected',
        stop: function(ui, event) {
            console.log('selected element stop', event.item.find('.filter-item'))
            var itemText = event.item.find('.filter-item').text();
            console.log("TCL: itemText", itemText);

            var element = '<div class="filter-select-item">'+ itemText +'</div>'

            $(".filter-selected-items").append(element)
            $(".filter-selected-items").addClass('d-flex');

            selectPostProps(event.item.find('.filter-item'))
            sortFilterElement(".modal-filter-select", ".modal-filter-selected", "month")
        },
        change: function() {
            
        }
    });
    $('.modal-filter-selected').sortable({
        // handle: '.drag-handler',
        connectWith: '.modal-filter-select',
        stop: function() {
            sortFilterElement(".modal-filter-select", ".modal-filter-selected", "month");
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

    // selector

    $(".selector-display").click(function() {
        $(".selector-list").toggle();
    })

    $(".filter-aside").on("click", '.filter-icon',function() {

        $(this).css({
            "transform": "rotate(180deg)"
        })
        $(".modal-filter-wrap").show();
        $('.modal-filter-back').show();

        var filterKind = $(this).data('filkind')
        console.log("TCL: filterKind", filterKind)
        switch(filterKind) {
            case 'branches':
                var tableBranches = ''
                for(var i=0; i < branches.length; i++) {

                    tableBranches += '<li class="ui-sortable-handle"><div data-type="branch" data-branchid="'+ branches[i].id +'" class="filter-item">'+ branches[i].name +'</div></li>';

                }

                $(".modal-filter-select").html(tableBranches);
                break;
            case 'year':

                var tableYears = '';
                
                for(var i=0; i < years.length; i++) {
                    
                    tableYears += '<li class="ui-sortable-handle"><div data-type="year" data-year="'+ years[i] +'" class="filter-item">'+ years[i] +'</div></li>';

                }
                $(".modal-filter-select").html(tableYears);
                break;
            case 'month':

                var tableMonth = '';
                for(var i=0; i < month.length; i++) {
                        
                    tableMonth += '<li class="ui-sortable-handle"><div data-type="month" data-month="'+ i +'" class="filter-item">'+ month[i] +'</div></li>';

                }
                $(".modal-filter-select").html(tableMonth);
                break;

            case 'user': 

                var tableUsers = '';
                for(var i=0; i < users.length; i++) {
                        
                    tableUsers += '<li class="ui-sortable-handle"><div data-type="user" data-userid="'+ users[i].id +'" class="filter-item">'+ users[i].full_name +'</div></li>';

                }
                $(".modal-filter-select").html(tableUsers);
                break;


        }
        
    })

    $('.modal-filter-back').click(function() {

        $(this).hide();
        $(".modal-filter-wrap").hide();
        
    });


    $.ajax({
        url: url + '/get_filters_data/',
        type: 'GET',
        success: function (data) {

          users = data.users;
          branches = data.branches;
          console.log("TCL: branches", branches);

        }
      });


})