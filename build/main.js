// (function() {
//   var $ = require('jquery');
//   var msj = "<p>This is an example with jQuery</p>";
//   $('#inicio').append(msj);
// })();

(function() {
  var $ = require('jquery');
  // changeHeight('.tabla-contenido');
  changeHeight('#2016 .tabla-contenido');
  changeHeight('#2015 .tabla-contenido');
  changeHeight('#2014 .tabla-contenido');
  changeHeight('#integrantes .tabla-contenido');

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

  function changeHeight(element) {
    let $el = $(element);
    let maxHeight = 0;

    for (let i = 0; i < $el.length; i++) {
      let height = Number($($el[i]).css('height').split('px')[0]);
      maxHeight = Math.max(maxHeight, height);
    }

    for (let i = 0; i < $el.length; i++) {
      $($el[i]).css('height', `${maxHeight}px`);
    }
  }

  // json
  const json = require('../data/data.json');
  // alert(json["member"][0].name);
  // alert(json["contest"][0].teams[0]);
  members = json["member"];

  //sort
  function sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  members = sortByKey(members, 'name');
  // alert(members[0].name);
  // members.sort();
  for (var i = 0; i< members.length; i++) {
    alert(members[i].name);
  }


})();
