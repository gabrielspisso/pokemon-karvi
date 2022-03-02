import React, { FunctionComponent, useState, useEffect } from 'react';
import { pokemonRoute } from '../utils/routes';
import useSWR from 'swr';
import { pokemonFetcher } from '../utils/fetcher';
import { Pokemon } from '../utils/types';

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
    if (!data) return <div>loading...</div>

    return (
    <div className='md:columns-3 sm:columns-2 xs:columns-1'>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
    </div>
    );
};

export default Catalog;