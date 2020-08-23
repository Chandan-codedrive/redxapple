//swiper slide start
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  
//swiper slide end
//barfilar start

    $('#bar1,#bar2,#bar3').barfiller({

            // color of bar
            barColor: 'red',

            // shows a tooltip
            tooltip: false,

            // duration in ms
            duration: 3000,

            // re-animate on resize
            animateOnResize: true,

            // custom symbol
            symbol: "%"

            });

//barfilar end

//jssr slider start
jQuery(document).ready(function ($) {

  var jssor_1_SlideoTransitions = [
    [{b:0,d:1860,o:0.6}],
    [{b:860,d:1000,y:91,sX:2,sY:2}],
    [{b:100,d:760,x:906}],
    [{b:0,d:1860,o:0.6}],
    [{b:0,d:1000,x:1420}],
    [{b:1000,d:1400,y:78,sX:2.2,sY:2.2}],
    [{b:0,d:2000,o:0.4}],
    [{b:980,d:1020,x:300,y:76,sX:2,sY:2}],
    [{b:1600,d:380,o:1}]
  ];

  var jssor_1_options = {
    $AutoPlay: 1,
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlideo$,
      $Transitions: jssor_1_SlideoTransitions
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 16,
      $SpacingY: 16
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 1920;

  function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

          var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

          jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }

  ScaleSlider();

  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
});
//jssr slider end

$('#jssor_1').waypoint(function(direction){
  if (direction == "down"){
    $("#navbar1").addClass(sticky10);
  } else {
    $("#navbar1").removeClass(sticky10);
  }
});
//stciky bar start
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//sticky bar end

//hc off canvas
    jQuery(document).ready(function($) {
        $('#main-nav').hcOffcanvasNav({
          disableAt: 640
        });
    });
