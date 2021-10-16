//Juan Luis Silva - Desafío nro 5- objetos

//Mi OBJETO DECLARADO...................................................

const silicona = {
    marca: "Topex",
    color: "Negro",
    textura: "Rígido",
    precio: 15,
}
console.log(silicona);


//MI MOLDE DE ADHESIVOS................................................

 function Adhesivo (marca, color, textura, precio){
     this.marca = marca;
     this.color = color;
     this.textura = textura;
     this.precio = precio;
 }

 const adhesivo1 = new Adhesivo ("Sikaflex", "Blanco", "Elástico", 30);
 const adhesivo2 = new Adhesivo ("Soudal", "Gris", "Plástica", 45);

 console.log(adhesivo1);
 console.log(adhesivo2);


//MÉTODO PARA DEVOLVER EL SALUDO INICIAL EN MAYÚSCULAS...................................

let saludoInicial=prompt("Bienvenido a tu tienda Online de Adhesivos, como te llamas?")

let textoenMayuscula= saludoInicial.toUpperCase();
   alert("Un gusto saludarte" +" "+ textoenMayuscula);


//PROPIEDADED DE MI OBJETO..................................................................

 let laMarca=prompt("Bienvenido, por favor ingresa la Marca del Adhesivo que deseas comprar:");
 let elColor=prompt("Ahora, ingresa el Color que deseas en el Ahdesivo:");
 let laTextura=prompt("También, ingresa la textura que buscas en el Adhesivo:");
 
 let miAdhesivoIdeal = new Adhesivo(laMarca, elColor, laTextura);
 alert("El Adhesivo que estás buscando es: "+ miAdhesivoIdeal.marca+" "+ miAdhesivoIdeal.color+" "+ miAdhesivoIdeal.textura);



 //EL HORARIO DE ATENCIÓN  DE MI TIENDA ONLINE.................................................................................
//EL HORARIO DE MI TIENDA DE ADHESIVOS ES: 7:00 AM A 11:00 AM Y DE 2:00 PM A 8:00 PM...........................................


class miNegocio {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora) {
        
        if (((hora >= 7) && (hora <= 11)) || ((hora >= 14) && (hora <= 20))) {
            return true;
        } else {
            return false;
        }
    }
}

const local1 = new miNegocio("Tienda de Adhesivos Juancito", "Lima Perú", "Juan Silva", "Ferretería");
console.log(local1);


for (i = 1; i <= 4; i++) {
    let horarioDeAtencion = parseInt(prompt("Ingrese un horario para saber si estamos atendiendo: (horario militar)"));
    let abierto = local1.estaAbierto(horarioDeAtencion); 
    if (abierto) {
        alert("Claro que estamos abierto, estamos a la orden. te Esperamos..!!!");
    } else {
        alert("En estos momentos estamos cerrados, te esperamos en nuestro horario de: 7:00 am a 11:00 am y de 2:00 pm a 8:00 pm");
    }
}
