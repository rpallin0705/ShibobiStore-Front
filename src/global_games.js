import axios from "axios";
/*class Juego {
  constructor(id, nombre, descripcion, plataforma, genero, precio, descuento, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.plataforma = plataforma;
    this.genero = genero;
    this.precio = precio;
    this.descuento = descuento;
    this.precio_descuento = descuento;
    this.imagen = imagen;
  }
}

const juego = new Juego();
console.log(juego);*/
const url = 'http://localhost:3000/games';

export let juegos = [];
axios.get(url)
  .then(function (response) {
    // La respuesta exitosa se encuentra en response.data
    juegos = response.data;
    
  })
  .catch(function (error) {
    // En caso de error, se puede acceder al mensaje de error a través de error.message
    console.error(error.message);
  });


