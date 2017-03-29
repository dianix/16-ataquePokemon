//alert("¡¡FIGHHHHT!!");

// *** FUNCIÓN CONSTRUCTORA DE CLASE POKEMON ***
function Pokemon(nombre,color,puntosAtaque){
    this.nombre = nombre;
    this.color = color;
    this.puntosAtaque = puntosAtaque;
    this.nivelDeAmistad = 0;
    this.vida = 100;
    
    this.pelear = function(pokemonObjeto){
        pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
    }
    /*    
    this.saludar = function(){
        console.log("Hola, me llamo " + this.nombre);
    }
    this.beber = function(tipoAlcohol){
        if(tipoAlcohol == "chelas"){
            this.nivelDeAmistad += 80;
        } else if (tipoAlcohol == "vodka"){
            this.nivelDeAmistad += 10;
        }
    }*/
}

var pikachu = new Pokemon("Pikachu","amarillo");
var charmander = new Pokemon("Charmander","rojo");
/*
console.log(pikachu);
console.log(charmander);
*/

// *** VARIABLE GLOBAL PARA GUARDAR EN ARREGLO POKEMONES CREADOS ***
var pokemones = [];

// *** PARA CREAR OBJETO POKEMON CON DATOS DADOS POR USUARIO ***
function crearPokemon(){
    var nombrePokemon = document.getElementById("nombrePokemon");
    var colorPokemon = document.getElementById("colorPokemon");
    var puntosAtaque = document.getElementById("puntosAtaque");
    
    var pokemon = new Pokemon(nombrePokemon.value,
                              colorPokemon.value, 
                              parseInt(puntosAtaque.value)
                             );
    pokemones.push(pokemon);
    nombrePokemon.value = "";
    colorPokemon.value = "";
    puntosAtaque.value = "";
    agregarPokemones1(pokemon);
    agregarPokemones2(pokemon);
}

// *** PARA AGREGAR POKEMONES CREADOS AL SELECT 1 ***
function agregarPokemones1(pokemon){
    var opcionesPokemon1 = document.getElementById("opcionesPokemon1");
    var elemento = document.createElement("option");
    elemento.innerHTML = pokemon.nombre;
    opcionesPokemon1.appendChild(elemento);
    console.log(pokemones);
}
// *** PARA AGREGAR POKEMONES CREADOS AL SELECT 2 ***
function agregarPokemones2(pokemon){
    var opcionesPokemon2 = document.getElementById("opcionesPokemon2");
    var elemento = document.createElement("option");
    elemento.innerHTML = pokemon.nombre;
    opcionesPokemon2.appendChild(elemento);
}

// *** PARA ESCOGER POKEMONES *** 
//ya logré obtener los objetos pokemon escogidos, no sé cómo mandarlos al ataque T_T
function contrincante1(){
    var posicionPokemon1 = document.getElementById("opcionesPokemon1").selectedIndex;
    console.log(posicionPokemon1);
    var pokemon1 = pokemones[posicionPokemon1];
    return pokemon1;
}
function contrincante2(){
    var posicionPokemon2 = document.getElementById("opcionesPokemon2").selectedIndex;
    console.log(posicionPokemon2);
    var pokemon2 = pokemones[posicionPokemon2];
    return pokemon2;
}

// *** PARA ATAQUE DE POKEMONES *** T_T
function atacar() {
    var pok1 = contrincante1();
    var pok2 = contrincante2();
    console.log(pok1);
    if(pok1.nombre == pok2.nombre){
        alert("Este pokemon no puede pelear contra si mismo")        
    } else {
        pok1.pelear(pok2);
        console.log(pok2.vida);
        
    }
}

/*
function agregarPokemones1(){
    var opcionesPokemon1 = document.getElementById("opcionesPokemon1");
    opcionesPokemon1.innerHTML = "";
    pokemones.forEach(function(pokemon){
        var elemento = document.createElement("option");
        elemento.innerHTML = pokemon.nombre;
        opcionesPokemon1.appendChild(elemento);
    });
}
// *** PARA AGREGAR POKEMONES CREADOS AL SELECT 2 ***
function agregarPokemones2(){
    var opcionesPokemon2 = document.getElementById("opcionesPokemon2");
    opcionesPokemon1.innerHTML = "";
    pokemones.forEach(function(pokemon){
        var elemento = document.createElement("option");
        elemento.innerHTML = pokemon.nombre;
        opcionesPokemon2.appendChild(elemento);
    });
}
*/


