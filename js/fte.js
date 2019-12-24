$(function() {
  var heatmap_url = 'http://192.168.1.194:8000/heatmap',
      allFilials = [],
      jsonArray = [];

  function DrowFte() {

    console.log('all filiasls', allFilials)

    for(var i = 0; i < allFilials.length; i++) {
        var tableRow = '',
          tableName = '<tr><td>'+ allFilials[i].name +'</td>',
          tableInputXidmet = '<td><input data- class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[0].fte +'"></td>',
          tableInputSatish = '<td><input class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[1].fte +'"></td>',
          tableInputKassa = '<td><input class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[2].fte +'"></td>';
          if(allFilials[i].departments[3]) {
            var tableInputHuquq = '<td><input class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[3].fte +'"></td>';
          } else {
            var tableInputHuquq = '<td><input disabled min="0" type="number" value="0"></td>';
          }
          if(allFilials[i].departments[4]) {
            var tableInputKassaHuquq = '<td><input class="fte-input" min="0" type="number" value="'+ allFilials[i].departments[4].fte +'"></td>';
          } else {
            var tableInputKassaHuquq = '<td><input disabled min="0" type="number" value="0"></td>';
          }
  
          tableRow += tableName + tableInputXidmet + tableInputSatish + tableInputKassa + tableInputHuquq + tableInputKassaHuquq;
          $(".fte-body").append(tableRow);
    }
    
                                         

  }
  $.ajax({
    url:  heatmap_url + '/get_fte_data/',
    type: 'GET',
    success: function(data) {
        console.log('data fte', data)

        allFilials = data.branches;
        jsonArray = data.branches;
        DrowFte();
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

})