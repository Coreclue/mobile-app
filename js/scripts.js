// ===============================
// Pokemon Repository Module (IIFE)
// ===============================
let pokemonRepository = (function () {
    // List to store all pokemon objects
    let pokemonList = [];
    // API URL to fetch pokemon data
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=80';

    // Add a new pokemon to the list
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // Get all pokemon from the list
    function getAll() {
        return pokemonList;
    }

    // Load details from the API, then call to display the modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            // Show modal with name, height, and image
            formValidation.showModal(
                pokemon.name,
                'Height: ' + pokemon.height + 'm',
                pokemon.imageUrl
            );
        });
    }

    // Create and add a list item (button) for each pokemon
    function addListItem(pokemon) {
        let ulpokelist = document.querySelector('ul');
        let listItem = document.createElement('li');
        let button = document.createElement('button');

        // Set button text and class
        button.innerText = pokemon.name;
        button.classList.add('button');

        // Append button to list item, and list item to ul
        listItem.appendChild(button);
        ulpokelist.appendChild(listItem);

        // Add event listener to show details modal on click
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    // Load the list of pokemon from the API
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    // Load details for a specific pokemon
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
        }).catch(function (error) {
            console.log(error);
        });
    }

    // Return public functions to access outside of the IIFE
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})(); // IIFE ends


// ===============================
// Main App Initialization
// ===============================
// Use forEach loop to iterate over all pokemon and add them to the UI
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});


// ===============================
// Form Validation & Modal Module (IIFE)
// ===============================
let formValidation = (function () {

    // Show a modal with title, text, and optional image
    function showModal(title, text, imageUrl) {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerText = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);

        // Only add image if imageUrl is provided
        if (imageUrl) {
            let imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = title;
            modal.appendChild(imageElement);
        }

        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');

        // Hide modal when clicking outside of it
        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });
    }

    // Show a sample modal when clicking the button
    document.querySelector('#show-modal').addEventListener('click', () => {
        showModal('modal title', 'This is the modal content!', null);
    });

    let dialogPromiseReject;

    // Hide the modal
    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');


        if (dialogPromiseReject) {
            dialogPromiseReject();
            dialogPromiseReject = null;
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



