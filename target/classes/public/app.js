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

