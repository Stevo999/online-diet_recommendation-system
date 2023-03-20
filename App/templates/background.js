var bgImages = [
    'url("pics/image.jpg")',
    'url("pics/image2.jpg")'
];
var bgImageContainer = document.getElementById('bg-image');
var randomImageIndex = Math.floor(Math.random() * bgImages.length);
bgImageContainer.style.backgroundImage = bgImages[randomImageIndex];
function changeBackgroundImage() {
    var bgImageContainer = document.getElementById('bg-image');
    var randomImageIndex = Math.floor(Math.random() * bgImages.length);
    bgImageContainer.style.backgroundImage = bgImages[randomImageIndex];
  }
  
  setInterval(changeBackgroundImage, 5000); // call the function every 5 seconds
  