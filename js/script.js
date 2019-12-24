
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
        { title: 'DeepFake Detection -- Identifying fake faces in video', url: 'https://github.com/aq13579/count-ascii-freq', description:
        'Using TensorFlow to identify DeepFake, which uses deep learning technology like Deep Artificial Neural Networks to put faces of someone else onto the person in the image or video. ' +
        'The resulting fake content is usually very convincing, it could easily jeopardize media integrity. Therefore detecting DeepFake is essential. I have done using TensorFlow, ' +
        'Kera API to build a Neural Network model in classifying fashion objects using Kaggle Fashion MNIST dataset; Similar techniques could be applied here and build upon. ' +
        'Screening images as training datasets for development and validation is key to building effective ML models ' },

        { title: 'Predicting Housing Prices', url: 'https://github.com/aq13579/count-ascii-freq', description: 'Given columns like LotArea, YearBuilt' +
        '1stFloorSF, FullBath, roomsAboveGround...' +
        'The key is to use all columns as features, and XGBoost model performs better than Random Forest or decision tree ' + '' },


        { title: 'Medical Image Classification and AI Application in Healthcare', url: 'https://github.com/aq13579/count-ascii-freq', description: 'Leveraging ML models helps doctors diagnose diseases like diabetic eye disease and metastatic cancer. ' +
      'The research follows these steps. Problem Selection, Data Collection, ML Development, Validation, Assessment of Impact, Deployment and Monitoring. Researchers in the paper discussed the many challenges in developing ML model out ' +
        'of screening patient images, and emphasized the importance of working closely with clinical experts. For instance, adjusting validation matrix depending on patients demographics, continuing monitoring of ' +
        'unexpected error in real uses. Applying ML to diagnosis helps a reduction in false negatives in treatment; higher review speed, ' +
        'and a reduction in false negatives in treatment.' },

      { title: 'Using AI to predict flight delay in airports around the world', url: 'https://github.com/aq13579/count-ascii-freq', description: 'Trained machine-learning models to predict flight delay based on featured like destinations, ' +
      'departures, and airline companies. Use basic models like logistic regression, '},
      { title: 'Translation between Spanish and English', url: 'https://www.tensorflow.org/tutorials/text/nmt_with_attention', description: 'Used TensorFlow and Trained sequence-to-sequence models to translate between Spanish and English'},
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