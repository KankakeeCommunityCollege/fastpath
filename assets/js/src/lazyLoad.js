// Lazy load images
// ex. <img data-src="/path/to/image.jpg" alt="">
function lazyLoad() {
  (function() {
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function() {
        img.removeAttribute('data-src');
      };
    });
  })();
}

export default lazyLoad;
