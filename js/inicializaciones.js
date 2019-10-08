$(document).ready(function(){
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
  $('.datepicker').datepicker();


  /** MODAL **/ 
  $('.btnModal').on('click', function(){
    var modal = $(this).attr('href');
    $(''+modal).fadeIn();
  });

  $('.cerrar-modal').on('click', function(){
    $(this).parent().parent().parent().fadeOut();
  });

});

