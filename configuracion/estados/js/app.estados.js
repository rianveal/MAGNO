var comunicacion = '', usuario = '';
$(document).ready(function(){
  comunicacion = window.location.origin;

  $('#tablaEstados').DataTable({
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

  $('#tablaEstados tbody').on( 'click', 'tr a', function () {
    var id = $(this).attr('id');
    
    if( id === 'Administrar' ){
      var idEstado = $(this).attr('name');
      cargarDatosEstado(idEstado);
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

  $('#btnRegistrarEstado').on('click', function(){
    if( $('#nombre').val() === ''){
      $('#nombre').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});
    }else if( $('#descripcion').val() === ''){
      $('#descripcion').focus();
      M.toast({html: 'Campo DESCRIPCIÓN no puede ser vacio.', classes: 'rounded'});
    }else{
      limpiarFormularioRegistrarEstado();
    }
  });

  $('#salirRegistrarEstado').on('click', function(){
    limpiarFormularioRegistrarEstado();
  });

  $('#btnAdministrarEstado').on('click', function(){
    if( $('#nombreAD').val() === ''){
      $('#nombreAD').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});
    }else if( $('#descripcionAD').val() === ''){
      $('#descripcionAD').focus();
      M.toast({html: 'Campo DESCRIPCIÓN no puede ser vacio.', classes: 'rounded'});
    }else{
      limpiarFormularioAdministrarEstado();
    }
  });

  $('#salirAdministrarEstado').on('click', function(){
    limpiarFormularioAdministrarEstado();
  });

});

function limpiarFormularioRegistrarEstado(){
  $('#nombre').val('');
  $('#descripcion').val('');
}

function limpiarFormularioAdministrarEstado(){
  $('#nombreAD').val('');
  $('#descripcionAD').val('');
}

function cargarDatosEstado(idEstado){
  console.log(idEstado);
  //$('#codBodega').val(codBodega)
}