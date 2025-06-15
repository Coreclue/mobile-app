let pokemonRepository= (function () {
    let pokemonList = [
        {name: "Braviary", height: 1.5, type: ["flying", "normal"]},
        {name: "Durant", height: 0.3, type: ["steel", "bug"]},
        {name: "Deino", height: 0.8, type: ["dark", "dragon"]}
    ];


        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList
        }

    return {
            add: add,
            getAll: getAll
    };

})() // IIFE

// Uses add method/function to add new pokemon to the pokemonRepository object from outside the IIFE.
pokemonRepository.add({name: "Piakchu", height: 0.4, type: ["electric"]})

//Use forEach loop to iterate over the all the property and values in the pokemonRepository object using the getAll() to access it outside of IIFE.
pokemonRepository.getAll().forEach(function (pokemon) {
    document.write("<p>" + pokemon.name + " " + pokemon.height + " " + pokemon.type.join(", ") + "</p>")
})

// logs to console the iteration of pokemonRepository object using getALL() to access it outside of the IIFE.
console.log(pokemonRepository.getAll())

