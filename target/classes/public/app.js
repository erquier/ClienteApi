//ver cliente
function verCliente(){
    $.get( "http://localhost:4567/ver/1", function( data ) {
    
      $( "#nombre" ).html( data.nombre );
    }, "json" );

}


//Crear cliente
function crearCliente(){

    $.post( "http://localhost:4567/agregar",


{
    nombre   : $('#nombre').val(),
    telefono : $('#telefono').val(),
    direccion: $('#direccion').val(),
    estado   : $('#estado').val()
})
     .done(function( data ) {
      alert( "Dato insertado: " + data );
     }, "json" );
  }


//Crear Reservacion a Cliente Especifico
function crearReserveraACliente(){
    $.post( "http://localhost:4567/reserva",
{
    idcliente:$('#IDcliente').val(),
    fecha_llegada:$('fecha_llegada').val(),
    fecha_salida:$('fecha_salida').val()
})

    .done(function(data){
     alert("Dato insertado:" + data);
        }, "json");
    }
    
////Consultar Una reservacion en especifico Por ID
//function verReservaPorId(id){
//      $.get( "http://localhost:4567/reserva/"+id, function( data ) {
//      $( "#nombre" ).html( data.nombre );
//    }, "json" );
//}
//
////Consultar Una reservacion en especifico Por ID
//function verReservaPorId(id){
//      $.get( "http://localhost:4567/reserva/"+id, function( data ) {
//      $( "#nombre" ).html( data.nombre );
//    }, "json" );
//}
////Ver Lista de reservaciones
////function verLista(id){
////
////  $.display( "http://localhost:4567/reserva/"+id, function( data ) {
////  $( "#IDcliente" ).html( data.IDcliente )
////{
////
////$.ajax({
////            type: 'POST',
////            url: 'http://localhost:4567/reserva/',
////            contentType: 'application/json; charset=utf-8',
////            dataType: 'json',
////            success: function (VerDatosTabla) {
////var table='<thead><tr><td>IDcliente</td><td>Nombre</td><td>Direccion</td><td>Telefono</td><td>Estado</td></thead><tbody>';
////                // loop each record
////                for (var i = 0; i < VerDatosTabla.d.length; i++) {
////                    table +=  '<tr>'
////                              '<td>' + VerDatosTabla.d[i].IDcliente+  '</td>' +
////                              '<td>' + VerDatosTabla.d[i].Nombre+     '</td>' +
////                              '<td>' + VerDatosTabla.d[i].Direccion + '</td>' +
////                              '<td>' + VerDatosTabla.d[i].Telefono +  '</td>' +
////                              '<td>' + VerDatosTabla.d[i].Estado +    '</td>'
////
////                              }
////                table += '</tbody>';
////               $('#verdatostabla').html(table).dataTable();
////
////
////            }
////
////        },"json");
//
//
//
//}
////Actualizar una reservacion
//function actualizarReservacion(id){
//    $.put( "http://localhost:4567/reserva"+id,
//{
//    idcliente:$('#IDcliente').val(),
//    fecha_llegada:$('fecha_llegada').val(),
//    fecha_salida:$('fecha_salida').val()
//})
//
//    $.done(function(data){
//     alert("Dato Actualizado:" + data);
//        }, "json");
//    }
//
////Eliminar una reservacion
//function eliminarReserva(id){
//      $.delete( "http://localhost:4567/reserva/"+id,
//
//      function( data )
//      {  $( "#IDcliente" ).html( data.IDcliente ),
//        $("fecha_llegada").html(data.fecha_llegada)
//      });
//    }
//
////Actualizar una reservacion
//function actualizarReservacion(id){
//    $.put( "http://localhost:4567/reserva"+id,
//{
//    idcliente:$('#IDcliente').val(),
//    fecha_llegada:$('fecha_llegada').val(),
//    fecha_salida:$('fecha_salida').val()
//})
//
//    $.done(function(data){
//     alert("Dato Actualizado:" + data);
//        }, "json");
//    }
//
////Eliminar una reservacion
//function eliminarReserva(id){
//      $.delete( "http://localhost:4567/reserva/"+id, function( data ) {
//      $( "#IDcliente" ).html( data.IDcliente ),
//      $("fecha_llegada").html(data.fecha_llegada),
//      $("fecha_salida").html(data.fecha_salida);
//    }, "json" );
//}
