//ver Cliente
function verCliente(){
    $.get( "http://localhost:4567/ver/1", function( data ) {
      $( "#nombre" ).html( data.nombre );
    }, "json" );

}

//Crear cliente
function crearCliente(){
    $.post( "http://localhost:4567/agregar",
{
    nombre   : $('#Nombre').val(),
    telefono : $('#Telefono').val(),
    direccion: $('#Direccion').val(),
    estado   : $('#Estado').val()   
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
//Consultar Una reservacion en especifico Por ID
function verReservaPorId(id){
      $.get( "http://localhost:4567/reserva/"+id, function( data ) {
      $( "#nombre" ).html( data.nombre );
    }, "json" );
}
//Ver Lista de reservaciones
function verLista(){}
//Actualizar una reservacion
function actualizarReservacion(id){
    $.put( "http://localhost:4567/reserva"+id,
{    
    idcliente:$('#IDcliente').val(),
    fecha_llegada:$('fecha_llegada').val(),
    fecha_salida:$('fecha_salida').val()
})

    .done(function(data){
     alert("Dato Actualizado:" + data);
        }, "json");
    }
//Eliminar una reservacion
function eliminarReserva(id){
      $.delete( "http://localhost:4567/reserva/"+id, function( data ) {
      $( "#IDcliente" ).html( data.IDcliente ),
      $("fecha_llegada").html(data.fecha_llegada),
      $("fecha_salida").html(data.fecha_salida);
    }, "json" );