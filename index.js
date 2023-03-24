let root = document.getElementById("root");

let inputPPP = document.getElementById("pokemonesPorPagina"); //
inputPPP.addEventListener("change", async (event) => {
  root.innerHTML = "<div></div>";

  let numero = event.target.value;

  await pokemonesPorPagina(numero);
});

let inputBPN = document.getElementById("buscarPorNombre");
inputBPN.addEventListener("change", async (event) => {
  root.innerHTML = "<div></div>";
  event.preventDefault();
  let pokemonName = event.target.value;

  await buscarPorNombre(pokemonName);
});

async function pokemonesPorPagina(numero) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numero}`);

  const jsondata = await data.json();

  const pokemones = jsondata.results;

  for (let i = 0; i < pokemones.length; i++) {
    const pokemon = pokemones[i];

    const caracteristicas = await (await fetch(pokemon.url)).json();

    const nombre = caracteristicas.name; //"string"
    const imagen = caracteristicas.sprites.other.dream_world.front_default; //"string"
    const tipo = caracteristicas.types.map((objeto) => objeto.type.name); //"string"
    //----------------------------------------------------------///
    const pokemonHTML = `
      <div class="pokemonCard">
      <img src="  ${imagen} " />
          <div>
             <span id="nombrePokemon"> ${nombre} </span>
          </div>
           <div id="tipos-container"> 
              <span>Tipo</span>
              <span id="tipoPokemon"> ${tipo} </span>
           </div>                
      </div>
      `;

    root.innerHTML += pokemonHTML;
  }
}

async function buscarPorNombre(pokemonName) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  const caracteristicas = await data.json();

  const nombre = caracteristicas.name; //"string"
  const imagen = caracteristicas.sprites.other.dream_world.front_default; //"string"
  const tipo = caracteristicas.types.map((objeto) => objeto.type.name); //"string"

  const pokemonHTML = `
      <div class="pokemonCard">
      <img src="  ${imagen} " />
          <div>
             <span id="nombrePokemon"> ${nombre} </span>
          </div>
           <div id="tipos-container"> 
              <span>Tipo</span>
              <span id="tipoPokemon"> ${tipo} </span>
           </div>                
      </div>
      `;

  root.innerHTML += pokemonHTML;
}
