let pokemonList = [
    {name: "Braviary", height: 1.5, type: ["flying", "normal"]},
    {name: "Durant", height: 0.3, type: ["steel", "bug"]},
    {name: "Deino", height: 0.8, type: ["dark", "dragon"]}
];

pokemonList.forEach (function(details) {   //forEach function with funcion as parameter and name parameter as a placeholder to call the object.
    console.log(details); //calls the parameter that containts the elements in the objects.
})