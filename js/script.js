
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



new Vue({
  el: '#my-projects',
  data: {
    projects: [
        {title: 'Predicting Housing Prices', url: 'https://github.com/aq13579/count-ascii-freq', description: 'Given columns like LotArea, YearBuilt' +
        '1stFloorSF, FullBath, roomsAboveGround...' +
        'The key is to use all columns as features, and XGBoost model performs better than Random Forest or decision tree ' + '' },

        {title: 'Optimizing Scheduling and Associated Costs', url: 'https://www.kaggle.com/c/santa-workshop-tour-2019/overview/evaluation', description:
        'Use python to build a model minimizing the costs associated with the work shop ' + '' },


        { title: 'Identify Fashion Pics', url: 'https://www.tensorflow.org/tutorials/text/nmt_with_attention', description:
            'Used TensorFlow to see whether its a shoe or a shirt. '},

        { title: 'Translation Between Spanish and English', url: 'https://www.tensorflow.org/tutorials/text/nmt_with_attention', description: 'Used TensorFlow and Trained sequence-to-sequence models to translate between Spanish and English'},
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