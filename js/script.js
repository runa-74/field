// ======================
// EDUPORT EVENT WEBSITE
// ======================

console.log("Eduport Event Website Loaded Successfully");

// Back To Top Smooth Scroll

document.querySelector(".back-top").addEventListener("click", function(e){

  e.preventDefault();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});