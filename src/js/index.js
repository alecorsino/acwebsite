
require('animate.css/animate.css');
require('magnific-popup/dist/magnific-popup.css');
var popup = require('magnific-popup/dist/jquery.magnific-popup.js');

$('#index').hide();
setImagesRows();

function setImagesRows(){
  $('.pic-row').each(function(){
    var ratios = 0;
    $(this).children().each(function(){
      ratios += getImgRatio($(this));
    });
    var h= $(document).width()*0.93/ratios ;
    $(this).height(h);
  });
};

function getImgRatio(e){
  return e[0].naturalWidth / e[0].naturalHeight;
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
  }, 2000);
});
