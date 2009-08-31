function random_image_index(current_index) {
  index = function() { 
    const MAX_IMAGE_INDEX = 4;
    return Math.floor(Math.random() * MAX_IMAGE_INDEX) 
  };
  
  random_number = index();
  while (random_number == current_index)
     random_number = index();
  return random_number;
}


$(function() {
    current_left_image = $('div#splash').css('background-image');
    current_left_index = current_left_image.match(/splash_left_(\d)/)[1]
    $('div#splash').css('background-image', current_left_image.replace(/splash_left_\d/, "splash_left_" + random_image_index(current_left_index)));
    
    current_right_image = $('div#splash span').css('background-image');
    current_right_index = current_right_image.match(/splash_right_(\d)/)[1]
    $('div#splash span').css('background-image', current_right_image.replace(/splash_right_\d/, "splash_right_" + random_image_index(current_right_index)));
  
  $.preloadCssImages();
});