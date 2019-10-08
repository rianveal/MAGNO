var comunicacion = '';
$(document).ready(function(){
  comunicacion = window.location.origin;

  $('#tablaOfertas').DataTable({
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

  $('#tablaOfertas tbody').on( 'click', 'tr a', function () {
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

});