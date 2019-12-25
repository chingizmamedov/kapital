$(function() {
  
  var heatmap_url = 'http://192.168.1.194:8000/heatmap',
      allFilials = [],
      jsonArray = [],
      listAllItemCount = 0,
      listShowCount = 5, // Count of list item, how many item from table must be shown
      paginationCount, // Count of Pagination (how many pagination button must be)
      paginationStep = 1, // Step of pagination, number of table list
      startToShow = 0; // First number from which table items must be shown;

  function DrowFte() {

    console.log('all filiasls', allFilials)

    for(var i = startToShow; i < listShowCount; i++) {
      
      console.log("TCL: DrowFte -> allFilials[i]", allFilials[i])
        var tableRow = '',
          tableName = '<tr><td>'+ allFilials[i].name +'</td>',
          tableInputXidmet = '<td><input data- class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[0].fte +'"></td>',
          tableInputSatish = '<td><input class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[1].fte +'"></td>',
          tableInputKassa = '<td><input class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[2].fte +'"></td>';
          if(allFilials[i].departments[3]) {
            var tableInputHuquq = '<td><input class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[3].fte +'"></td>';
          } else {
            var tableInputHuquq = '<td style="background: #e1e1e1;"><input style="background: #e1e1e1;" disabled min="0" type="number" value="0"></td>';
          }
          if(allFilials[i].departments[4]) {
            var tableInputKassaHuquq = '<td><input class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[4].fte +'"></td>';
          } else {
            var tableInputKassaHuquq = '<td style="background: #e1e1e1;"><input style="background: #e1e1e1;" disabled min="0" type="number" value="0"></td>';
          }
  
          tableRow += tableName + tableInputXidmet + tableInputSatish + tableInputKassa + tableInputHuquq + tableInputKassaHuquq;
          $(".fte-body").html(tableRow);
          if(allFilials[i + 1] == undefined) {
            return null;
          }
    }
    
                                         

  }
  $.ajax({
    url:  heatmap_url + '/get_fte_data/',
    type: 'GET',
    success: function(data) {

        console.log('data fte', data);
        listAllItemCount = data.branches.length;
        allFilials = data.branches;
        jsonArray = data.branches;
        DrowFte();
        drowPagination();
    }
  });

  // $.ajax({
  //   url: heatmap_url + '/edit_fte/',
  //   type: 'POST',
  //   data:{ fte : JSON.stringify([{id : 1, fte : 3} , {id : 2, fte : 2} , {id : 3, fte : 1}]) },//id departmentindi
  //   success: function(data) {
      
  //   }
  // });


  $(".table-wrap-fte").on("change", ".fte-input", function () {

    $(this).css('background', 'red');
    $(this).parent().css('background', 'red');

  })



  function drowPagination() {

    var paginationTemplate = '';
    if (listShowCount == 0) {
      paginationTemplate += '<div data-pagination="' + 1 + '" class="pagination-item pagination-active">' + 1 + '</div>'
      $(".pagination").html(paginationTemplate)
      return null
    }
    var paginationCountCheck = listAllItemCount % listShowCount;
    if (paginationCountCheck !== 0) {
      paginationCount = Math.ceil(listAllItemCount / listShowCount)
    } else {
      paginationCount = listAllItemCount / listShowCount;
    }
    
    for (var i = 1; i < paginationCount + 1; i++) {

      var pagClass = i == 1 ? 'pagination-item pagination-active' : 'pagination-item';
      paginationTemplate += '<div data-pagination="' + i + '" class="' + pagClass + '">' + i + '</div>'
    }

    $(".pagination").html(paginationTemplate);

  }

  $(".table-panel").on('click', '.pagination-item', function () {

    $('.pagination-item').removeClass('pagination-active')
    $(this).addClass('pagination-active')
    paginationStep = $(this).attr('data-pagination');

    DrowFte();


  })

  function reDrowTable() {



  }

})
