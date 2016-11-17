
require('animate.css/animate.css');
require('magnific-popup/dist/magnific-popup.css');
var popup = require('magnific-popup/dist/jquery.magnific-popup.js');
var imgGutter = 5; //match this value with $image-gutter Styles imgages gutter

$('#index').hide();
setImagesRows();

function setImagesRows(){
  var screenWidth = $(document).width();
  screenWidth = (screenWidth < 1280)? screenWidth : 1280;

  $('.pic-row').each(function(){
    var ratios = 0;
    $(this).find('img').each(function(){
      ratios += getImgRatio($(this));
    });
    var h = screenWidth * .93/ratios ;
    $(this).height(h - imgGutter);
  });
};

function getImgRatio(e){
  return (e[0].naturalWidth + imgGutter)/ (e[0].naturalHeight);
};

function enablePopUp() {
    $(function(){
      $('.pic-holder').magnificPopup({
        delegate: 'img', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
      });
    });
};

enablePopUp();

$(window).resize(function() {
  setImagesRows(); //TODO throttle
});

$(window).on('load',function () {
  setImagesRows();
  setTimeout(function(){
    $('#loading').hide();
    $('#index').show();
  }, 1000);
});
