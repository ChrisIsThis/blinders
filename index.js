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

});
function clickHide() {
  var stepArr = ["#stepOne","#stepTwo","#stepThree","#stepFour","#stepFive"];
  var stepLongArr = ["#stepLongOne","#stepLongTwo","#stepLongThree","#stepLongFour","#stepLongFive"];

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
