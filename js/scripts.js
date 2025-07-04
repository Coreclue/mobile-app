let pokemonRepository= (function () {
    let pokemonList = [
        {name: "Braviary", height: 1.5, type: ["flying", "normal"]},
        {name: "Durant", height: 0.3, type: ["steel", "bug"]},
        {name: "Deino", height: 0.8, type: ["dark", "dragon"]}];


        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList
        }
    //
    return {
        add:  add,
        getAll: getAll,
        addListItem: addListItem
        };

        //
        function addListItem(pokemon) {
            let ulpokelist = document.querySelector("ul") //variable has new ul assigned.

            let listItem = document.createElement("li") // created list assigned to listItem.
            let button = document.createElement("button") //variable creating new button.

            button.innerText = pokemon.name // called name from repositoryList object, accessed by pokemon parameter.
            button.classList.add("button") //added a class to the new button element.

            listItem.appendChild(button) // use variable to append button element to li element.
            ulpokelist.appendChild(listItem) //appended list to unordered list.

            //event listener called on the button inside of event function called the showDetails function to console.log() on each click.
            button.addEventListener("click", function (event) {
                showDetails(pokemon)

            })
        }
        // console.logs each object in the pokemon list.
        function showDetails(pokemon) {
            console.log(pokemon)
        }

})() // IIFE ends

// Uses add method/function to add new pokemon to the pokemonRepository object from outside the IIFE  thanks to the return statement.
pokemonRepository.add({name: "Piakchu", height: 0.4, type: ["electric"]})

//Use forEach loop to iterate over the all the property and values in the pokemonRepository object using the getAll() to access it outside of IIFE.
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
})

// logs to console the iteration of pokemonRepository object using getALL() to access it outside of the IIFE.
console.log(pokemonRepository.getAll())