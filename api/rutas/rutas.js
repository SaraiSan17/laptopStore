const express=require('express')
const router = express.Router();




var productos=[{ 
	"Nombre":"HP PAVILION",
	"Descripcion": "8 GB RAM, COLOR PLATEADO, 256 GB DISCO SSD",
	"Imagenid":"img/hp1.jpg",
	"Precio":"5000"
},

{ 
	"Nombre":"ACER",
	"Descripcion": "16 GB RAM, COLOR NEGRO, 1 TB DD",
	"Imagenid":"img/acer.jpg",
	"Precio":"3000"
},
{ 
	"Nombre":"LENOVO",
	"Descripcion": "4 GB RAM, COLOR PLATEADO, 1 TB DD",
	"Imagenid":"img/lenovo.jpg",
	"Precio":"3000"
},
{ 
	"Nombre":"APPLE",
	"Descripcion": "8 GB RAM, COLOR GOLD, 128 GB DD",
	"Imagenid":"img/apple.jpg",
	"Precio":"5900"
},
{ 
	"Nombre":"HUAWEI",
	"Descripcion": "8 GB RAM, COLOR NEGRO, 256 GB DD",
	"Imagenid":"img/huawei.jpg",
	"Precio":"5769"
},
{ 
	"Nombre":"SAMSUNG",
	"Descripcion": "4 GB RAM, COLOR BLANCA, 64 GB DD",
	"Imagenid":"img/samsung.jpg",
	"Precio":"2599"
},
{ 
	"Nombre":"LG",
	"Descripcion": "8 GB RAM, COLOR PLATEADO, 256 GB DD",
	"Imagenid":"img/lg.jpg",
	"Precio":"4299"
},
{ 
	"Nombre":"ADVANCE",
	"Descripcion": "3 GB RAM, COLOR NEGRO, 64 GB DD",
	"Imagenid":"img/advance.jpg",
	"Precio":"869"
},
{ 
	"Nombre":"DELL",
	"Descripcion": "8 GB RAM, COLOR NEGRO, 1 TB DD",
	"Imagenid":"img/dell.jpg",
	"Precio":"5397"
}

]

var pedidos = [];

router.get('/productos/', function(req, res) {
     res.status(200).send(productos);
});
router.get('/pedidos/', function(req, res) {
    res.status(200).send(pedidos);
});
router.post('/pedidos/', function(req, res) {
    pedidos.push(req.body);
	res.status(200).send({"status":"insertado"});
});




module.exports=router;
