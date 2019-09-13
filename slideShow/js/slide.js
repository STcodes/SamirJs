var myImage = document.getElementById('firstPhoto');
var imageArray = ["img/codeimg.jpg", "img/c.png", "img/o.jpg", "img/d.jpg", "img/e.jpg"];
var imageIndex = 1;

function nextPhoto(){
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;

  if(imageIndex > imageArray.length-1){
    // Mu kthy foto e pare perseri, prej fillimi dmth
    imageIndex = 0;
  }
}

function prevPhoto(){
  imageIndex = imageIndex;
  console.log("Fillimi i prev: " + imageIndex);
  myImage.setAttribute("src", imageArray[imageIndex]);
  --imageIndex;
  console.log("PREV: " + imageIndex);

  if(imageIndex >= imageArray.length-1){
    imageIndex = 4;
  }
}

// Auto slide show (Change photo by time !)
var i = 0; 			
var images = ["img/code2.png", "img/c.png", "img/o.jpg", "img/d.jpg", "img/e.jpg"];	
var time = 1000;

function changeImg() {

  document.slide2.src = images[i];
  if(i < images.length - 1) {
    i++; 
  } 
  else { 
    // Mu kthy foto prej fillimi kur e arrin foton e fundit
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;