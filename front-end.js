import { buscarPorNombre, pokemonesPorPagina } from "./api.js";

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

  //Con bucleFor?
  for (let i = 0; i < pokemonesBuscados.length; i++) {
    const pokemon = pokemonesBuscados[i];
    //----------------------------------------------------------///
    const pokemonHTML = `
        <div class="pokemonCard">
        <img src="  ${pokemon.imagen} " />
            <div>
               <span id="nombrePokemon"> ${pokemon.nombre} </span>
            </div>
             <div id="tipos-container">
                <span>Tipo</span>
                <span id="tipoPokemon"> ${pokemon.tipo} </span>
             </div>
        </div>
        `;

    root.innerHTML += pokemonHTML;
    //-------------------------------------------------------------//
  }

  //Con for each
  // pokemonesBuscados.forEach((pokemon) => {
  //   const pokemonHTML = `
  //   <div class="pokemonCard">
  //   <img src="  ${
  //     pokemon.imagen
  //       ? pokemon.imagen
  //       : "https://vader.news/__export/1588965166057/sites/gadgets/img/2020/05/08/2-25193_pokemon-ball-transparent-background-transparent-background-pokeball-png.png_423682103.png"
  //   } " />
  //       <div>
  //          <span id="nombrePokemon"> ${pokemon.nombre} </span>
  //       </div>
  //        <div id="tipos-container"> 
  //           <span>Tipo</span>
  //           <span id="tipoPokemon"> ${pokemon.tipo} </span>
  //        </div>                
  //   </div>
  //   `;

  //   root.innerHTML += pokemonHTML;
  // });
});

let inputBPN = document.getElementById("buscarPorNombre");
inputBPN.addEventListener("change", async (event) => {
  root.innerHTML = "<div></div>";
  event.preventDefault();
  let pokemonName = event.target.value;

  await buscarPorNombre(pokemonName);
});
