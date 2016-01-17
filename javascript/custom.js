//Executes your code when the DOM is ready.  Acts the same as $(document).ready().
$(function() {
//Calls the tocify method on your HTML div.
$("#toc").tocify({selectors: "h2,h3,h4", showEffect: "fadeIn"});
if( $('#toc').children('ul').length < 3){
 $("#toc").hide();
}
});
