$(function(){



var allFilials = [{
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
var closeTabs = [],
  drowArr = [],
  newDrowTableData,
  newArr = [],
  paginationLock = false,
  searchEneble = false,
  tableTimer,
  listAllItemCount = 500,
  listShowCount = 20, // Count of list item, how many item from table must be shown
  paginationCount, // Count of Pagination (how many pagination button must be)
  paginationStep = 0, // Step of pagination, number of table list
  startToShow = 1; // First number from which table items must be shown

var heatmap_url = 'http://192.168.1.194:8000/heatmap';
// first function for pass data to listAllItemCount

function first() {
  
  $.ajax({
    url: heatmap_url + '/get_branches_data/',
    type: 'POST',
    data: {
      limit: 200,
      offset: 0,
      search: ''
    },
    success: function (data) {
      listAllItemCount = data.count;
      drowPagination();
    }
  });

}

first();


/**
  table functions
*/

function newDrowTable(tableList) {

  var table = '';
  for (var i = 0; i < tableList.length; i++) {
    if (i % 2 !== 0) {
      if (tableList[i].departments.length > 1) {
        var maxFreeTimeArray = tableList[i].max_free_time.split(':');
        var maxFreeTimeConverted = +maxFreeTimeArray[0] * 360 + (+maxFreeTimeArray[1] * 60) + (+maxFreeTimeArray[2]);
        var maxFreeTimeColor = '#6c7ae0';
        if (maxFreeTimeConverted > 300 && maxFreeTimeConverted < 480) {
          maxFreeTimeColor = '#969613';
        } else if (maxFreeTimeConverted > 480 && maxFreeTimeConverted < 600) {
          maxFreeTimeColor = 'orange';
        } else if (maxFreeTimeConverted > 600) {
          maxFreeTimeColor = 'red';
        }
        table += '<tr><td class="table-branch table-branch-row"><a href="/departament.html?filial=' + tableList[i].id + '" target="blank">' + tableList[i].name + '</a></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-first="1" data-accordion="branches"><span>' + tableList[i].ticket_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + tableList[i].served_customer_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + tableList[i].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: ' + maxFreeTimeColor + ' !important;" data-accordion="branches"><span>' + tableList[i].max_free_time + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + tableList[i].closed_counter_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + tableList[i].open_counter_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + tableList[i].free_user_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-first="1" data-accordion="services"><span>' + tableList[i].departments[0].ticket_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + tableList[i].departments[0].served_customer_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + tableList[i].departments[0].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + tableList[i].departments[0].fte + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + tableList[i].departments[0].online_user_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + tableList[i].departments[0].vacation_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + tableList[i].departments[0].displacement_to_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + tableList[i].departments[0].displacement_from_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-first="1" data-accordion="sales"><span>' + tableList[i].departments[1].ticket_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + tableList[i].departments[1].served_customer_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + tableList[i].departments[1].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + tableList[i].departments[1].fte + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + tableList[i].departments[1].online_user_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + tableList[i].departments[1].vacation_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + tableList[i].departments[1].displacement_to_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + tableList[i].departments[1].displacement_from_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-first="1" data-accordion="cash"><span>' + tableList[i].departments[2].ticket_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + tableList[i].departments[2].served_customer_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + tableList[i].departments[2].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + tableList[i].departments[2].fte + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + tableList[i].departments[2].online_user_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + tableList[i].departments[2].vacation_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + tableList[i].departments[2].displacement_to_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + tableList[i].departments[2].displacement_from_count + '</span></td>';
        if (tableList[i].departments[3] != undefined) {
          table += '<td style="background-color: #6c7ae0 !important;" data-first="1" data-accordion="legal"><span>' + tableList[i].departments[3].ticket_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + tableList[i].departments[3].served_customer_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + tableList[i].departments[3].waiting_customer_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + tableList[i].departments[3].fte + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + tableList[i].departments[3].online_user_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + tableList[i].departments[3].vacation_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + tableList[i].departments[3].displacement_to_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + tableList[i].departments[3].displacement_from_count + '</span></td>';
        } else {
          table += '<td style="background-color: #6c7ae0 !important;" data-first="1" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
        }
        if (tableList[i].departments[4]) {
          table += '<td style="background-color: #4450aa !important;" data-first="1" data-accordion="cash-legal"><span>' + tableList[i].departments[4].ticket_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + tableList[i].departments[4].served_customer_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + tableList[i].departments[4].waiting_customer_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + tableList[i].departments[4].fte + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + tableList[i].departments[4].online_user_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + tableList[i].departments[4].vacation_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + tableList[i].departments[4].displacement_to_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + tableList[i].departments[4].displacement_from_count + '</span></td></tr>';
        } else {
          table += '<td style="background-color: #4450aa !important;" data-first="1" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td></tr>';
        }

      }
    } else {
      if (tableList[i].departments.length > 1) {
        var maxFreeTimeArray = tableList[i].max_free_time.split(':');
        var maxFreeTimeConverted = +maxFreeTimeArray[0] * 360 + (+maxFreeTimeArray[1] * 60) + (+maxFreeTimeArray[2]);
        var maxFreeTimeColor = '';
        if (maxFreeTimeConverted > 300 && maxFreeTimeConverted < 480) {
          maxFreeTimeColor = '#969613';
        } else if (maxFreeTimeConverted > 480 && maxFreeTimeConverted < 600) {
          maxFreeTimeColor = 'orange';
        } else if (maxFreeTimeConverted > 600) {
          maxFreeTimeColor = 'red';
        }
        table += '<tr><td class="table-branch table-branch-row"><a href="/departament.html?filial=' + tableList[i].id + '" target="blank">' + tableList[i].name + '</a></td>';
        table += '<td data-first="1" data-accordion="branches"><span>' + tableList[i].ticket_count + '</span></td>';
        table += '<td data-accordion="branches"><span>' + tableList[i].served_customer_count + '</span></td>';
        table += '<td data-accordion="branches"><span>' + tableList[i].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: ' + maxFreeTimeColor + ' !important;" data-accordion="branches"><span>' + tableList[i].max_free_time + '</span></td>';
        table += '<td data-accordion="branches"><span>' + tableList[i].closed_counter_count + '</span></td>';
        table += '<td data-accordion="branches"><span>' + tableList[i].open_counter_count + '</span></td>';
        table += '<td data-accordion="branches"><span>' + tableList[i].free_user_count + '</span></td>';
        table += '<td data-first="1" data-accordion="services"><span>' + tableList[i].departments[0].ticket_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + tableList[i].departments[0].served_customer_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + tableList[i].departments[0].waiting_customer_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + tableList[i].departments[0].fte + '</span></td>';
        table += '<td data-accordion="services"><span>' + tableList[i].departments[0].online_user_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + tableList[i].departments[0].vacation_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + tableList[i].departments[0].displacement_to_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + tableList[i].departments[0].displacement_from_count + '</span></td>';
        table += '<td data-first="1" data-accordion="sales"><span>' + tableList[i].departments[1].ticket_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + tableList[i].departments[1].served_customer_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + tableList[i].departments[1].waiting_customer_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + tableList[i].departments[1].fte + '</span></td>';
        table += '<td data-accordion="sales"><span>' + tableList[i].departments[1].online_user_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + tableList[i].departments[1].vacation_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + tableList[i].departments[1].displacement_to_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + tableList[i].departments[1].displacement_from_count + '</span></td>';
        table += '<td data-first="1" data-accordion="cash"><span>' + tableList[i].departments[2].ticket_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + tableList[i].departments[2].served_customer_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + tableList[i].departments[2].waiting_customer_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + tableList[i].departments[2].fte + '</span></td>';
        table += '<td data-accordion="cash"><span>' + tableList[i].departments[2].online_user_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + tableList[i].departments[2].vacation_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + tableList[i].departments[2].displacement_to_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + tableList[i].departments[2].displacement_from_count + '</span></td>';
        if (tableList[i].departments[3] != undefined) {
          table += '<td data-first="1" data-accordion="legal"><span>' + tableList[i].departments[3].ticket_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + tableList[i].departments[3].served_customer_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + tableList[i].departments[3].waiting_customer_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + tableList[i].departments[3].fte + '</span></td>';
          table += '<td data-accordion="legal"><span>' + tableList[i].departments[3].online_user_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + tableList[i].departments[3].vacation_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + tableList[i].departments[3].displacement_to_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + tableList[i].departments[3].displacement_from_count + '</span></td>';
        } else {
          table += '<td data-first="1" data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
        }
        if (tableList[i].departments[4]) {
          table += '<td data-first="1" data-accordion="cash-legal"><span>' + tableList[i].departments[4].ticket_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + tableList[i].departments[4].served_customer_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + tableList[i].departments[4].waiting_customer_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + tableList[i].departments[4].fte + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + tableList[i].departments[4].online_user_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + tableList[i].departments[4].vacation_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + tableList[i].departments[4].displacement_to_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + tableList[i].departments[4].displacement_from_count + '</span></td></tr>';
        } else {
          table += '<td data-first="1" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td></tr>';
        }

      }
    }
  }
  $('#mainTable_tbody').html(table);
  paginationLock = false;
}

function drowSearchTable(searchList) {

  var table = '';
  for (var i = 0; i < searchList.length; i++) {
    if (i % 2 !== 0) {
      if (searchList[i].departments.length > 1) {
        var maxFreeTimeArray = searchList[i].max_free_time.split(':');
        var maxFreeTimeConverted = +maxFreeTimeArray[0] * 360 + (+maxFreeTimeArray[1] * 60) + (+maxFreeTimeArray[2]);
        var maxFreeTimeColor = '#6c7ae0';
        if (maxFreeTimeConverted > 300 && maxFreeTimeConverted < 480) {
          maxFreeTimeColor = '#969613';
        } else if (maxFreeTimeConverted > 480 && maxFreeTimeConverted < 600) {
          maxFreeTimeColor = 'orange';
        } else if (maxFreeTimeConverted > 600) {
          maxFreeTimeColor = 'red';
        }
        table += '<tr><td class="table-branch table-branch-row"><a href="/departament.html?filial=' + searchList[i].id + '" target="blank">' + searchList[i].name + '</a></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-first="1" data-accordion="branches"><span>' + searchList[i].ticket_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + searchList[i].served_customer_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + searchList[i].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: ' + maxFreeTimeColor + ' !important;" data-accordion="branches"><span>' + searchList[i].max_free_time + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + searchList[i].closed_counter_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + searchList[i].open_counter_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="branches"><span>' + searchList[i].free_user_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-first="1" data-accordion="services"><span>' + searchList[i].departments[0].ticket_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + searchList[i].departments[0].served_customer_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + searchList[i].departments[0].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + searchList[i].departments[0].fte + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + searchList[i].departments[0].online_user_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + searchList[i].departments[0].vacation_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + searchList[i].departments[0].displacement_to_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="services"><span>' + searchList[i].departments[0].displacement_from_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-first="1" data-accordion="sales"><span>' + searchList[i].departments[1].ticket_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + searchList[i].departments[1].served_customer_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + searchList[i].departments[1].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + searchList[i].departments[1].fte + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + searchList[i].departments[1].online_user_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + searchList[i].departments[1].vacation_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + searchList[i].departments[1].displacement_to_count + '</span></td>';
        table += '<td style="background-color: #6c7ae0 !important;" data-accordion="sales"><span>' + searchList[i].departments[1].displacement_from_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-first="1" data-accordion="cash"><span>' + searchList[i].departments[2].ticket_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + searchList[i].departments[2].served_customer_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + searchList[i].departments[2].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + searchList[i].departments[2].fte + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + searchList[i].departments[2].online_user_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + searchList[i].departments[2].vacation_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + searchList[i].departments[2].displacement_to_count + '</span></td>';
        table += '<td style="background-color: #4450aa !important;" data-accordion="cash"><span>' + searchList[i].departments[2].displacement_from_count + '</span></td>';
        if (searchList[i].departments[3] != undefined) {
          table += '<td style="background-color: #6c7ae0 !important;" data-first="1" data-accordion="legal"><span>' + searchList[i].departments[3].ticket_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + searchList[i].departments[3].served_customer_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + searchList[i].departments[3].waiting_customer_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + searchList[i].departments[3].fte + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + searchList[i].departments[3].online_user_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + searchList[i].departments[3].vacation_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + searchList[i].departments[3].displacement_to_count + '</span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span>' + searchList[i].departments[3].displacement_from_count + '</span></td>';
        } else {
          table += '<td style="background-color: #6c7ae0 !important;" data-first="1" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
          table += '<td style="background-color: #6c7ae0 !important;" data-accordion="legal"><span> ---- </span></td>';
        }
        if (searchList[i].departments[4]) {
          table += '<td style="background-color: #4450aa !important;" data-first="1" data-accordion="cash-legal"><span>' + searchList[i].departments[4].ticket_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + searchList[i].departments[4].served_customer_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + searchList[i].departments[4].waiting_customer_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + searchList[i].departments[4].fte + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + searchList[i].departments[4].online_user_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + searchList[i].departments[4].vacation_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + searchList[i].departments[4].displacement_to_count + '</span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span>' + searchList[i].departments[4].displacement_from_count + '</span></td></tr>';
        } else {
          table += '<td style="background-color: #4450aa !important;" data-first="1" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td style="background-color: #4450aa !important;" data-accordion="cash-legal"><span> ---- </span></td></tr>';
        }

      }
    } else {
      if (searchList[i].departments.length > 1) {
        var maxFreeTimeArray = searchList[i].max_free_time.split(':');
        var maxFreeTimeConverted = +maxFreeTimeArray[0] * 360 + (+maxFreeTimeArray[1] * 60) + (+maxFreeTimeArray[2]);
        var maxFreeTimeColor = '';
        if (maxFreeTimeConverted > 300 && maxFreeTimeConverted < 480) {
          maxFreeTimeColor = '#969613';
        } else if (maxFreeTimeConverted > 480 && maxFreeTimeConverted < 600) {
          maxFreeTimeColor = 'orange';
        } else if (maxFreeTimeConverted > 600) {
          maxFreeTimeColor = 'red';
        }
        table += '<tr><td class="table-branch table-branch-row"><a href="/departament.html?filial=' + searchList[i].id + '" target="blank">' + searchList[i].name + '</a></td>';
        table += '<td data-first="1" data-accordion="branches"><span>' + searchList[i].ticket_count + '</span></td>';
        table += '<td data-accordion="branches"><span>' + searchList[i].served_customer_count + '</span></td>';
        table += '<td data-accordion="branches"><span>' + searchList[i].waiting_customer_count + '</span></td>';
        table += '<td style="background-color: ' + maxFreeTimeColor + ' !important;" data-accordion="branches"><span>' + searchList[i].max_free_time + '</span></td>';
        table += '<td data-accordion="branches"><span>' + searchList[i].closed_counter_count + '</span></td>';
        table += '<td data-accordion="branches"><span>' + searchList[i].open_counter_count + '</span></td>';
        table += '<td data-accordion="branches"><span>' + searchList[i].free_user_count + '</span></td>';
        table += '<td data-first="1" data-accordion="services"><span>' + searchList[i].departments[0].ticket_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + searchList[i].departments[0].served_customer_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + searchList[i].departments[0].waiting_customer_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + searchList[i].departments[0].fte + '</span></td>';
        table += '<td data-accordion="services"><span>' + searchList[i].departments[0].online_user_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + searchList[i].departments[0].vacation_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + searchList[i].departments[0].displacement_to_count + '</span></td>';
        table += '<td data-accordion="services"><span>' + searchList[i].departments[0].displacement_from_count + '</span></td>';
        table += '<td data-first="1" data-accordion="sales"><span>' + searchList[i].departments[1].ticket_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + searchList[i].departments[1].served_customer_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + searchList[i].departments[1].waiting_customer_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + searchList[i].departments[1].fte + '</span></td>';
        table += '<td data-accordion="sales"><span>' + searchList[i].departments[1].online_user_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + searchList[i].departments[1].vacation_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + searchList[i].departments[1].displacement_to_count + '</span></td>';
        table += '<td data-accordion="sales"><span>' + searchList[i].departments[1].displacement_from_count + '</span></td>';
        table += '<td data-first="1" data-accordion="cash"><span>' + searchList[i].departments[2].ticket_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + searchList[i].departments[2].served_customer_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + searchList[i].departments[2].waiting_customer_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + searchList[i].departments[2].fte + '</span></td>';
        table += '<td data-accordion="cash"><span>' + searchList[i].departments[2].online_user_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + searchList[i].departments[2].vacation_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + searchList[i].departments[2].displacement_to_count + '</span></td>';
        table += '<td data-accordion="cash"><span>' + searchList[i].departments[2].displacement_from_count + '</span></td>';
        if (searchList[i].departments[3] != undefined) {
          table += '<td data-first="1" data-accordion="legal"><span>' + searchList[i].departments[3].ticket_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + searchList[i].departments[3].served_customer_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + searchList[i].departments[3].waiting_customer_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + searchList[i].departments[3].fte + '</span></td>';
          table += '<td data-accordion="legal"><span>' + searchList[i].departments[3].online_user_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + searchList[i].departments[3].vacation_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + searchList[i].departments[3].displacement_to_count + '</span></td>';
          table += '<td data-accordion="legal"><span>' + searchList[i].departments[3].displacement_from_count + '</span></td>';
        } else {
          table += '<td data-first="1" data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
          table += '<td data-accordion="legal"><span> ---- </span></td>';
        }
        if (searchList[i].departments[4]) {
          table += '<td data-first="1" data-accordion="cash-legal"><span>' + searchList[i].departments[4].ticket_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + searchList[i].departments[4].served_customer_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + searchList[i].departments[4].waiting_customer_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + searchList[i].departments[4].fte + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + searchList[i].departments[4].online_user_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + searchList[i].departments[4].vacation_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + searchList[i].departments[4].displacement_to_count + '</span></td>';
          table += '<td data-accordion="cash-legal"><span>' + searchList[i].departments[4].displacement_from_count + '</span></td></tr>';
        } else {
          table += '<td data-first="1" data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td>';
          table += '<td data-accordion="cash-legal"><span> ---- </span></td></tr>';
        }

      }
    }
  }
  $('#search-body').html(table);
}

function drowPagination() {

  var paginationTemplate = '';
  if (listShowCount == 0) {
    paginationTemplate += '<div data-pagination="' + 1 + '" class="pagination-item pagination-active">' + 1 + '</div>'
    $(".pagination").html(paginationTemplate)
    return null
  }
  var paginationCountCheck = listAllItemCount % listShowCount;
  if (paginationCountCheck !== 0) {
    paginationCount = Math.ceil(listAllItemCount / listShowCount);
  } else {
    paginationCount = listAllItemCount / listShowCount;
  }

  for (var i = 1; i < paginationCount + 1; i++) {

    var pagClass = i == 1 ? 'pagination-item pagination-active' : 'pagination-item';
    paginationTemplate += '<div data-pagination="' + i + '" class="' + pagClass + '">' + i + '</div>';

  }

  $(".pagination").html(paginationTemplate)

}


/**
  table functions END
*/


/**
 *  listShowCount = 3, // Count of list item, how many item from table must be shown
    paginationCount, // Count of Pagination (how many pagination button must be)
    paginationStep, // Step of pagination, number of table list
    startToShow = 1; // First number from which table items must be shown
 */

function getTableData(inputVal) {
  if (tableTimer) {
    clearTimeout(tableTimer);
  }


  if (!searchEneble) {
    $('.map-preloader').show();
    
    $.ajax({
      url: heatmap_url + '/get_branches_data/',
      type: 'POST',
      data: {
        limit: listShowCount,
        offset: listShowCount * paginationStep,
        search: ''
      },


      success: function (data, textStatus, xhr) {

        newDrowTable(data.branches);
        $('.map-preloader').hide();
        // drowPagination();
        for (var i = 0; i < closeTabs.length; i++) {

          $(".table td[data-accordion=" + closeTabs[i] + "]").hide();
          $(".table td[data-accordion=" + closeTabs[i] + "][data-first=1]").slice(2).after('<td class="fake" data-fake="' + closeTabs[i] + '" style=""></td>');

        }
        $(".kapital-preloader").hide();
        tableTimer = setTimeout(function () {
          getTableData();
        }, 10000);

      },

      complete: function (textStatus, xhr) {

        if (textStatus.status !== 200) {
          alert('API is problem!')
        }

      }

    });

    
  } else {

    if (inputVal.length > 0) {

      $.ajax({
        url: heatmap_url + '/get_branches_data/',
        type: 'POST',
        data: {
          limit: 200,
          offset: 0,
          search: inputVal
        },
        success: function (data) {
          newDrowTableData = data.branches;
          if (data.branches.length < 1) {

            $("#table").hide();

          } else {

            $("#table").show();
            newDrowTable(data.branches);

          }

          

        }
      });
    }
    if (inputVal.length < 1) {

      searchEneble = false;
      getTableData();

    }

  }

}

getTableData();

// table tabs
var tabletabsCount = 6;

$(".accordion-head").click(function () {

  if (tabletabsCount > 1) {

    --tabletabsCount;
    var dataAcc = $(this).attr('data-accordion');
    closeTabs.push(dataAcc);
    $(".table td[data-accordion=" + dataAcc + "]").hide();
    var colName = $(".table td[data-accordion=" + dataAcc + "][data-first=1]").eq(0).html()
    $(".table td[data-accordion=" + dataAcc + "][data-first=1]").eq(0).after('<td rowspan="2" class="fake" data-fake="' + dataAcc + '" style="background:#bf2127 !important; padding: 0; font-size: 12px;"></td>');
    $(".table td[data-accordion=" + dataAcc + "][data-first=1]").eq(0).siblings('.fake[data-fake=' + dataAcc + ']').html('<div style="transform: rotate(-90deg); transform-origin: center;">' + colName + '</div>');
    $(".table td[data-accordion=" + dataAcc + "][data-first=1]").slice(2).after('<td class="fake" data-fake="' + dataAcc + '" style=""></td>');

  } else {

    return false;

  }

});

$('.table').on('click', '.fake', function () {

  ++tabletabsCount;
  var fakeCase = $(this).attr('data-fake');
  $(".table td[data-accordion=" + fakeCase + "]").show();
  $('.fake[data-fake="' + fakeCase + '"]').remove();
  var index = closeTabs.indexOf(fakeCase);
  if (index !== -1) closeTabs.splice(index, 1);

});

$("#listShowCount").click(function () {
  $(".listShowCount-list").toggleClass('d-flex');
});



$(".table-panel").on('click', '.pagination-item', function () {
  if(paginationLock) {
    return false;
  } else {
    paginationLock = true;
    $('.pagination-item').removeClass('pagination-active');
    $(this).addClass('pagination-active');
    paginationStep = $(this).attr('data-pagination') - 1;
    getTableData();
  }
  

});

// Tooltips

tippy('.mft', {
  content: "Max free time"
});

tippy('.fte', {
  content: "FTE?"
});

tippy('.csp', {
  content: "Closed service points"
});

tippy('.osp', {
  content: "Open servis points"
});

tippy('.ou', {
  content: "Online user"
});

tippy('.TV', {
  content: "Total visits"
});

tippy('.uic', {
  content: " Idle users count"
});


/**
* Search
*/
$("#search").on('input', function (e) {
    
  var inputValue = $(this).val();
  if(inputValue.length > 0) {

    $(".table-wrap-list").hide();
    $(".table-wrap-search").show();
    $.ajax({
      url: heatmap_url + '/get_branches_data/',
      type: 'POST',
      data: {
        limit: 200,
        offset: 0,
        search: inputValue
      },
      success: function (data) {
      console.log("TCL: data", data)
      drowSearchTable(data.branches);
      }
    });
  } else {
    $(".table-wrap-list").show();
    $(".table-wrap-search").hide();
  }
  

})




$("#search").focusin(function () {

  searchEneble = true;

})

$("#search").focusout(function () {

  searchEneble = false;
  getTableData();

})


});