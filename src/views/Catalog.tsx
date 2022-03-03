import React, { FunctionComponent, useState, useEffect } from 'react';
import { pokemonRoute } from '../utils/routes';
import useSWR from 'swr';
import { pokemonFetcher } from '../utils/fetchers';
import { Pokemon } from '../utils/types';
import PokemonCard from '../components/PokemonCard';
import BlackButton from '../components/BlackButton';

const Catalog: FunctionComponent<{}> = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const limit = 9;

    const { data, error } = useSWR(`${pokemonRoute}/?limit=${limit}&offset=${offset}`, pokemonFetcher);

    useEffect(() => {
        if (data)
            setPokemons([...pokemons, ...data]);
    }, [data])

    if (error) return <div>failed to load</div>
    if (pokemons.length == 0) return <div>loading...</div>

    return (
        <div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 content-end'>
                {
                    pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)
                }
            </div>
            <div className='grid mx-auto'>
                <BlackButton text='Load more' onClick={() => setOffset(offset + limit)}/>
            </div>
        </div>
    );
};

export default Catalog;