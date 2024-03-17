export async function getPokemonById(
  baseUrl: string,
  id: number
): Promise<any> {
  try {
    const response = await fetch(`${baseUrl}${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
}
