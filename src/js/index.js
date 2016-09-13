// var jq = require('jquery');

$(function(){
   require('animate.css/animate.css');
  // var logger = new (require('./util/Logger'))();

  // logger.debug('Page ready!');
  // var Vivus = require('vivus');
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

  $( window ).resize(function() {
    setImagesRows(); //TODO throttle
  });

});
