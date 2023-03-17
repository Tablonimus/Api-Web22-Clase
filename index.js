async function correrPrograma() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon/5"
  )
  const jsondata = await data.json()
  console.log("Ya termine con el await");
  console.log("Esto fue lo que encontré",jsondata);
}

correrPrograma();

//endpoints usados
//Todos: "https://pokeapi.co/api/v2/pokemon?limit=2"
//1Pokemon: "https://pokeapi.co/api/v2/pokemon/5"
