

class Usuario
{
  constructor ( nombre, apellido )
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = []
    this.mascotas = []
  }
  getFullName ()
  {
    return `Nombre: ${ this.nombre }  Apellido: ${ this.apellido }`;
  }
  addMascota ( nuevaMascota )
  {
    return this.mascotas.push( nuevaMascota );
  }
  countMascotas ()
  {
    return this.mascotas.length;
  }
  addBook ( nombre, autor )
  {
    this.libros.push(
      {
        "nombre": nombre, "autor": autor
      } );
  }
  getBookNames ()
  {
    try {
      if ( this.libros.length ) {
        return this.libros.map( b => b.nombre );
      } else {
        return 'No hay libros';
      }
    } catch ( e ) {
      return [];
    }
  }


}

const usuario = new Usuario( 'Guido', 'Dalonzo' );
usuario.addMascota( 'Perro' )
usuario.addMascota( 'Gato' )
usuario.addMascota( 'Tortuga' )
usuario.addMascota( 'Nutria' )
usuario.addBook( 'Juego de Tronos', 'George R Martin' )
usuario.addBook( 'Watchmen', 'Alan Moore' )

const fullName = usuario.getFullName()
const booksNames = usuario.getBookNames()

console.log( fullName )
console.log( 'Total de mascotas: ', usuario.countMascotas() )
console.log( 'Los libros más leídos son: ', booksNames )