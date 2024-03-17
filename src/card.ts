export interface PokemonData {
  name: string;
}

export class PokemonCard {
  pokemonData: PokemonData;

  constructor(pokemonData: PokemonData) {
    this.pokemonData = pokemonData;
  }

  render(): string {
    return `
      <div class="card">
        <h2>${this.pokemonData.name}</h2>
        <p class="card__data"></p>
      </div>
    `;
  }
}

export class PokemonComponent {
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  pokemonId: number = 1;

  constructor(baseUrl?: string, pokemonId?: number) {
    if (baseUrl) this.baseUrl = baseUrl;
    if (pokemonId) this.pokemonId = pokemonId;
  }

  async render(): Promise<void> {
    try {
      // Fetch Pokémon data
      const response = await fetch(`${this.baseUrl}${this.pokemonId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon data');
      }

      const pokemonData: PokemonData = await response.json();

      const pokemonCard = new PokemonCard(pokemonData);

      const cardContainer = document.querySelector('.card__data');
      if (cardContainer) {
        cardContainer.innerHTML = pokemonCard.render();
      }
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  }
}
