
$(document).ready(function(){

  $('#tablaBodegas').DataTable({
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

  $('#tablaBodegas tbody').on( 'click', 'tr a', function () {
    var id = $(this).attr('id');
    
    if( id === 'AdministrarBodega' ){
      var codBodega = $(this).attr('name');
      //cargarDatosBodega(codBodega);
    }

    if( id === 'eliminarBodega' ){
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

  $('#btnRegistrarBodega').on('click', function(){
    if( $('#codigoBodega').val() === '' ){
      $('#codigoBodega').focus();
      M.toast({html: 'Campo CÓDIGO no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#nombreBodega').val() === '' ){
      $('#nombreBodega').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#direccionBodega').val() === '' ){
      $('#direccionBodega').focus();
      M.toast({html: 'Campo DIRECCIÓN no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#telefonosBodega').val() === '' ){
      $('#telefonosBodega').focus();
      M.toast({html: 'Campo TELEFÓNO no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#correoBodega').val() === '' ){
      $('#correoBodega').focus();
      M.toast({html: 'Campo CORREO ELECTRÓNICO no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else {
      M.toast({html: 'Iniciar proceso de registro', classes: 'rounded'});  
      //limipiarFormularioAdministrarBodega();
    }
  })

  $('#btnAdministrarBodega').on('click', function(){
    if( $('#codigoBodegaAD').val() === '' ){
      $('#codigoBodegaAD').focus();
      M.toast({html: 'Campo CÓDIGO no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#nombreBodegaAD').val() === '' ){
      $('#nombreBodegaAD').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#direccionBodegaAD').val() === '' ){
      $('#direccionBodegaAD').focus();
      M.toast({html: 'Campo DIRECCIÓN no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#telefonosBodegaAD').val() === '' ){
      $('#telefonosBodegaAD').focus();
      M.toast({html: 'Campo TELEFÓNO no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#correoBodegaAD').val() === '' ){
      $('#correoBodegaAD').focus();
      M.toast({html: 'Campo CORREO ELECTRÓNICO no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else {
      M.toast({html: 'Iniciar proceso de actualización', classes: 'rounded'});  
      //limipiarFormularioAdministrarBodega();
    }
  })

  $('#salirRegistrarBodega').on('click', function(){
    limipiarFormularioRegistrarBodega();
  });

  $('#salirAdministrarBodega').on('click', function(){
    limipiarFormularioAdministrarBodega();
  });

});


function cargarDatosBodega(codBodega){
  //$('#codBodega').val(codBodega)
}

function limipiarFormularioRegistrarBodega(){
  $('#codigoBodega').val('');
  $('#nombreBodega').val('');
  $('#direccionBodega').val('');
  $('#telefonosBodega').val('');
  $('#correoBodega').val('')
}

function limipiarFormularioAdministrarBodega(){
  $('#codigoBodegaAD').val('');
  $('#nombreBodegaAD').val('');
  $('#direccionBodegaAD').val('');
  $('#telefonosBodegaAD').val('');
  $('#correoBodegaAD').val('')
}