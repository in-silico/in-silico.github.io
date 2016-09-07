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
  let members = json["member"];

  //sort
  function sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  members = sortByKey(members, 'name');

  let div_members = document.getElementById("integrantes");
  let content = `<div class="contenido"><div class="row">`;


  for (var i = 0; i< members.length; i++) {
    let {photo, state} = members[i];
    if (!photo.localeCompare("")) photo = "profile.png";
    if (state.localeCompare("inactive")) state = "";

    content += `
    <div class="col-2">
      <div class="tabla-contenido-img ${state}">
        <img src="/assets/img/${photo}"/>
      </div>
      <div class="tabla-contenido ${state}">
        ${members[i].name}
      </div>
    </div>`
  }

  div_members.innerHTML = `${content}</div></div>`;

  //Contest
  let teams = json["team"];
  let contest = json["contest"];
  //Search team
  let found;

  function getTeam(id) {
    for (let i = 0; i < teams.length; i++) {
      // alert(teams[i].id);
      if (teams[i].id == id) found = teams[i];
    }
  }
  //Search Member
  function getMember(id) {
    for (let i = 0; i < members.length; i++) {
      // alert(teams[i].id);
      if (members[i].id == id) found = members[i];
    }
  }

  // getTeam(3);
  // alert(found.name);

  let div_teams = document.getElementById("seleccion-utp");
  div_teams.innerHTML +=
  "<div class=\"contenido\">"

  for (let i = 0; i < contest.length; i++) {
    let year = contest[i].year;
    div_teams.innerHTML +=
    "<div class=\"row\" id=\"" + year + "\">" +
      "<h2>" + year + "</h2>"

    let team = contest[i].teams;

    for (let j = 0; j < team.length; j++) {
      let a_team = team[j];
      getTeam(a_team);
      let name_team = found.name;
      let members_team = found.members;
      alert(name_team);
      div_teams.innerHTML +=
      "<div class=\"col-6 center\">" + name_team
      for (let k = 0; k < members_team.length; k++) {
        let a_member = members_team[k];
        getMember(a_member);
        // alert(found.name);
        let name = found.name;
        alert(name);
        let photo = found.photo;
        if (!photo.localeCompare("")) photo = "profile.png";

        div_teams.innerHTML +=
        "<div class=\"col-2\">" +
          "<div class=\"tabla-contenido-img\">" +
            "<img src=\"/assets/img/" + photo + "\" />" +
          "</div>" +
          "<div class=\"tabla-contenido\">" +
             name +
          "</div>" +
        "</div>"
      }

      div_teams.innerHTML +=
      "</div>"
    }
    div_teams.innerHTML +=
    "<div class=\"col-6 center\"> Coach"


    div_teams.innerHTML +=
    "</div> </div>"


  }

  div_teams.innerHTML +=
  "</div>"


  changeHeight('#2016 .tabla-contenido');
  changeHeight('#2015 .tabla-contenido');
  changeHeight('#2014 .tabla-contenido');
  changeHeight('#integrantes .tabla-contenido');
})();
