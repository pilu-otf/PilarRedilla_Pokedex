const form = document.querySelector("form")
const input = form.querySelector("input")
const pokemonError = document.querySelector(".pokemon_error")
const pokemonResponseBlock = document.querySelector(".pokemon_response")
const loading = document.querySelector(".loading")
const url = "https://pokeapi.co/api/v2/pokemon/"
const abilityUrl = "https://pokeapi.co/api/v2/ability/"


export const searchPokmeonController = () => {
    form.addEventListener("submit", async (ev) => {
        ev.preventDefault()
        resetErrors()

        const inputValue = input.value
        const inputLength = inputValue.length

        if (inputLength >= 1) {
            setLoadingOn()
            const fetchUrl = url + inputValue
            const pokemonResponse = await fetch(fetchUrl).then(res => res.json())
            console.log(pokemonResponse);

            renderPokemon(pokemonResponse)
            setLoadingOff()
            resetErrors()
        } else {
            renderError()
        }

        form.reset()
    })
}

const resetErrors = () => {
    pokemonError.innerHTML = ""
    pokemonError.classList.remove("opened")

    pokemonError.addEventListener("click", (ev) => {
        if (pokemonError.classList.contains("opened")) {
            pokemonError.classList.remove("opened")
        } else {
            
        }
    })
}

const renderError = () => {
    pokemonError.innerHTML = "Busca un pokemon"
    pokemonError.classList.add("opened")
}

export const renderPokemon = (pokemon) => {
    console.log(pokemon);
    pokemonResponseBlock.innerHTML = `
        <div class="pokemon_response_name">${pokemon.species.name}</div>
        <div class="pokemon_response_picture">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.species.name}"
            width="200" height="200"
            >
        </div>
        <div class="tipos">
            <div class="botones_tipos">
            ${pokemon.types.reduce((acc, type) => {
            let html = "";
            html += `
                    <span class="tipo ${type.type.name}">
                        ${type.type.name}
                    </span>
                `;
            return acc + html;
            }, "")}
            </div>
        </div>
        <div class="pokemon_response_abilities">
            ${pokemon.abilities.reduce((acc, ability) => acc + `
                <div class="pokemon_response_ability">${ability.ability.name}</div>
            `, "")}
        </div>

    `;
    initAbilitiesEvent()
    initPictureEvent()
}

const initPictureEvent = () => {
    const picture = pokemonResponseBlock.querySelector("img")
    picture.addEventListener("load", (ev) => {
        console.log("imagen cargada");
    })
}

const initAbilitiesEvent = () => {
    const abilitiesBlocks = document.querySelectorAll(".pokemon_response_ability")

    abilitiesBlocks.forEach(abilitiesBlock => {
        abilitiesBlock.addEventListener("click", async (ev) => {
            const abilityName = abilitiesBlock.innerHTML
            const abilityResponse = await fetch(abilityUrl + abilityName).then(res => res.json());
            console.log(abilityResponse);
            abilitiesBlock.innerHTML = abilityResponse.flavor_text_entries[0].flavor_text
            abilitiesBlock.classList.add("opened")
        })
    });
}

export const setLoadingOn = () => {
    loading.classList.add("opened")
}

export const setLoadingOff = () => {
    loading.classList.remove("opened")
}