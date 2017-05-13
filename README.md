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

// Resize to 400 x 300 px
resizedImage.src = ImageResizer.resize(largeImage, 400, 300);

// Square
resizedImage.src = ImageResizer.resize(largeImage, 500);

// Resize to half size
resizedImage.src = ImageResizer.resize(largeImage, 0.5);

// Resize to double size
resizedImage.src = ImageResizer.resize(largeImage, 2.0);

// PNG (Default value is 'image/jpeg')
resizedImage.src = ImageResizer.resize(largeImage, 0.3, null, 'image/png');

// File can be passed (if the file was an image)
var file = someFileGettingFunction();
resizedImage.src = ImageResizer.resize(file, 0.3);
```

## Example

https://syumai.github.io/image-resizer/

## Author
syumai

## License
MIT
