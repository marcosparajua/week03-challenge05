/* eslint-disable no-unused-vars */

import { listPokemon, pokemon } from './interface/interface';

export const fetchPokemon = () => {
  const urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  const pokeBox: HTMLElement = document.querySelector('#poke-box')!;
  if (pokeBox === null) {
    console.error("Element with id 'poke-box' not found");
  }

  const fragment: DocumentFragment = document.createDocumentFragment();

  fetch(urlPokemon)
    .then((res) => res.json())
    .then((res: listPokemon) => {
      const pokemonPromises: Promise<any>[] = res.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );

      Promise.all(pokemonPromises)
        .then((pokemonData) => {
          pokemonData.forEach((pokemon) => {
            const figure: HTMLElement = document.createElement('figure');
            const img: HTMLImageElement = document.createElement('img');
            const figcaption: HTMLElement =
              document.createElement('figcaption');
            const namePokemon: Text = document.createTextNode(pokemon.name);

            img.setAttribute('alt', pokemon.name);
            img.setAttribute('title', pokemon.name);
            img.setAttribute('src', pokemon.sprites.front_default);

            figcaption.appendChild(namePokemon);
            figure.appendChild(img);
            figure.appendChild(figcaption);
            fragment.appendChild(figure);
          });
          pokeBox.appendChild(fragment);
        })
        .catch((error) => {
          console.error('Error fetching Pokémon details:', error);
        });
    })
    .catch((error) => {
      console.error('Error fetching Pokémon list:', error);
    });
};
