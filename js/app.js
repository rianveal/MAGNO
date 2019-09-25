comunicacion = null
$(document).ready(function(){
  comunicacion = window.location.origin;
  /** INICIO DE SESIÓN **/
  $('.collapsible').collapsible();
  $('#usuario').focus();
  var btnIniciarSesion = $('#btnIniciarSesion');
  var btnOlvideContrasena = $('#btnOlvideContrasena');
  $(btnIniciarSesion).on('click', function(){
    if($('#usuario').val() === ''){
      $('#usuario').focus();
      M.toast({html: 'Ha olvidado digitar su usuario.', classes: 'rounded'})
    }else if( $('#contrasena').val() === '' ){
      M.toast({html: 'Ha olvidado digitar su contraseña.', classes: 'rounded'})
      $('#contrasena').focus();
    }else{
      if( $('#usuario').val() === 'admin' &&  $('#contrasena').val() === 'admin'){
        direccionarPrincipal();
      }else if( $('#usuario').val() === 'cliente' &&  $('#contrasena').val() === 'cliente'){
        direccionarPrincipalCliente();
      }else{
        M.toast({html: 'Usuario o contraseña no coincide.', classes: 'rounded'})
      }
    }
  });
  
  $(btnOlvideContrasena).on('click', function(){
    $('.contenedor-recuperar').css('top','0');
    inhabilitarFormularioLogin();
  });

  $('#btnRecuperar').on('click', function(){
    if( $('#correoRecupera').val() === '' ){
      $('#correoRecupera').focus();
      M.toast({html: 'Ha olvidado digitar su correo eléctronico.', classes: 'rounded'})
    }
  });

  $('#btnSalirRecuperar').on('click', function(){
    $('.contenedor-recuperar').css('top','-100%');
    habilitarFormularioLogin();
  });

  $('#btnRegistrarme').on('click', function(){
    if( $('#cedula').val() === '' ){
      $('#cedula').focus();
      M.toast({html: 'Ha olvidado digitar su número de cedula.', classes: 'rounded'})
    }else if( $('#primerNombre').val() === '' ){
      $('#primerNombre').focus();
      M.toast({html: 'Ha olvidado digitar su primer nombre.', classes: 'rounded'})
    }else if( $('#primerApellido').val() === '' ){
      $('#primerApellido').focus();
      M.toast({html: 'Ha olvidado digitar su primer apellido.', classes: 'rounded'})
    }else if( $('#correoRegistro').val() === '' ){
      $('#correoRegistro').focus();
      M.toast({html: 'Ha olvidado digitar su correo eléctronico.', classes: 'rounded'})
    }else if( $('#numeroContacto').val() === '' ){
      $('#numeroContacto').focus();
      M.toast({html: 'Ha olvidado digitar su numero de contacto.', classes: 'rounded'})
    }else if( $('#barrio').val() === '' ){
      $('#barrio').focus();
      M.toast({html: 'Ha olvidado digitar el nombre de sus barrio.', classes: 'rounded'})
    }else if( $('#direccion').val() === '' ){
      $('#direccion').focus();
      M.toast({html: 'Ha olvidado digitar su dirección.', classes: 'rounded'})
    }

  });

  $('#salirRegistrarme').on('click', function(){
    limpiarFormularioRegistrarme();
  });

   $('.logo-texto').on('click', function(){
    direccionarPrincipal();
   }); 

  /** MODAL **/ 
  $('.btnModal').on('click', function(){
    var modal = $(this).attr('href');
    $(''+modal).fadeIn();
  });

  $('.cerrar-modal').on('click', function(){
    $(this).parent().parent().parent().fadeOut();
  });

});

function limpiarFormularioRegistrarme(){
  $('#cedula').val('');
  $('#primerNombre').val('');
  $('#segundoNombre').val('');
  $('#primerApellido').val('');
  $('#segundoApellido').val('');
  $('#correoRegistro').val('');
  $('#numeroContacto').val('');
  $('#barrio').val('');
  $('#direccion').val('');
}

function inhabilitarFormularioLogin(){
  $('#usuario').attr('readonly', true);
  $('#contrasena').attr('readonly', true);
  $('#btnIniciarSesion').addClass('disabled');
  $('#btnAgregarme').addClass('disabled');
}

function habilitarFormularioLogin(){
  $('#usuario').removeAttr('readonly');
  $('#contrasena').removeAttr('readonly');
  $('#btnIniciarSesion').removeClass('disabled');
  $('#btnAgregarme').removeClass('disabled');
}

function direccionarPrincipal(){
  ruta = comunicacion+'/MAGNO/tablero.html';
  window.location.href = ruta;
};

function direccionarPrincipalCliente(){
  ruta = comunicacion+'/MAGNO/index.html';
  window.location.href = ruta;
};