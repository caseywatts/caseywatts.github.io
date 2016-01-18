//Executes your code when the DOM is ready.  Acts the same as $(document).ready().
$(function() {
  //Calls the tocify method on your HTML div.
  $("#toc").tocify({
    selectors: "h2,h3,h4",
    extendPage: false,
    showEffect: "fadeIn"
  });
  if( $('#toc').children('ul').length < 3){
    $("#toc").hide();
  }
});

// Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39558186-1', 'auto');
  ga('send', 'pageview');
