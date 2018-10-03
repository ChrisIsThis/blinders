// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 8000,
  });
  $("#button1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#demo").offset().top
    }, 1000);
  });
  $("#button2").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#action").offset().top
    }, 2000)
  });
  // animateVisible();
});

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };


  // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
  }

})(jQuery);

function animateVisible() {
  var cssClasses = [
    ["come-in-right"],
    ["come-in-down"],
    ["come-in-up"],
    ["come-in-left"],
    ["come-in-right", "come-in-down"],
    ["come-in-left", "come-in-down"],
    ["come-in-right", "come-in-up"],
    ["come-in-left", "come-in-up"]
  ];
  [
    '.container',
    '.col-sm-3',
    '.btn',
    '.text-center',
    '.feature-detail'
  ].forEach(function(element) {
    $(element).each(function(i, el) {
        var el = $(el);
        // console.log(el.attr('class'));
        if (el.visible(true) && !el.attr('class').includes('come-in')) {
          var classes = cssClasses.randomElement();
          console.log(classes);
          classes.map((cls) => {el.addClass(cls);});
        }
    })
  });
}

$(window).scroll(function(event) {
  animateVisible();
});

function clickHide() {
  var stepArr = ["#stepOne","#stepTwo","#stepThree","#stepFour"];
  var stepLongArr = ["#stepLongOne","#stepLongTwo","#stepLongThree","#stepLongFour"];

  var x = "#" + event.target.id;
  var i;
  for(i=0;i<stepArr.length;i++){
    console.log(stepArr[i]);
    if(stepArr[i] === x){
      console.log('in the if statement');
      $(x).addClass("active-li");
      $(stepLongArr[i]).addClass("display-long")
      $(stepLongArr[i]).removeClass("display-hide");
    }
    else {
      $(stepArr[i]).removeClass("active-li");
      $(stepLongArr[i]).removeClass("display-long");
      $(stepLongArr[i]).addClass("display-hide");
    }
  }
}
$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('#demo').offset().top }, 'slow');
     return false;
   });
 });
