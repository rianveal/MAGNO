var comunicacion = '';
$(document).ready(function(){
  comunicacion = window.location.origin;

  $('#tablaProveedores').DataTable({
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

  $('#tablaProveedores tbody').on( 'click', 'tr a', function () {
    var id = $(this).attr('id');
    
    if( id === 'Administrar' ){
      var nit = $(this).attr('name');
      //cargarDatosProveedor(nit);
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

  $('#btnRegistrarProveedor').on('click', function(){
    if( $('#nit').val() === '' ){
      $('#nit').focus();
      M.toast({html: 'Campo NIT no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#nombre').val() === '' ){
      $('#nombre').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#direccion').val() === '' ){
      $('#direccion').focus();
      M.toast({html: 'Campo DIRECCIÓN no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#telefonos').val() === '' ){
      $('#telefonos').focus();
      M.toast({html: 'Campo TELÉFONOS no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#correoElectronico').val() === '' ){
      $('#correoElectronico').focus();
      M.toast({html: 'Campo CORREO ELECTRÓNICO no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#estado').val() === null ){
      $('#estado').focus();
      M.toast({html: 'Campo ESTADO no puede ser vacio.', classes: 'rounded'});
      return false;
    }else{
      M.toast({html: 'Iniciar proceso de registro', classes: 'rounded'});
      limpiarFormularioRegistrarProveedor();
      return true;
    }
  });

  $('#btnActualizarProveedor').on('click', function(){
    if( $('#nitAD').val() === '' ){
      $('#nitAD').focus();
      M.toast({html: 'Campo NIT no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#nombreAD').val() === '' ){
      $('#nombreAD').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#direccionAD').val() === '' ){
      $('#direccionAD').focus();
      M.toast({html: 'Campo DIRECCIÓN no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#telefonosAD').val() === '' ){
      $('#telefonosAD').focus();
      M.toast({html: 'Campo TELÉFONOS no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#correoElectronicoAD').val() === '' ){
      $('#correoElectronicoAD').focus();
      M.toast({html: 'Campo CORREO ELECTRÓNICO no puede ser vacio.', classes: 'rounded'});
      return false;
    }else{
      M.toast({html: 'Iniciar proceso de actualización', classes: 'rounded'});
      limpiarFormularioAdministrarProveedor();
      return true;
    }
  });

  $('#salirRegistrarProveedor').on('click', function(){
    limpiarFormularioRegistrarProveedor();
  })

  $('#salirActualizarProveedor').on('click', function(){
    limpiarFormularioAdministrarProveedor();
  });

});

function limpiarFormularioRegistrarProveedor(){
  $('#nit').val('');
  $('#nombre').val('');
  $('#direccion').val('');
  $('#telefonos').val('');
  $('#correoElectronico').val('');
}

function limpiarFormularioAdministrarProveedor(){
  $('#nitAD').val('');
  $('#nombreAD').val('');
  $('#direccionAD').val('');
  $('#telefonosAD').val('');
  $('#correoElectronicoAD').val('');
}

function cargarDatosProveedor(nit){
  //console.log('nit : '+nit);
}