// ===============================
// Pokemon Repository Module (IIFE)
// ===============================
let pokemonRepository = (function () {
    // List to store all pokemon objects
    let pokemonList = [];
    // API URL to fetch pokemon data
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=80';


        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList
        }

        function showDetails(pokemon) {
            loadDetails(pokemon).then(function () {
                console.log(pokemon);
            })
        }


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


        function loadList() {
            return fetch(apiUrl).then (function (response) {
                return response.json();
            }).then(function(json) {
                json.results.forEach(function (item) {
        let pokemon = {
            name: item.name,
            detailsUrl: item.url
        };
        add(pokemon);
    });
            }).catch(function (error) {
                console.log(error);
            })
        }

        function loadDetails (item) {
            let url = item.DetailsUrl;
            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
            }).catch(function (error) {
                console.log(error);
            })
        }




    // returns access outside of function.
    return {
        add:  add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
        };


})() // IIFE ends

//Use forEach loop to iterate over the all the property and values in the pokemonRepository object using the getAll() to access it outside of IIFE.

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    })
})



