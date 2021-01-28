// Add active class to the current button (highlight it)
// var header = document.getElementById("image");
// console.log("header");
// console.log(header);
// var btns = header.getElementsByClassName("popup");
// console.log("btns");
// console.log(btns);

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("popup");
//     console.log(current);
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

//
var images = document.getElementById("images");
console.log("popup");
console.log(images);

images.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  document.getElementById("popup-content-image").src = "download.jpeg";
  popup.className = popup.className.replace("popup", "");
  popup.className += "popup1";
});

//
var images2 = document.getElementById("images2");
console.log("popup");
console.log(images2);

images2.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  document.getElementById("popup-content-image").src = "download1.jpeg";
  popup.className = popup.className.replace("popup", "");
  popup.className += "popup1";
});

//
var images3 = document.getElementById("images3");
console.log("popup");
console.log(images3);

images3.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  document.getElementById("popup-content-image").src = "download2.jpeg";
  popup.className = popup.className.replace("popup", "");
  popup.className += "popup1";
});

//
var images4 = document.getElementById("images4");
console.log("popup");
console.log(images4);

images4.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  document.getElementById("popup-content-image").src = "download3.jpeg";
  popup.className = popup.className.replace("popup", "");
  popup.className += "popup1";
});

//
var images5 = document.getElementById("images5");
console.log("popup");
console.log(images5);

images5.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  document.getElementById("popup-content-image").src = "download4.jpeg";
  popup.className = popup.className.replace("popup", "");
  popup.className += "popup1";
});

//
var images6 = document.getElementById("images6");
console.log("popup");
console.log(images6);

images6.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  document.getElementById("popup-content-image").src = "download5.jpeg";
  popup.className = popup.className.replace("popup", "");
  popup.className += "popup1";
}); //
var images7 = document.getElementById("images7");
console.log("popup");
console.log(images7);

images7.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  document.getElementById("popup-content-image").src = "download2.jpeg";
  popup.className = popup.className.replace("popup", "");
  popup.className += "popup1";
}); //
var images8 = document.getElementById("images8");
console.log("popup");
console.log(images8);

images8.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  document.getElementById("popup-content-image").src = "download1.jpeg";
  popup.className = popup.className.replace("popup", "");
  popup.className += "popup1";
}); //

// var close_btn = document.getElementById("popup-content-close");
// console.log("popup");
// console.log(images);

// close_btn.addEventListener("click", function () {
//   console.log("images click");
//   var popup = document.getElementById("popup");
//   popup.className = popup.className.replace("popup1", "");
//   popup.className += "popup";
// });

var close_btn1 = document.getElementById("popup-content-click");

close_btn1.addEventListener("click", function () {
  console.log("images click");
  var popup = document.getElementById("popup");
  popup.className = popup.className.replace("popup1", "");
  popup.className += "popup";
});
