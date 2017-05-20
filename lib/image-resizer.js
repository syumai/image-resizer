var ImageResizer = (function () {

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  function convertFileToImage(file, width, height, type, callback, action) {
    var image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    image.onload = function () {
      action(image, width, height, type, callback);
    }
  } 

  function resize(image, width, height, type, callback) {
    if(image instanceof File) {
      return convertFileToImage(image, width, height, type, callback, resize);
    }

    if(!height) {
      height = width;
    }

    if(!type) {
      type = 'image/jpeg';
    }

    canvas.width = width;
    canvas.height = height;

    context.drawImage(image, 0, 0, width, height);
    callback(canvas.toDataURL(type));
  };

  function scale(image, width, height, type, callback) {
    if(image instanceof File) {
      return convertFileToImage(image, width, height, type, callback, scale);
    }

    var currentWidth = image.width;
    var currentHeight = image.height;
    width = currentWidth * width;
    height = currentHeight * height;

    resize(image, width, height, type, callback);
  }

  return {
    resize: resize,
    scale: scale
  };

})();
