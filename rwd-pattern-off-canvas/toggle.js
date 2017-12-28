/* define selectors */
var main  = $("main");
var menu = $(".toggle-nav");
var drawer = $("#drawer");
var x = $(".x-nav");

/* when "Toggle Nav" is clicked, open navar i.e. drawer */
menu.on("click", function(e){
  drawer.toggleClass("open");
  e.stopEventPropagation();
});

/* when "X" is clicked, close navbar */
x.on("click", function(e){
  drawer.toggleClass("open");
  e.stopEventPropagation();
})

