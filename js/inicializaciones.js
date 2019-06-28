$(document).ready(function(){
  
  WebFontConfig = {
    google: { families: [ 'Material+Icons'] } };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown();
  $('.collapsible').collapsible();
  $('.modal').modal();
  $('.slider').slider();
  $('.tabs').tabs();
  $('.fixed-action-btn').floatingActionButton();
  $('.tooltipped').tooltip();
  $('.modal').modal();
  $('select').formSelect();

});

