let pokemonList = [
    {name: "Braviary", height: 1.5, type: ["flying", "normal"]},
    {name: "Durant", height: 0.3, type: ["steel", "bug"]},
    {name: "Deino", height: 0.8, type: ["dark", "dragon"]}
];

pokemonList.forEach ((let i = 0; i < pokemonList.length; i++) {   //checks if i, index of zero is greater than the whole array index, then adds 1.
    let p = pokemonList[i];  //set p variable with the for loop index.
    document.write("<p>" + p.name + " (Height " + p.height + ")")  // document.write writes to the html document using elements inside of strings.

    if (p.height > 1.0) {
        document.write(" - Wow, that's big!");
    }

    document.write("</p>")  //This closes the tag but also display the wow that's big next to the true conditional value.
}





