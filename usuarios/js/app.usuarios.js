var comunicacion = '', usuario = '';
$(document).ready(function(){
  comunicacion = window.location.origin;
  $('#tablaUsuarios').DataTable({
    language: {
      paginate: {
        first:      "<i class='material-icons'>first_page</i>",
        previous:   "<i class='material-icons'>navigate_before</i>",
        next:       "<i class='material-icons'>navigate_next</i>",
        last:       "<i class='material-icons'>last_page</i>"
      }
    },
    "pagingType": "full_numbers",
    "responsive": true,
    "dom": "Bfrtip"
  });

  $('#tablaUsuarios tbody').on( 'click', 'tr a', function () {
    var id = $(this).attr('id');
    
    if( id === 'Administrar' ){
      var documento = $(this).attr('name');
      //cargarDatosUsuario(documento);
    }

    if( id === 'eliminar' ){
      Swal.fire({
        title: 'Seguro(a)?',
        text: "No podra revertir esta decisión!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Eliminado!',
            'El registro ha sido borrado.',
            'success'
          )
        }
      })
    }
  });

  $('#btnValidarExistenciaPersona').on('click', function(){
    if( $('#documentoValidar').val() === ''){
      $('#documentoValidar').focus();
      M.toast({html: 'Campo DOCUMENTO no puede ser vacio.', classes: 'rounded'});
      if( $('#contendorPersona').is(':visible') ){ $('#contendorPersona').fadeOut(); }
      if( !$('#btnRegistrarUsuario').hasClass('disabled') ){ $('#btnRegistrarUsuario').addClass('disabled')  }
    }else{
      // Proceso de validación con ajax
      $('#contendorPersona').fadeIn();
      $('#documento').val($('#documentoValidar').val());
      $('#documentoValidar').val('');
      $('#btnRegistrarUsuario').removeClass('disabled');
    }
  })

  $('#btnRegistrarUsuario').on('click', function(){
    if( $('#primerNombre').val() === '' ){
      $('#primerNombre').focus();
      M.toast({html: 'Campo PRIMER NOMBRE  no puede ser vacio.', classes: 'rounded'});
    }else if( $('#primerApellido').val() === '' ){
      $('#primerApellido').focus();
      M.toast({html: 'Campo PRIMER APELLLIDO no puede ser vacio.', classes: 'rounded'});
    }else if( $('#fechaNacimieno').val() === '' ){
      $('#fechaNacimieno').focus();
      M.toast({html: 'Campo FECHA DE NACIMIENTO no puede ser vacio.', classes: 'rounded'});
    }else if( $('#genero').val() === null ){
      $('#genero').focus();
      M.toast({html: 'Campo GÉNERO no puede ser vacio.', classes: 'rounded'});
    }else if( $('#correoElectronico').val() === '' ){
      $('#correoElectronico').focus();
      M.toast({html: 'Campo CORREO ELECTRÓNICO no puede ser vacio.', classes: 'rounded'});
    }else if( $('#telefonos').val() === '' ){
      $('#telefonos').focus();
      M.toast({html: 'Campo TELÉFONO(S) no puede ser vacio.', classes: 'rounded'});
    }else if( $('#direccion').val() === '' ){
      $('#direccion').focus();
      M.toast({html: 'Campo DIRECCIÓN no puede ser vacio.', classes: 'rounded'});
    }else if( $('#contrasena').val() === '' ){
      $('#contrasena').focus();
      M.toast({html: 'Campo CONTRASEÑA no puede ser vacio.', classes: 'rounded'});
    }else if( $('#confirmarContrasena').val() === '' ){
      $('#confirmarContrasena').focus();
      M.toast({html: 'Campo CONFIRMAR CONTRASEÑA no puede ser vacio.', classes: 'rounded'});
    }else if( $('#perfil').val() === null ){
      $('#perfil').focus();
      M.toast({html: 'Campo PERFIL no puede ser vacio.', classes: 'rounded'});
    }else{
      $('#btnRegistrarUsuario').addClass('disabled');
      $('#contendorPersona').fadeOut();
      limpiarFormularioRegistrarUsuario();
    }
  });

  $( "#primerNombre" ).focusout(function() {
    if( $(this).val() !== '' ){
      var primeroNombre = $(this).val();
      if( $('#primerApellido').val() === '' ){
        usuario = primeroNombre;
      }else{
        usuario = primeroNombre+'.'+$('#primerApellido').val();
        $('#usuario').val(usuario);
      }
    }else{
      $('#usuario').val('');
    }
  });

  $( "#primerApellido" ).focusout(function() {
    if( $(this).val() !== '' ){
      var primerApellido = $(this).val();
      if( $('#primerNombre').val() === '' ){
        usuario = primerApellido;
      }else{
        usuario = $('#primerNombre').val()+'.'+primerApellido;
        $('#usuario').val(usuario);
      }
    }else{
      $('#usuario').val('');
    }
  });

  $('#confirmarContrasena').focusout(function(){
    var contrasena = '';
    if( $('#contrasena').val() === '' ){
      $('#contrasena').focus();
      M.toast({html: 'Campo CONTRASEÑA no puede ser vacio.', classes: 'rounded'});
    }else{
      contrasena = $('#contrasena').val();
      if( $('#confirmarContrasena').val() === '' ){
        $('#confirmarContrasena').focus();
        M.toast({html: 'Campo CONFIRMAR CONTRASEÑA no puede ser vacio.', classes: 'rounded'});
      }else{
        var contrasenaConfirma = $('#confirmarContrasena').val();
        if( contrasena !== contrasenaConfirma ){
          $('#contrasena').focus();
          $('#btnRegistrarUsuario').addClass('disabled');
          M.toast({html: 'Contrasena no coinciden.', classes: 'rounded'});
        }else{
          $('#btnRegistrarUsuario').removeClass('disabled');
        }
      }
      
    }
  })

  $('#salirRegistrarUsuario').on('click', function(){
    $('#btnRegistrarUsuario').addClass('disabled');
    $('#contendorPersona').fadeOut();
    limpiarFormularioRegistrarUsuario();
  })

  $('#btnActualizarUsuario').on('click', function(){
    if( $('#documentoAD').val() === '' ){
      $('#documentoAD').focus();
      M.toast({html: 'Campo DOCUMENTO no puede ser vacio.', classes: 'rounded'});
    }else if( $('#primerNombreAD').val() === '' ){
      $('#primerNombreAD').focus();
      M.toast({html: 'Campo PRIMER NOMBRE  no puede ser vacio.', classes: 'rounded'});
    }else if( $('#primerApellidoAD').val() === '' ){
      $('#primerApellidoAD').focus();
      M.toast({html: 'Campo PRIMER APELLLIDO no puede ser vacio.', classes: 'rounded'});
    }else if( $('#fechaNacimienoAD').val() === '' ){
      $('#fechaNacimienoAD').focus();
      M.toast({html: 'Campo FECHA DE NACIMIENTO no puede ser vacio.', classes: 'rounded'});
    }else if( $('#correoElectronicoAD').val() === '' ){
      $('#correoElectronicoAD').focus();
      M.toast({html: 'Campo CORREO ELECTRÓNICO no puede ser vacio.', classes: 'rounded'});
    }else if( $('#telefonosAD').val() === '' ){
      $('#telefonosAD').focus();
      M.toast({html: 'Campo TELÉFONO(S) no puede ser vacio.', classes: 'rounded'});
    }else if( $('#direccionAD').val() === '' ){
      $('#direccionAD').focus();
      M.toast({html: 'Campo DIRECCIÓN no puede ser vacio.', classes: 'rounded'});
    }else if( $('#usuarioAD').val() === '' ){
      $('#usuarioAD').focus();
      M.toast({html: 'Campo USUARIO no puede ser vacio.', classes: 'rounded'});
    }else{
      limpiarFormularioAdministrarUsuario();
    }
  });

});


function limpiarFormularioRegistrarUsuario(){
  $('#documento').val('');
  $('#primerNombre').val('');
  $('#segundoNombre').val('');
  $('#primerApellido').val('');
  $('#segundoApellido').val('');
  $('#fechaNacimieno').val('');
  $('#correoElectronico').val('');
  $('#telefonos').val('');
  $('#direccion').val('');
  $('#usuario').val('');
  $('#contrasena').val('');
  $('#confirmarContrasena').val('');
}

function limpiarFormularioAdministrarUsuario(){
  $('#documentoAD').val('');
  $('#primerNombreAD').val('');
  $('#segundoNombreAD').val('');
  $('#primerApellidoAD').val('');
  $('#segundoApellidoAD').val('');
  $('#fechaNacimienoAD').val('');
  $('#correoElectronicoAD').val('');
  $('#telefonosAD').val('');
  $('#direccionAD').val('');
  $('#usuarioAD').val('');
  $('#contrasenaAD').val('');
  $('#confirmarContrasenaAD').val('');
}