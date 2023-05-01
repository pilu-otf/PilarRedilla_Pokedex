import { renderPokemon, setLoadingOff, setLoadingOn } from "./searchPokemon.controller"

const tipos = document.querySelectorAll(".tipo")

const typeUrl = "https://pokeapi.co/api/v2/type/"
const url = "https://pokeapi.co/api/v2/pokemon/"


export const typeFilter = () => {
    for (const tipo of tipos) {
        tipo.addEventListener("click", async (ev) => {
            setLoadingOn()
            console.log(tipo);
            const fetchUrl = typeUrl + tipo.innerHTML
            const pokemonResponse = await fetch(fetchUrl).then(res => res.json())
            const randomNumber = getRandomNumber()
            const randomPokemonUrl = pokemonResponse.pokemon[randomNumber].pokemon.url
            console.log(randomPokemonUrl);

            const pokemon = await fetch(randomPokemonUrl).then(res => res.json())
            renderPokemon(pokemon)
            setLoadingOff()
        })
    }
}

const getRandomNumber = () => {
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        return randomNumber
    }
}









