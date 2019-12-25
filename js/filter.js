$(function() {

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
    
    $('.modal-filter-select').sortable({
        // handle: '.drag-handler',
        connectWith: '.modal-filter-selected',
        stop: function() {
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
        
    })

    $('.modal-filter-back').click(function() {

        $(this).hide();
        $(".modal-filter-wrap").hide();
        
    });

})