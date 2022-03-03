import axios from 'axios';
import { pokemonRoute } from './routes';
import { EvolutionChain, EvolvesTo, Habitat, Pokemon, PokemonDetail, PokemonUrl, Species } from './types';

export const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const pokemonFetcher = async (url: string) : Promise<Pokemon[]> => {
    try {
        const basicData = await fetcher(url);
        const urls: string[] = basicData.results.map((pok: PokemonUrl) => pok.url);
        const pokemonsData: Pokemon[] = await Promise.all(urls.map(fetcher));
        return pokemonsData;
    }
    catch(err){
        throw new Error('Error at fetching pokemons');
    }
}

export const pokemonDetailFetcher = async (url: string) : Promise<PokemonDetail> => {
    try {
        const pokemon: Pokemon = await fetcher(url);
        const pokemonSpecies: Species = await fetcher(pokemon.species.url);
        const evolutionChain: EvolutionChain = await fetcher(pokemonSpecies.evolution_chain.url);
        const pokemonHabitat: Habitat = await fetcher(pokemonSpecies.habitat.url);

        //Get evolutions urls
        const evolutionNames: string[] = getEvolutionNames(evolutionChain.chain.evolves_to);
        const evolutionUrls: string[] = evolutionNames.map(name => `${pokemonRoute}/${name}`)

        const evolutionsData: Pokemon[] = await Promise.all(evolutionUrls.map(fetcher));
        const habitat = pokemonHabitat.names.find(name => name.language.name == 'en')?.name || 'Not found';
        const description = pokemonSpecies.flavor_text_entries
                            .find(entry => entry.language.name == "en")?.flavor_text || 'No description';

        return {
            pokemon,
            description,
            habitat,
            evolutionChain: evolutionsData
        };
    }
    catch(err){
        throw new Error('Error at fetching pokemon details');
    }
}

// Recursive function that gets all evolution names in one array
const getEvolutionNames = (evolutions: EvolvesTo[]): string[] => {
    let evolutionNames: string[] = [];
    evolutions.forEach(ev => {
        //Adding each evolution
        evolutionNames.push(ev.species.name);
        //Adding evolutions of evolutions recursively
        let evolutionsOfEvolutions: string[] = getEvolutionNames(ev.evolves_to);
        evolutionNames = [...evolutionNames, ...evolutionsOfEvolutions];
    });
    return evolutionNames;
}