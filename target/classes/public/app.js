function verCliente(id){
    $.get( "http://localhost:4567/ver/"+id, function( data ) {
      $( "#nombre" ).html( data.nombre );
    }, "json" );

}
