var ImageResizer = (function () {

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  function convertFileToImage(file, width, height, type, callback, resize) {
    var image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    image.onload = function () {
      resize(image, width, height, type, callback);
    }
  } 

  function isFloat(number) {
    return number % 1 !== 0;
  }

  function resize (image, width, height, type, callback) {
    if(image instanceof File) {
      convertFileToImage(image, width, height, type, callback, resize);
    } else {
      if(!height) {
        height = width;
      }

      if(!type) {
        type = 'image/jpeg';
      }

      if(isFloat(width)) {
        var currentWidth = image.width;
        var currentHeight = image.height;
        width = currentWidth * width;
        height = currentHeight * height;
      }

      canvas.width = width;
      canvas.height = height;

      context.drawImage(image, 0, 0, width, height);
      callback(canvas.toDataURL(type));
    }
  };

  return {
    resize: resize
  };

})();
