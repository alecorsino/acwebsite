
var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesLoaded');
var options = {
  itemSelector: '.pic',
  // columnWidth: '.grid-sizer',
  // columnWidth: 220,
  // percentPosition: true,
  // gutter:0
};
var grid = new Masonry('.grid',options);

function init(){
  imagesLoaded('.grid', function() {
      grid.layout()
  });
}

module.exports = {
  init:init
}
