
  var pagePrepend = '';


$(window).scroll(function(){
    if ($(window).scrollTop() >= 0) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});

function alignItems() {
  figure = parseInt($('.website').css('width'), 10);
  pic = parseInt($('.design-img').css('width'), 10);
  finalWidth = String((figure - pic) / 2) + 'px';
  $('.website-title').css('margin-left', finalWidth);
  $('.website-description').css('margin-left', finalWidth);
  $('.website-description').css('margin-right', finalWidth);
}

function disableAndEnableImgs(mode) {
  if (mode == 'disable') {
    $('figcaption').removeClass('figcaption-cls')
    $('img').removeClass('img-cls')
  }
  else {
    $('figcaption').addClass('figcaption-cls')
    $('img').addClass('img-cls')
  }
}

$(document).ready(function() {
  alignItems();
});

$(window).resize(function() {
  alignItems();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    $('#open-button').css("display", 'none');
    $('#close-button').css("display", 'block');
    $('#header-description').css("display", 'none');
    disableAndEnableImgs('disable');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('#open-button').css("display", 'block');
    $('#close-button').css("display", 'none');
    $('#header-description').css("display", 'block');
    disableAndEnableImgs('enable');
}


Vue.component('banner', {
  template: `<div id='index-header' class='header-strip'>
    <span id="header-info">
      
      <span id='header-description'>
        
        <a v-for="page in designPage" v-bind:href='page.url'>{{ page.label }} </a> - 
        <a v-for="page in developerPage" v-bind:href='page.url'>{{ page.label }} </a> 
      </span>
    </span>
    <i id="open-button" class="menu-icon fa fa-bars fa-2x" aria-hidden="true" onclick="openNav()"></i>
    <i id="close-button" class="menu-icon fa fa-times fa-2x" aria-hidden="true" onclick="closeNav()"></i>
  </div>
  `,
  data: function () {
    var data = {

      designPage: [
        { label: 'FutureByDesign', url: pagePrepend + 'design.html' },
      ],
      developerPage: [
        { label: 'Developer', url: pagePrepend + 'development.html' },
      ],
      indexPage: [
        { },
      ]
    };
    return data;
  },
});

new Vue({
  el: '#my-projects',
  data: {
    projects: [
        { title: 'parking-app', url: 'https://github.com/aq13579/parking-app', description: 'Full stack app. A parking App for drivers to search for available parking space in NY and vendors to post listings'},
      { title: 'count-ascii-freq', url: 'https://github.com/aq13579/count-ascii-freq', description: 'C, C++ to read file and count ASCII frequency' },
      { title: 'tic-tac-toe-game-app', url: 'https://github.com/aq13579/tic-tac-toe-game-app#tic-tac-toe-game-app', description: 'Javascript built tic tac toe game app'},
      { title: 'album-autoplay-app', url: 'https://github.com/aq13579/album-autoplay-app', description: 'App to play your photo album and personalize it'},
       ]
  }
});

new Vue({
  el: '#my-websites',
  data: {
    websites: [

      { title: 'ADI', img: 'img/designs/gimmeCookie.jpg', demo: 'https://adicu.com/',  description: 'Meet up with fellow coders to discuss projects and entreprenuer ideas, develop apps, built website from scratch for student organization and clubs on campus. And eat cookies' },
      { title: '3D Animation', img: 'img/designs/blueskystudio.png', demo: 'http://blueskystudios.com/',  description: 'Visited Blue Sky Studio to learn about 3D animation,Use Autodesk to design interior and  how they sculpture character, then use software to animate, tried out their 3D theatre on their new film "Ice Age 2"' },
      { title: 'RoboCup', img: 'img/designs/robocup.png', demo: 'https://2019.robocup.org//',  description: 'Built robots that could navigate a maze with 2 floors, competed in Rescue challenge in the Robocup Invitations' },
      { title: 'Eindhoven Panel Presentation', img: 'img/designs/eindhoven.png', demo: 'https://2019.robocup.org//', description: 'Presentation at Eindhoven University on machine learning and artificial intelligence and sensors' },
      { title: 'Food Bank for NYC', img: 'img/designs/foodbank.png', demo: 'https://volunteer.foodbanknyc.org/',  description: 'Volunteer at non-profit to provide food for kids and family in need' },
    ]
  }
});



new Vue({
  el: '#header'
});

if (!isIndex()) {
  $('#header-info').css("display", "block");
}
else {
  $('#header-info').css("display", "none");
}