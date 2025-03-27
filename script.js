const fetchPokemon = () => {
    const data = [];
    for (let i = 1; i <= 1007; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        data.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(data).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));

        //On code ici
        
        //console.log(pokemon);
        const pokedex = document.getElementById('pokedex');
        
        pokemon.forEach(poke => {
            let name = poke.name;
            let image = poke.image;
            let id = poke.id;

            let card = `<li class="card">
                <img class="card-image" src="${image}" alt="${name} pokemon">
                <h2 class="card-title">${id}• ${name}</h2>
            </li>`;
            
            //console.log(card);
            pokedex.insertAdjacentHTML("beforeend", card);
        });
        
        //On arrête de coder ici ! 
    });
};

fetchPokemon();
