var db = new Dexie("Carrito");
var db2 = new Dexie("Pedido");
let api='https://laptop-store-six.vercel.app/';

db.version(1).stores({
   
    pedido:`id`   
  });





function addpedido(pedido) {
    db.pedido.bulkPut([element]);

}

function sendPedido(element) {
    fetch(api+'pedidos', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors,   *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(element) // body data type must match "Content-Type" header
      })
      .then(data => {
      alert("Tu pedido ha sido enviado");
      
      })
      .catch(function(err) {
        db2.pedido.bulkPut([element]);
       alert("Tu se guardo offline")
      })
}

function sincronizar() {
    db.transaction('rw', db.pedido, () => {
 
        let pedidos = db.pedido;
        console.log(pedidos);
        if(pedidos!= undefined){
         pedidos.each((element)=>{
            sendPedido(element);
            db.pedido.delete(element.id);
        })
       }});

}