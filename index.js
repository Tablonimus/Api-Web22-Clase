// creamos la carpeta de 0
// creamos un archivo llamados index.js
// utilizamos la terminal integrada npm init -y creamos el json
// intalamos nodemon usando "npm install nodemon"
// utilizamos nodemon para el script start del package.json
// creamos una funcion para pedir los pokemon.
//----------10------------------------------------------------------
let pokemonesPorPagina = 2;

async function correrPrograma() {
  //Pedimos y nos llega la petición
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pokemonesPorPagina}`
  ); //
  // { } =nos llega un objeto convertido a Json
  const jsondata = await data.json();
  // = [ ] = entro a la propiedad results y obtengo un array de objetos
  const pokemones = jsondata.results;
  // Entrar al array y pedir la propiedad que queramos de cada objeto
  // ↓   ↓Declaras        ↓límite             ↓que hago despues de recorrer cada objeto
  for (let i = 0; i < pokemones.length; i++) {
    const pokemon = pokemones[i]; //{} = tenemos un objeto
    //Tengo que hacer una peticion a la url => pokemon.url= "https://pokeapi"
    const caracteristicas = await (await fetch(pokemon.url)).json();

    const nombre = caracteristicas.name;
    const imagen = caracteristicas.sprites.other.dream_world.front_default;
    const tipo = caracteristicas.types.map((objeto) => objeto.type.name); //uno o mas poison, hierba

    console.log("Nombre:", nombre);
    console.log("Imagen:", imagen.slice(0, 10));
    console.log("Tipo:", tipo);

  }
}

correrPrograma();

//endpoints usados
//Todos: "https://pokeapi.co/api/v2/pokemon?limit=2"
//1Pokemon: "https://pokeapi.co/api/v2/pokemon/5"
