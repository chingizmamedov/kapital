$(function () {

  var heatmap_url = 'http://192.168.1.194:8000/heatmap';

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
      "filialX": 312,
      "filialY": 211,
      "filialName": "Atabank",
      "id": "1"
    },
    {
      "filialX": 212,
      "filialY": 291,
      "filialName": "Shamaxi filialı",
      "id": "13"
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
  ];
  /**
   * Main vars
   */
  var filterId = 'map',
  showTimeOnMap = true,
  drowArr = [],
  mapTimer,
  //SVG start
  svg = document.getElementById('sgs'),
  NS = svg.getAttribute('xmlns');
  //SVG end

  // All functions

  /**
  map functions

  @redrow() function for redrow svg map!
  */
  function redrow() {

    var target = document.getElementById('sgs')
    var element = document.getElementsByTagName('circle'), index;

    for (index = element.length - 1; index >= 0; index--) {
      element[index].parentNode.removeChild(element[index]);
    }

    if (showTimeOnMap != true) {

      for (var i = 0; i < drowArr.length; i++) {

        var
        circle = document.createElementNS(NS, 'circle');
        circle.setAttribute('data-filial', drowArr[i].filialName)
        drowArr[i].alert !== undefined ? circle.setAttribute('data-time', drowArr[i].alert.avg_waiting_time.value) : null;

        drowArr[i].alert ? circle.setAttribute('data-percent', drowArr[i].alert.percent.value) : null
        circle.setAttributeNS(null, 'cx', drowArr[i].filialX);
        circle.setAttributeNS(null, 'cy', drowArr[i].filialY);

        circle.setAttributeNS(null, 'r', 2);
        drowArr[i].alert !== undefined ? circle.style.stroke = drowArr[i].alert.avg_waiting_time.color : null;
        if (drowArr[i].alert !== undefined) {
          if (drowArr[i].alert.percent.value.slice(0, -1) >= 0 && drowArr[i].alert.percent.value.slice(0, -1) < 40) {
            circle.setAttributeNS(null, 'r', 1);
            circle.style.stroke = 'green';
            circle.style.fill = 'green';
          }
          if (drowArr[i].alert.percent.value.slice(0, -1) > 41 && drowArr[i].alert.percent.value.slice(0, -1) < 60) {
            circle.setAttributeNS(null, 'r', 2);
            circle.style.stroke = 'yellow';
            circle.style.fill = 'yellow';
          }
          if (drowArr[i].alert.percent.value.slice(0, -1) > 61 && drowArr[i].alert.percent.value.slice(0, -1) < 80) {
            circle.setAttributeNS(null, 'r', 3);
            circle.style.stroke = 'orange';
            circle.style.fill = 'orange';
          }
          if (drowArr[i].alert.percent.value.slice(0, -1) > 81 && drowArr[i].alert.percent.value.slice(0, -1) <= 100) {
            circle.setAttributeNS(null, 'r', 4);
            circle.style.stroke = 'red';
            circle.style.fill = 'red';
          }
        }
        circle.setAttribute('data-id',drowArr[i].id )
        circle.classList.add('circle');
        target.appendChild(circle);

      }
      return null
    }
    for (var i = 0; i < drowArr.length; i++) {
      var
        circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('data-filial', drowArr[i].filialName)
      drowArr[i].alert !== undefined ? circle.setAttribute('data-time', drowArr[i].alert.avg_waiting_time.value) : null;
      var seconds = 0,
        secondsArr = []
      if (drowArr[i].alert) {
        secondsArr = drowArr[i].alert.avg_waiting_time.value.split(':')
        seconds = parseInt(secondsArr[0]) * 360 + parseInt(secondsArr[1]) * 60 + parseInt(secondsArr[2])
        
        circle.setAttributeNS(null, 'r', 2);
        if (seconds >= 0 && seconds < 600) {
          circle.style.stroke = 'green';
          circle.style.fill = 'green';
          circle.setAttributeNS(null, 'r', 1);
        }
        if (seconds > 600 && seconds < 900) {
          circle.style.stroke = 'yellow';
          circle.style.fill = 'yellow';
          circle.setAttributeNS(null, 'r', 2);
        }
        if (seconds > 900 && seconds < 1200) {
          circle.style.stroke = 'orange';
          circle.style.fill = 'orange';
          circle.setAttributeNS(null, 'r', 3);
        }
        if (seconds > 1200) {
          circle.style.stroke = 'red';
          circle.style.fill = 'red';
          circle.setAttributeNS(null, 'r', 4);
        }
      }



      drowArr[i].alert ? circle.setAttribute('data-percent', drowArr[i].alert.percent.value) : null
      circle.setAttributeNS(null, 'cx', drowArr[i].filialX);
      circle.setAttributeNS(null, 'cy', drowArr[i].filialY);
      circle.setAttribute('data-id',drowArr[i].id )
      circle.classList.add('circle');
      target.appendChild(circle);

    }
  }

  /**
   * 
   * @param {*setInputData} data for add given data for main array
   */
  function setInputData(data) {

    for (var i = 0; i < data.length; i++) {

      for (var j = 0; j < allFilials.length; j++) {

        if (data[i].id == allFilials[j].id) {

          allFilials[j].alert = data[i].alert;

        }
      }
      // debugger


    }
    drowArr = allFilials;
    redrow();
  }

  /**
   * 
   * setCardData for add info in 9 card!
   */
  function setCardData(data) {

    $('#avg_serving_time').text(data.avg_serving_time);
    $('#avg_waiting_time').text(data.avg_waiting_time);
    $('#max_waiting_time').text(data.max_waiting_time);
    $('#noshow_count').text(data.noshow_count);
    $('#waiting_customer_count').text(data.waiting_customer_count);
    $('#served_customer_count').text(data.served_customer_count);
    $('#removed_customer_count').text(data.removed_customer_count);
    $('#open_counter_count').text(data.open_counter_count);
    $('#closed_counter_count').text(data.closed_counter_count);

  }
  /**
    map functions
  */



  $.ajax({
    url: heatmap_url + '/get_map_data/',
    type: 'GET',
    success: function (data) {
      
      setInputData(data.branches);
      setCardData(data);
      $(".kapital-preloader").hide();
    }
  });

  function autoGetMap() {

    $('.map-preloader').show();
    $.ajax({
      url: heatmap_url + '/get_map_data/',
      type: 'GET',
      success: function (data) {
      console.log("TCL: autoGetMap -> data", data)
        setInputData(data.branches);
        setCardData(data);
        clearTimeout(mapTimer);
        $('.map-preloader').hide();
        if(filterId == 'map') {
          mapTimer = setTimeout(function(){
            autoGetMap();
          }, 10000);
        }
      }
    });

  }

  mapTimer = setTimeout(function(){
    autoGetMap();
  }, 10000);

  /**
   * All events
  */

/**
  * Map events
*/

  $("#baki").click(function () {
    $(this).parent().hide('slow')
    $("#map-baki").addClass("map-baki-shown")
    $(".btn-back").addClass('btn-back-shown')
    $('#gotable').css('transform', 'scale(0)')
  })

  $(".btn-back").click(function () {
    $(this).removeClass("btn-back-shown")
    $("#baki").parent().show('slow')
    $("#map-baki").removeClass("map-baki-shown")
    $('#gotable').css('transform', 'scale(1)')
  })

  $('#baki').mouseover(function () {
    $(this).css('fill', 'red')
  })
  $('#baki').mouseout(function () {


    $(this).css('fill', '#CBE0BA')
  })

  $description = $(".tooltip");
  $(document).on('mousemove', function (e) {
    $description.css({
      left: e.pageX,
      top: e.pageY - 70
    });
  })



  $('#sgs').on('mouseover', '.circle', function () {

    $description.addClass('tooltip-shown');
    $description.find('.tooltip-name').html($(this).attr('data-filial'));

    if (showTimeOnMap) {

      $description.find('.tooltip-time').html($(this).attr('data-time') ? $(this).attr('data-time') : 'Melumat yoxdur');

    } else {

      $description.find('.tooltip-percent').html($(this).attr('data-percent'));

    }

  })

  $('#sgs').on('mouseout', '.circle', function () {

    $description.find('.tooltip-time').html('');
    $description.find('.tooltip-percent').html('');
    $description.removeClass('tooltip-shown');
    $description.find('.tooltip-name').html('');

  });
  $('#sgs').on('click', '.circle', function () {

    window.open('/departament.html?filial=' + $(this).attr('data-id'))

  });

  $('.map-btn').click(function () {

    var inText = $(this).text()

    if ((showTimeOnMap == true && inText == 'Time') || (showTimeOnMap == false && inText == 'Percent')) {
      return false;
    }

    if (inText == 'Time') {

      $(".map-btn").removeClass('tab-btn__active')
      $(this).addClass('tab-btn__active')
      showTimeOnMap = true;

    }

    if (inText == 'Percent') {

      $(".tab-btn").removeClass('tab-btn__active')
      $(this).addClass('tab-btn__active')
      showTimeOnMap = false;

    }

    redrow();

  })

/**
* Search
*/
  $("#search").on('input', function (e) {
    
    drowArr = [];
    var inputVal = $(this).val()
    var reg = new RegExp(inputVal, 'i')

    for (var i = 0; i < allFilials.length; i++) {
      if (reg.test(allFilials[i].filialName)) {
        drowArr.push(allFilials[i]);
      }
    }
    redrow();

  })

  
})
