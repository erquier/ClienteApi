function verCliente(id){
    $.get( "http://localhost:4567/reserva/"+id, function( data ) {
      $( "#nombre" ).html( data.nombre );
    }, "json" );

}

