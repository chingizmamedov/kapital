$(function() {


  /**
   * Global vars
   */
    var allFilials = [
      {
        "filialX": 480,
        "filialY": 128,
        "filialName": "Ordek filiali"
      },
      {
        "filialX": 443,
        "filialY": 256,
        "filialName": "Hindushka filiali"
      },
      {
        "filialX": 584,
        "filialY": 341,
        "filialName": "CocaCola filiali"
      },
      {
        "filialX": 283,
        "filialY": 261,
        "filialName": "Fanta filiali"
      },
      {
        "filialX": 302,
        "filialY": 425,
        "filialName": "Dudo"
      }
    ]
  /**
   * SVG
   */
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

   /**
   * SVG
   */

  $("#baki").click(function() {
    $(this).parent().hide('slow')
    $("#map-baki").addClass("map-baki-shown")
    $(".btn-back").addClass('btn-back-shown')
  })

  $(".btn-back").click(function() {
    $(this).removeClass("btn-back-shown")
    $("#baki").parent().show('slow')
    $("#map-baki").removeClass("map-baki-shown")
  })

  $('#baki').mouseover(function() {
    
    
    $(this).css('fill', 'red')
  })
  $('#baki').mouseout(function() {
    
    
    $(this).css('fill', '#CBE0BA')
  })
  
  for( var i = 0; i < allFilials.length;i++) {
    console.log('s')
    var
    svgP = svgPoint(svg, allFilials[i].filialX, allFilials[i].filialY),
    circle = document.createElementNS(NS, 'circle')
    circle.setAttribute('data-filial', allFilials[i].filialName)
    circle.setAttributeNS(null, 'cx', allFilials[i].filialX);
    circle.setAttributeNS(null, 'cy', allFilials[i].filialY);
    circle.setAttributeNS(null, 'r', 2);
    circle.classList.add('circle');
    svg.appendChild(circle);
    console.log('d')

  }

  $description = $(".tooltip");

  $('.circle').mouseover(function() {
    
    
    $description.addClass('tooltip-shown');

    $description.html($(this).attr('data-filial'));

    

  })
  $('.circle').mouseout(function() {
    
    $description.removeClass('tooltip-shown');
    $description.html($(this).attr('data-filial'));

  })

 

  $(document).on('mousemove', function(e){
    
    $description.css({
      left:  e.pageX,
      top:   e.pageY - 40
    });
    
  })

  // serach

  $("#search").change(function() {

    allFilials = allFilials.map(function(item, index) {

      

    })

  })


  
})