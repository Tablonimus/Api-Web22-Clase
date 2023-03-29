import { buscarPorNombre, pokemonesPorPagina, buscarDetalle } from "./api.js";

let root = document.getElementById("root");
let inputPPP = document.getElementById("pokemonesPorPagina"); //

inputPPP.addEventListener("change", async (event) => {
  root.innerHTML = `
    <div class="componenteDeCarga">
     <img src="https://media.tenor.com/_3R8EL8_DQYAAAAi/pokeball-pokemon.gif" />
    </div>`;

  let numero = event.target.value;

  const pokemonesBuscados = await pokemonesPorPagina(numero); //retorna un array [{},{}]

  root.innerHTML = "";

  const idDeboton = [];
  for (let i = 0; i < pokemonesBuscados.length; i++) {
    const pokemon = pokemonesBuscados[i];

    idDeboton.push(pokemon.id);
    //----------------------------------------------------------///
    const pokemonHTML = `
        <div class="pokemonCard" name="tarjeta" id=${pokemon.id}>
        <img src="  ${pokemon.imagen} " />
            <div>
               <span id="nombrePokemon"> ${pokemon.nombre} </span>
               <span id="nombrePokemon"> ${pokemon.id} </span>
            </div>
             <div id="tipos-container">
                <span>Tipo de pokemon</span>
                <span id="tipoPokemon"> ${pokemon.tipo} </span>
                <span id="tipoPokemon"> ${pokemon.tipo} </span>
                                            
                <button id=${pokemon.nombre}>
                  VER MAS
                 </button>
             </div>         
          </div>
           `;

    root.innerHTML += pokemonHTML;
  }

  for (let i = 0; i < idDeboton.length; i++) {
    const id = idDeboton[i];
    const pokemon = await buscarDetalle(id);

    const botonVerMas = document.getElementById(id);
    botonVerMas.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(pokemon.name);
    });
  }
});

let inputBPN = document.getElementById("buscarPorNombre");
inputBPN.addEventListener("change", async (event) => {
  root.innerHTML = "<div></div>";
  event.preventDefault();
  let pokemonName = event.target.value;

  await buscarPorNombre(pokemonName);
});
