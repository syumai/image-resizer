var ImageResizer = (function () {

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  function convertFileToImage(file) {
    var image = document.createElement('img');
    image.src = URL.createObjectURL(file);
  } 

  function isFloat(number) {
    return number % 1 !== 0;
  }

  function resize (image, width, height, type) {
    if(!height) {
      height = width;
    }

    if(!type) {
      type = 'image/jpeg';
    }

    if(image instanceof File) {
      image = convertFileToImage(image);
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
    return canvas.toDataURL(type);
  };

  return {
    resize: resize
  };

})();
