import axios from 'axios';
import { PokemonUrl } from './types';

export const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const pokemonFetcher = async (url: string) => {
    try {
        const basicData = await axios.get(url).then(res => res.data);
        const urls: string[] = basicData.results.map((pok: PokemonUrl) => pok.url);
        const pokemonsData: any = await Promise.all(urls.map(fetcher));
        return pokemonsData;
    }
    catch(err){
        console.error('Error at fetching', err);
    }
}