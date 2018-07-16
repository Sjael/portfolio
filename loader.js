function loaded(){
  //scroll to bottom of portfolio
  var element = document.getElementById("work");
  element.scrollTop = element.scrollHeight;
  //remove loader 
  $('#loader').toggleClass("loaded");
};