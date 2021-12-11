var apiProductos="https://laptop-store-six.vercel.app/productos"
class Producto{
    creaProducto(){
        fetch(apiProductos,{
            mode:'no-cors'
        }).then(
            r=>r.json())
            .then(res=>{
            var container= document.getElementById('lista-productos');
            var content='';
            res.forEach((producto,i)=>{
                content+=`
                <div class="card mb-4 shadow-sm">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-bold">${producto.Nombre}</h4>
                    </div>
                    <div class="card-body">
                        <img src="${producto.ImagenId}" class="card-img-top" alt="HP PAVILION"/>
                        <h1 class="card-title pricing-card-title precio">S/. <span class="">5000</span></h1>

                        <p class="list-unstyled mt-3 mb-4">
                          ${producto.Descripcion}
                        </p>
                        <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="${i}">Comprar</a>
                    </div>
                </div>`; 

            });
            container.innerHTML=content;
        }).catch(console.log);

    }
}



var p= new Producto();
p.creaProducto();