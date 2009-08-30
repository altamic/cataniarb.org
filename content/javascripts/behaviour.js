function random_image_index() {
  const MAX_IMAGE_INDEX = 4;
  return Math.floor(Math.random()*(MAX_IMAGE_INDEX))
}

$(function() {
  $.preloadCssImages();
  
  // get the current image1 index
  // get the current image2 index  
  // generate a random number for image1 such as is different from image1 and image2 index
   $('body').click(function() {
     current_left_image = $('div#splash').css('background-image');
     $('div#splash').css('background-image', current_left_image.replace(/splash_left_\d/, "splash_left_" + random_image_index()));
    
    current_right_image = $('div#splash span').css('background-image')
    $('div#splash span').css('background-image', current_right_image.replace(/splash_right_\d/, "splash_right_" + random_image_index()));
  });
});