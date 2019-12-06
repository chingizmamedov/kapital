$(function() {
  /**
   * Global vars
   */
    var allFilials = [
      {
        "filialX": 227,
        "filialY": 31,
        "filialName": "Balakən filialı"
      },
      {
        "filialX": 260,
        "filialY": 58,
        "filialName": "Zaqatala filialı"
      },
      {
        "filialX": 295,
        "filialY": 87,
        "filialName": "Qax filialı"
      },
      {
        "filialX": 321,
        "filialY": 124,
        "filialName": "Şəki filialı"
      },
      {
        "filialX": 362,
        "filialY": 148,
        "filialName": "Oğuz filialı"
      },
      {
        "filialX": 411,
        "filialY": 160,
        "filialName": "Qəbələ filialı"
      },
      {
        "filialX": 459,
        "filialY": 191,
        "filialName": "İsmayıllı filialı"
      },
      {
        "filialX": 478,
        "filialY": 79,
        "filialName": "Qusar filialı"
      },
      {
        "filialX": 542,
        "filialY": 77,
        "filialName": "Xaçmaz filialı"
      },
      {
        "filialX": 508,
        "filialY": 108,
        "filialName": "Şimal filialı"
      },
      {
        "filialX": 494,
        "filialY": 114,
        "filialName": "Quba filialı"
      },
      {
        "filialX": 560,
        "filialY": 116,
        "filialName": "Şabran filialı"
      },
      {
        "filialX": 581,
        "filialY": 149,
        "filialName": "Siyəzən filialı"
      },
      {
        "filialX": 600,
        "filialY": 202,
        "filialName": "Xızı filialı"
      },
      {
        "filialX": 644,
        "filialY": 228,
        "filialName": "Qubadlı filialı"
      },
      {
        "filialX": 656,
        "filialY": 230,
        "filialName": "Sumqayıt filialı"
      },
      {
        "filialX": 654,
        "filialY": 234,
        "filialName": "Sumqayıt kart mərkəzi"
      },
      {
        "filialX": 519,
        "filialY": 200,
        "filialName": "Şamaxı filialı"
      },
      {
        "filialX": 485,
        "filialY": 227,
        "filialName": "Ağsu filialı"
      },
      {
        "filialX": 410,
        "filialY": 232,
        "filialName": "Göyçay filialı"
      },
      {
        "filialX": 406,
        "filialY": 262,
        "filialName": "Ucar filialı"
      },
      {
        "filialX": 360,
        "filialY": 230,
        "filialName": "Ağdaş filialı"
      },
      {
        "filialX": 413,
        "filialY": 302,
        "filialName": "Zərdab filialı"
      },
      {
        "filialX": 456,
        "filialY": 282,
        "filialName": "Kürdəmir filialı"
      },
      {
        "filialX": 75,
        "filialY": 126,
        "filialName": "Qazax filialı"
      },
      {
        "filialX": 98,
        "filialY": 111,
        "filialName": "Aqstafa filialı"
      },
      {
        "filialX": 126,
        "filialY": 154,
        "filialName": "Tovuz filialı"
      },
      {
        "filialX": 183,
        "filialY": 183,
        "filialName": "Şəmkir filialı"
      },
      {
        "filialX": 225,
        "filialY": 177,
        "filialName": "Samux filialı"
      },
      {
        "filialX": 212,
        "filialY": 211,
        "filialName": "Gəncə filialı"
      },
      {
        "filialX": 212,
        "filialY": 221,
        "filialName": "Kəpəz filialı"
      },
      {
        "filialX": 206,
        "filialY": 215,
        "filialName": "Gəncə kart mərkəzi"
      },
      {
        "filialX": 211,
        "filialY": 238,
        "filialName": "Göygöl filialı"
      },
      {
        "filialX": 131,
        "filialY": 245,
        "filialName": "Gədəbəy filialı"
      },
      {
        "filialX": 170,
        "filialY": 247,
        "filialName": "Daşkəsən filialı"
      },
      {
        "filialX": 252,
        "filialY": 215,
        "filialName": "Goranboy filialı"
      },
      {
        "filialX": 305,
        "filialY": 205,
        "filialName": "Mingəçevir filialı"
      },
      {
        "filialX": 320,
        "filialY": 229,
        "filialName": "Yevlax filialı"
      },
      {
        "filialX": 548,
        "filialY": 600,
        "filialName": "Astara filialı"
      },
      {
        "filialX": 550,
        "filialY": 550,
        "filialName": "Lənkəran filialı"
      },
      {
        "filialX": 465,
        "filialY": 518,
        "filialName": "Yardımlı filialı"
      },
      {
        "filialX": 489,
        "filialY": 550,
        "filialName": "Lerik filialı"
      },
      {
        "filialX": 528,
        "filialY": 505,
        "filialName": "Masallı filialı"
      },
      {
        "filialX": 536,
        "filialY": 505,
        "filialName": "Cənub filialı"
      },
      {
        "filialX": 496,
        "filialY": 473,
        "filialName": "Cəlilabad filialı"
      },
      {
        "filialX": 600,
        "filialY": 444,
        "filialName": "Neftçala filialı"
      },
      {
        "filialX": 495,
        "filialY": 425,
        "filialName": "Biləsuvar filialı"
      },
      {
        "filialX": 502,
        "filialY": 427,
        "filialName": "Cəbrayıl filialı"
      },
      {
        "filialX": 576,
        "filialY": 389,
        "filialName": "Salyan filialı"
      },
      {
        "filialX": 442,
        "filialY": 361,
        "filialName": "İmişli filialı"
      },
      {
        "filialX": 490,
        "filialY": 355,
        "filialName": "Saatlı filialı"
      },
      {
        "filialX": 515,
        "filialY": 333,
        "filialName": "Sabirabad filialı"
      },
      {
        "filialX": 567,
        "filialY": 315,
        "filialName": "Hacıqabul filialı"
      },
      {
        "filialX": 558,
        "filialY": 342,
        "filialName": "Şirvan filialı"
      },
      {
        "filialX": 560,
        "filialY": 229,
        "filialName": "Qobustan filialı"
      },
      {
        "filialX": 391,
        "filialY": 377,
        "filialName": "Beyləqan filialı"
      },
      {
        "filialX": 272,
        "filialY": 254,
        "filialName": "Naftalan filialı"
      },
      {
        "filialX": 296,
        "filialY": 278,
        "filialName": "Tərtər filialı"
      },
      {
        "filialX": 364,
        "filialY": 407,
        "filialName": "Füzuli filialı"
      },
      {
        "filialX": 349,
        "filialY": 333,
        "filialName": "Ağcəbədi filialı"
      },
      {
        "filialX": 309,
        "filialY": 318,
        "filialName": "Ağdam filialı"
      },
      {
        "filialX": 328,
        "filialY": 277,
        "filialName": "Bərdə filialı"
      },
      {
        "filialX": 167,
        "filialY": 519,
        "filialName": "Ordubad filialı"
      },
      {
        "filialX": 120,
        "filialY": 503,
        "filialName": "Culfa filialı"
      },
      {
        "filialX": 87,
        "filialY": 466,
        "filialName": "Naxçıvan filialı"
      },
      {
        "filialX": 92,
        "filialY": 478,
        "filialName": "Babək filialı"
      },
      {
        "filialX": 112,
        "filialY": 431,
        "filialName": "Şahbuz filialı"
      },
      {
        "filialX": 13,
        "filialY": 384,
        "filialName": "Sədərək filialı"
      },
      {
        "filialX": 32,
        "filialY": 415,
        "filialName": "Şərur filialı"
      },
      {
        "filialX": 56,
        "filialY": 442,
        "filialName": "Kəngərli filialı"
      },
      {
        "filialX": 336,
        "filialY": 278,
        "filialName": "Bərdə kart mərkəzi"
      },
      {
        "filialX": 360,
        "filialY": 327,
        "filialName": "Laçın filialı"
      },
      {
        "filialX": 532,
        "filialY": 512,
        "filialName": "Masallı kart mərkəzi"
      },
      {
        "filialX": 582,
        "filialY": 390,
        "filialName": "Salyan kart mərkəzi"
      },
      {
        "filialX": 326,
        "filialY": 130,
        "filialName": "Şəki kart mərkəzi"
      }
    ]
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
      top:   e.pageY - 40
    });
    
  })


  var newArr = [];

  function redrow() {

    var target = document.getElementById('sgs')
    var element = document.getElementsByTagName('circle' ), index;
  
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    
    for(var i = 0; i < newArr.length; i++) {
      var
      svgP = svgPoint(svg, newArr[i].filialX, newArr[i].filialY),
      circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('data-filial', newArr[i].filialName)
      circle.setAttributeNS(null, 'cx', newArr[i].filialX);
      circle.setAttributeNS(null, 'cy', newArr[i].filialY);
      circle.setAttributeNS(null, 'r', 2);
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
      $description.html($(this).attr('data-filial'));
    })
  
    $('#sgs').on('mouseout', '.circle', function() {
      
      $description.removeClass('tooltip-shown');
      $description.html($(this).attr('data-filial'));
  
    }) 



    /***
     * @table
     */

    $("#gotable").click(function() {
      $(".table-wrap").slideToggle('slow')
      $(this).text() == 'Go table' ? $(this).text('Go Map') : $(this).text('Go table');
      console.log("TCL: $(this).text()", $(this).text())

    })


    $('#example').DataTable();

})