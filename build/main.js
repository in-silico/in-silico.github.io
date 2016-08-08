// (function() {
//   var $ = require('jquery');
//   var msj = "<p>This is an example with jQuery</p>";
//   $('#inicio').append(msj);
// })();

(function() {
  var $ = require('jquery');
  $('.group').click(function() {
    // alert("hola");
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

  $(".scroll").mouseenter(function () {
    var id = "#nav-" + $(this).attr('id');
    $('.active').removeClass('active');
    $(id).addClass('active');

    if (id == "#nav-inicio") {
      $(".navbar").css( 'display', 'none');
    }
    else {
      $(".navbar").css('display', 'initial');
    }
    // if (id == "#nav-inicio") $(".navbar a, .banner a").css('background', 'rgba(0, 0, 0, 0.5)');
    // else $(".navbar a, .banner a").css('background', '#444');
  });

  $('a[href^="#"]').on('click', function(ev) {
    var target = $(this.getAttribute('href'));
    if(typeof target !== "undefined") {
      ev.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
})();
