comunicacion = null
$(document).ready(function(){
  comunicacion = window.location.origin;
  $('#tablaProductos, #tablaProductosTop').DataTable({
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

  cargarGraficoVentasDelDia();
  cargarGraficoVentasUltimoSieteDias();
  cargarGraficoVentasMesActual();
  cargarGraficoProductosPorBodega();
  cargarGraficoProductosPorCategoria();
  cargarGraficoProductosPorGenero();
});

function cargarGraficoVentasDelDia(){
  var ctx = document.getElementById('graficoPorDia').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Producto 01', 'Producto 02', 'Producto 03', 'Producto 04', 'Producto 05', 'Producto 06',
                   'Producto 07', 'Producto 08', 'Producto 09', 'Producto 10', 'Producto 11', 'Producto 12'],
          datasets: [{
              label: 'Ventas',
              fill: false,
              borderWidth: 1,
              data: [500000, 2500000, 900000, 1460000, 700000, 100000, 500000, 850000, 415000, 1000000, 3000000, 8000000],
              backgroundColor:'#7c4dff',
              borderColor: '#7c4dff',
          }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'VENTAS DEL DÍA POR PRODUCTO'
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem) {
                return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                  return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
                });
              }
          }
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            stacked: true,
          }]
        },
        maintainAspectRatio : false,
        legend: {
          display: true,
          labels: {
            usePointStyle: true
          }
        }
      }
  });
}
function cargarGraficoVentasUltimoSieteDias(){
  var ctx = document.getElementById('graficoVentaSieteDias').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['2019-10-03','2019-10-02','2019-10-01','2019-09-30','2019-09-29','2019-09-28','2019-09-27'],
          datasets: [{
              label: 'Ventas',
              fill: false,
              borderWidth: 1,
              data: [12000000, 8000000, 16000000, 700000, 800000, 1000000, 5000000],
              backgroundColor:'#7c4dff',
              borderColor: '#7c4dff',
          }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'VENTAS ÚLTIMO 7 DÍAS'
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem) {
                return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                  return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
                });
              }
          }
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            stacked: true,
          }]
        },
        maintainAspectRatio : false,
        legend: {
          display: true,
          labels: {
            usePointStyle: true
          }
        }
      }
  });
}
function cargarGraficoVentasMesActual(){
  var ctx = document.getElementById('graficoVentaMesActual').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['2019-10-03','2019-10-02','2019-10-01'],
          datasets: [{
              label: 'Ventas',
              fill: false,
              borderWidth: 1,
              data: [12000000, 8000000, 16000000],
              backgroundColor:'#7c4dff',
              borderColor: '#7c4dff',
          }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'VENTAS MES ACTUAL'
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem) {
                return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                  return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
                });
              }
          }
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            stacked: true,
          }]
        },
        maintainAspectRatio : false,
        legend: {
          display: true,
          labels: {
            usePointStyle: true
          }
        }
      }
  });
}
function cargarGraficoProductosPorBodega(){
  var ctx = document.getElementById('graficoProductosPorBodega').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['BODEGA B001','BODEGA B002','BODEGA B003'],
          datasets: [{
              label: 'Cantidad de productos',
              fill: false,
              borderWidth: 1,
              data: [96, 140, 50],
              backgroundColor:'#7c4dff',
              borderColor: '#7c4dff',
          }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'CANTIDAD DE PRODUCTOS POR BODEGA'
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            stacked: true,
          }]
        },
        maintainAspectRatio : false,
        legend: {
          display: true,
          labels: {
            usePointStyle: true
          }
        }
      }
  });
}
function cargarGraficoProductosPorCategoria(){
  var ctx = document.getElementById('graficoProductosPorCategoria').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['DEPORTE','HOGAR','MODA', 'SALUD', 'TECNOLOGÍA'],
          datasets: [{
              label: 'Cantidad de productos',
              fill: false,
              borderWidth: 1,
              data: [120, 70, 190, 45, 200],
              backgroundColor:'#7c4dff',
              borderColor: '#7c4dff',
          }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'CANTIDAD DE PRODUCTOS POR CATEGORÍA'
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            stacked: true,
          }]
        },
        maintainAspectRatio : false,
        legend: {
          display: true,
          labels: {
            usePointStyle: true
          }
        }
      }
  });
}
function cargarGraficoProductosPorGenero(){
  var ctx = document.getElementById('graficoProductosPorCompradoPorGenero').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['FEMENINO','MASCULINO'],
          datasets: [{
              label: 'Cantidad de productos adquiridos',
              data: [3569, 1410],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              ]  
          }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'CANTIDAD DE PRODUCTOS ADQUIRIDOS POR GÉNEROS'
        },
        scales: {
          yAxes: [{    
            ticks: {
                beginAtZero: true
            }
          }]
        },
        maintainAspectRatio : false,
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 15,
            bottom: 10
          }
        },
        legend: {
          display: true,
          labels: {
            usePointStyle: true
          }
        }
      }
  });
}