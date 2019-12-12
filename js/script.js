$(function() {
  /**
   * Global vars
   */
    var allFilials = [
      {
        "filialX": 227,
        "filialY": 31,
        "filialName": "Balakən filialı",
        "id": "7"
      },
      {
        "filialX": 260,
        "filialY": 58,
        "filialName": "Zaqatala filialı",
        "id": "61"
      },
      {
        "filialX": 295,
        "filialY": 87,
        "filialName": "Qax filialı",
        "id": "34"
      },
      {
        "filialX": 321,
        "filialY": 124,
        "filialName": "Şəki filialı",
        "id": "46"
      },
      {
        "filialX": 362,
        "filialY": 148,
        "filialName": "Oğuz filialı",
        "id": "31"
      },
      {
        "filialX": 411,
        "filialY": 160,
        "filialName": "Qəbələ filialı",
        "id": "67"
      },
      {
        "filialX": 459,
        "filialY": 191,
        "filialName": "İsmayıllı filialı",
        "id": "23"
      },
      {
        "filialX": 478,
        "filialY": 79,
        "filialName": "Qusar filialı",
        "id": "37"
      },
      {
        "filialX": 542,
        "filialY": 77,
        "filialName": "Xaçmaz filialı",
        "id": "55"
      },
      {
        "filialX": 508,
        "filialY": 108,
        "filialName": "Şimal filialı",
        "id": "98"
      },
      {
        "filialX": 494,
        "filialY": 114,
        "filialName": "Quba filialı",
        "id": "36"
      },
      {
        "filialX": 560,
        "filialY": 116,
        "filialName": "Şabran filialı",
        "id": "44"
      },
      {
        "filialX": 581,
        "filialY": 149,
        "filialName": "Siyəzən filialı",
        "id": "50"
      },
      {
        "filialX": 600,
        "filialY": 202,
        "filialName": "Xızı filialı",
        "id": "58"
      },
      {
        "filialX": 644,
        "filialY": 228,
        "filialName": "Qubadlı filialı",
        "id": "71"
      },
      {
        "filialX": 656,
        "filialY": 230,
        "filialName": "Sumqayıt filialı",
        "id": "51"
      },
      {
        "filialX": 654,
        "filialY": 234,
        "filialName": "Sumqayıt kart mərkəzi",
        "id": "52"
      },
      {
        "filialX": 519,
        "filialY": 200,
        "filialName": "Şamaxı filialı",
        "id": "45"
      },
      {
        "filialX": 485,
        "filialY": 227,
        "filialName": "Ağsu filialı",
        "id": "86"
      },
      {
        "filialX": 410,
        "filialY": 232,
        "filialName": "Göyçay filialı",
        "id": "73"
      },
      {
        "filialX": 406,
        "filialY": 262,
        "filialName": "Ucar filialı",
        "id": "82"
      },
      {
        "filialX": 360,
        "filialY": 230,
        "filialName": "Ağdaş filialı",
        "id": "84"
      },
      {
        "filialX": 413,
        "filialY": 302,
        "filialName": "Zərdab filialı",
        "id": "78"
      },
      {
        "filialX": 456,
        "filialY": 282,
        "filialName": "Kürdəmir filialı",
        "id": "85"
      },
      {
        "filialX": 75,
        "filialY": 126,
        "filialName": "Qazax filialı",
        "id": "35"
      },
      {
        "filialX": 98,
        "filialY": 111,
        "filialName": "Aqstafa filialı",
        "id": "5"
      },
      {
        "filialX": 126,
        "filialY": 154,
        "filialName": "Tovuz filialı",
        "id": "54"
      },
      {
        "filialX": 183,
        "filialY": 183,
        "filialName": "Şəmkir filialı",
        "id": "75"
      },
      {
        "filialX": 225,
        "filialY": 177,
        "filialName": "Samux filialı",
        "id": "42"
      },
      {
        "filialX": 212,
        "filialY": 211,
        "filialName": "Gəncə filialı",
        "id": "15"
      },
      {
        "filialX": 212,
        "filialY": 221,
        "filialName": "Kəpəz filialı",
        "id": "24"
      },
      {
        "filialX": 206,
        "filialY": 215,
        "filialName": "Gəncə kart mərkəzi",
        "id": "102"
      },
      {
        "filialX": 211,
        "filialY": 238,
        "filialName": "Göygöl filialı",
        "id": "19"
      },
      {
        "filialX": 131,
        "filialY": 245,
        "filialName": "Gədəbəy filialı",
        "id": "80"
      },
      {
        "filialX": 170,
        "filialY": 247,
        "filialName": "Daşkəsən filialı",
        "id": "68"
      },
      {
        "filialX": 252,
        "filialY": 215,
        "filialName": "Goranboy filialı",
        "id": "18"
      },
      {
        "filialX": 305,
        "filialY": 205,
        "filialName": "Mingəçevir filialı",
        "id": "77"
      },
      {
        "filialX": 320,
        "filialY": 229,
        "filialName": "Yevlax filialı",
        "id": "69"
      },
      {
        "filialX": 548,
        "filialY": 600,
        "filialName": "Astara filialı",
        "id": "6"
      },
      {
        "filialX": 550,
        "filialY": 550,
        "filialName": "Lənkəran filialı",
        "id": "62"
      },
      {
        "filialX": 465,
        "filialY": 518,
        "filialName": "Yardımlı filialı",
        "id": "59"
      },
      {
        "filialX": 489,
        "filialY": 550,
        "filialName": "Lerik filialı",
        "id": "25"
      },
      {
        "filialX": 528,
        "filialY": 505,
        "filialName": "Masallı filialı",
        "id": "26"
      },
      {
        "filialX": 536,
        "filialY": 505,
        "filialName": "Cənub filialı",
        "id": "114"
      },
      {
        "filialX": 496,
        "filialY": 473,
        "filialName": "Cəlilabad filialı",
        "id": "14"
      },
      {
        "filialX": 600,
        "filialY": 444,
        "filialName": "Neftçala filialı",
        "id": "64"
      },
      {
        "filialX": 495,
        "filialY": 425,
        "filialName": "Biləsuvar filialı",
        "id": "9"
      },
      {
        "filialX": 502,
        "filialY": 427,
        "filialName": "Cəbrayıl filialı",
        "id": "11"
      },
      {
        "filialX": 576,
        "filialY": 389,
        "filialName": "Salyan filialı",
        "id": "41"
      },
      {
        "filialX": 442,
        "filialY": 361,
        "filialName": "İmişli filialı",
        "id": "22"
      },
      {
        "filialX": 490,
        "filialY": 355,
        "filialName": "Saatlı filialı",
        "id": "38"
      },
      {
        "filialX": 515,
        "filialY": 333,
        "filialName": "Sabirabad filialı",
        "id": "39"
      },
      {
        "filialX": 567,
        "filialY": 315,
        "filialName": "Hacıqabul filialı",
        "id": "20"
      },
      {
        "filialX": 558,
        "filialY": 342,
        "filialName": "Şirvan filialı",
        "id": "48"
      },
      {
        "filialX": 560,
        "filialY": 229,
        "filialName": "Qobustan filialı",
        "id": "97"
      },
      {
        "filialX": 391,
        "filialY": 377,
        "filialName": "Beyləqan filialı",
        "id": "83"
      },
      {
        "filialX": 272,
        "filialY": 254,
        "filialName": "Naftalan filialı",
        "id": "63"
      },
      {
        "filialX": 296,
        "filialY": 278,
        "filialName": "Tərtər filialı",
        "id": "89"
      },
      {
        "filialX": 364,
        "filialY": 407,
        "filialName": "Füzuli filialı",
        "id": "81"
      },
      {
        "filialX": 349,
        "filialY": 333,
        "filialName": "Ağcəbədi filialı",
        "id": "88"
      },
      {
        "filialX": 309,
        "filialY": 318,
        "filialName": "Ağdam filialı",
        "id": "3"
      },
      {
        "filialX": 328,
        "filialY": 277,
        "filialName": "Bərdə filialı",
        "id": "8"
      },
      {
        "filialX": 167,
        "filialY": 519,
        "filialName": "Ordubad filialı",
        "id": "115"
      },
      {
        "filialX": 120,
        "filialY": 503,
        "filialName": "Culfa filialı",
        "id": "108"
      },
      {
        "filialX": 87,
        "filialY": 466,
        "filialName": "Naxçıvan filialı",
        "id": "113"
      },
      {
        "filialX": 92,
        "filialY": 478,
        "filialName": "Babək filialı",
        "id": "107"
      },
      {
        "filialX": 112,
        "filialY": 431,
        "filialName": "Şahbuz filialı",
        "id": "112"
      },
      {
        "filialX": 13,
        "filialY": 384,
        "filialName": "Sədərək filialı",
        "id": "111"
      },
      {
        "filialX": 32,
        "filialY": 415,
        "filialName": "Şərur filialı",
        "id": "109"
      },
      {
        "filialX": 56,
        "filialY": 442,
        "filialName": "Kəngərli filialı",
        "id": "110"
      },
      {
        "filialX": 336,
        "filialY": 278,
        "filialName": "Bərdə kart mərkəzi",
        "id": "12"
      },
      {
        "filialX": 360,
        "filialY": 327,
        "filialName": "Laçın filialı",
        "id": "70"
      },
      {
        "filialX": 532,
        "filialY": 512,
        "filialName": "Masallı kart mərkəzi",
        "id": "27"
      },
      {
        "filialX": 582,
        "filialY": 390,
        "filialName": "Salyan kart mərkəzi",
        "id": "41"
      },
      {
        "filialX": 326,
        "filialY": 130,
        "filialName": "Şəki kart mərkəzi",
        "id": "46"
      }
    ],
    filterId = 'map',
    showTimeOnMap = true
//SVG start
 var svg = document.getElementById('sgs'),
     NS = svg.getAttribute('xmlns');

 function drowSvg() {
      var
      t = e.target,
      x = e.clientX,
      y = e.clientY,
      target = (t == svg ? svg : t.parentNode),
      svgP = svgPoint(target, x, y),
      circle = document.createElementNS(NS, 'circle');

      circle.setAttributeNS(null, 'cx', Math.round(svgP.x));
      circle.setAttributeNS(null, 'cy', Math.round(svgP.y));
      circle.setAttributeNS(null, 'r', 2);
      target.appendChild(circle);
 }

 // translate page to SVG co-ordinate
function svgPoint(element, x, y) {
   var pt = svg.createSVGPoint();
   pt.x = x;
   pt.y = y;
   return pt.matrixTransform(element.getScreenCTM().inverse());
 }

//SVG end

  $("#baki").click(function() {
    $(this).parent().hide('slow')
    $("#map-baki").addClass("map-baki-shown")
    $(".btn-back").addClass('btn-back-shown')
    $('#gotable').css('transform', 'scale(0)')
  })

  $(".btn-back").click(function() {
    $(this).removeClass("btn-back-shown")
    $("#baki").parent().show('slow')
    $("#map-baki").removeClass("map-baki-shown")
    $('#gotable').css('transform', 'scale(1)')
  })

  $('#baki').mouseover(function() {
    $(this).css('fill', 'red')
  })
  $('#baki').mouseout(function() {
    
    
    $(this).css('fill', '#CBE0BA')
  })
  
  for( var i = 0; i < allFilials.length;i++) {

    var
    svgP = svgPoint(svg, allFilials[i].filialX, allFilials[i].filialY),
    circle = document.createElementNS(NS, 'circle')
    circle.setAttribute('data-filial', allFilials[i].filialName)
    circle.setAttribute('data-filialId', i)
    circle.setAttributeNS(null, 'cx', allFilials[i].filialX);
    circle.setAttributeNS(null, 'cy', allFilials[i].filialY);
    circle.setAttributeNS(null, 'r', 2);
    circle.classList.add('circle');
    svg.appendChild(circle);

  }

  $description = $(".tooltip");

  

  $(document).on('mousemove', function(e){
    $description.css({
      left:  e.pageX,
      top:   e.pageY - 70
    });
    
  })


  var newArr = [];

  function redrow() {

    var target = document.getElementById('sgs')
    var element = document.getElementsByTagName('circle' ), index;
  
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    
    for(var i = 0; i < allFilials.length; i++) {
      var
      svgP = svgPoint(svg, allFilials[i].filialX, allFilials[i].filialY),
      circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('data-filial', allFilials[i].filialName)
      console.log("TCL: redrow -> allFilialsNew[i].alert.avg_waiting_time.value", allFilials[i].alert)
      allFilials[i].alert !== undefined ? circle.setAttribute('data-time', allFilials[i].alert.avg_waiting_time.value) : null;
     
      allFilials[i].alert ? circle.setAttribute('data-percent', allFilials[i].alert.percent.value) : null
      circle.setAttributeNS(null, 'cx', allFilials[i].filialX);
      circle.setAttributeNS(null, 'cy', allFilials[i].filialY);
      circle.setAttributeNS(null, 'r', 2);
      // console.log("suka", allFilials[i].alert.avg_waiting_time.color);
      allFilials[i].alert !== undefined ? circle.style.stroke = allFilials[i].alert.avg_waiting_time.color : null;
      
      circle.classList.add('circle');
      target.appendChild(circle);
  
    }
  }

  

  $("#search").on('input',function(e) {
    newArr = [];
    var inputVal = $(this).val()



    var reg = new RegExp(inputVal, 'i')
        
    for(var i=0; i < allFilials.length; i++) {
      if(reg.test(allFilials[i].filialName)) {
        newArr.push(allFilials[i]);
      }
    }

    redrow()

    })

    $('#sgs').on('mouseover', '.circle', function() {
      $description.addClass('tooltip-shown');
      $description.find('.tooltip-name').html($(this).attr('data-filial'));
      if(showTimeOnMap) {
        $description.find('.tooltip-time').html($(this).attr('data-time') ? $(this).attr('data-time') : 'Melumat yoxdur');
      } else {
        $description.find('.tooltip-percent').html($(this).attr('data-percent'));
      }
      
      
      
      
    })
  
    $('#sgs').on('mouseout', '.circle', function() {
      
      $description.find('.tooltip-time').html('');
      $description.find('.tooltip-percent').html('');
      $description.removeClass('tooltip-shown');
      $description.find('.tooltip-name').html('');
  
    })
    $('#sgs').on('click', '.circle', function() {
      
      window.open('/departament.html?filial=' + $(this).attr('data-filialId'))
  
    }) 

    $('.tab-btn').click(function() {

    })

    /***
     * @table
     */

    $("#gotable").click(function() {
      
      $(".table-wrap").slideToggle('slow')
      $(this).text() == 'Go table' ? $('.map-wrap').css('overflow', 'hidden') : $('.map-wrap').css('overflow', 'visible')
      $(this).text() == 'Go table' ? $(this).text('Go Map') : $(this).text('Go table');
      filterId = filterId == 'map' ? 'table' : 'map'
      // console.log("TCL: filterId", filterId)
      console.log("TCL: $('.table').css('width')", $('.table').css('width'))
      var tableWidth = $('.table').css('width')
      // $('.table').css('width', tableWidth)

    })


    $('.table-branch-row').mouseover(function() {
      
      $(this).parent().find('td').css({
        background: '#333'
      })
      $(this).parent().find('td a, td').css({
        color: '#fff'
      })
    })
    $('.table-branch-row').mouseout(function() {
      $(".table td").css({
        background: '#e1e1e1',
        color: '#000'
      })
      $(".table td a").css({
        color: '#000'
      })
      
      $(".table tbody tr:nth-child(2n) td").css({
        background: '#e52e35',
        color: '#fff'
      })

      $(".table tbody tr:nth-child(2n) td a").css({
        color: '#fff'
      })
    })

    var tabletabsCount = 4;

    $(".accordion-head").click(function() {

      if (tabletabsCount > 1) {

        --tabletabsCount
        var dataAcc = $(this).attr('data-accordion')
        $(".table td[data-accordion=" + dataAcc +"]").hide()
        var colName = $(".table td[data-accordion=" + dataAcc + "][data-first=1]").eq(0).html()
        $(".table td[data-accordion=" + dataAcc +"][data-first=1]").eq(0).after('<td rowspan="2" class="fake" data-fake="' + dataAcc + '" style="background:#bf2127 !important; padding: 0; font-size: 12px;"></td>')
        $(".table td[data-accordion=" + dataAcc +"][data-first=1]").eq(0).siblings('.fake[data-fake=' + dataAcc + ']').html('<div style="transform: rotate(-90deg); transform-origin: center;">' + colName + '</div>')
        $(".table td[data-accordion=" + dataAcc +"][data-first=1]").slice(2).after('<td class="fake" data-fake="' + dataAcc + '" style=""></td>')
        
      } else  {

        return false
        
      }
      
    })

    $('.table').on('click', '.fake', function() {

      ++tabletabsCount
      var fakeCase = $(this).attr('data-fake')
      console.log("TCL: fakeCase", fakeCase)
      $(".table td[data-accordion=" + fakeCase +"]").show()
      $('.fake[data-fake="' + fakeCase + '"]').remove()

    })

    // Tooltips

    tippy('.mft', {
      content: "Max free time"
    });

    tippy('.fte', {
      content: "Free service points"
    });

    tippy('.fsp', {
      content: "Free service points"
    });

    var heatmap_url = 'http://192.168.1.194:8000/heatmap';
    
    function setInputData(data) {
      
      for (var i = 0; i < data.length; i++) {
        // console.log('id',data[i].id)
        for(var j = 0; j < allFilials.length; j++) {
          console.log("TCL: setInputData -> data[i].id", data[i].id)
          console.log("TCL: setInputData -> allFilials[j].id", allFilials[j].id)
          if(data[i].id == allFilials[j].id) {
          
          

            
            allFilials[j].alert = data[i].alert
            
            console.log("TCL: setInputData -> data[i].alert", data[i].alert)
          }
        }
        // debugger
        

      }

      redrow()
    }

    $.ajax({
      url:  heatmap_url + '/get_map_data/',
      type: 'GET',
      success: function(data) {

        setInputData(data.branches)
          
      }
    });

})