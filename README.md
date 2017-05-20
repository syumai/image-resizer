# Image Resizer

* Tiny JavaScript libary for resizing image using Context2D

## Usage

```html
<script src="image-resizer.js"></script>
<img src="largeImage.jpg" id="largeImage">
<img src="" id="resizedImage">
```

```js
var largeImage = document.getElementById('largeImage');
var resizedImage = document.getElementById('resizedImage');

//**
//* Resizing image
//*

// Resize to 400 x 300 px
ImageResizer.resize(largeImage, 400, 300, null, function (resultImg) {
  resizedImage.src = resultImg; 
});

// Square
ImageResizer.resize(largeImage, 500, null, null, function (resultImg) {
  resizedImage.src = resultImg;
});

//**
//* Scaling image
//*

// Scale to half size
ImageResizer.scale(largeImage, 0.5, null, null, function (resultImg) {
  resizedImage.src = resultImg;
});

// Scale to double size
ImageResizer.scale(largeImage, 2.0, null, null, function (resultImg) {
  resizedImage.src = resultImg;
});

//**
//* Options
//*

// PNG (Default value is 'image/jpeg')
ImageResizer.resize(largeImage, 400, 300, 'image/png', function (resultImg) {
  resizedImage.src = resultImg;
});

// File can be passed (if the file was an image)
var file = someFileGettingFunction();
ImageResizer.scale(file, 0.3, null, null, function (resultImg) {
  resizedImage.src = resultImg;
});
```

## Example

https://syumai.github.io/image-resizer/

## Author
syumai

## License
MIT
