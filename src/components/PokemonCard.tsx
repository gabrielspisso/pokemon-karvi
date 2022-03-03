import React, { FunctionComponent } from 'react';
import { Pokemon } from '../utils/types';
import PokemonType from './PokemonType';

type PokemonCardProps = {
    pokemon: Pokemon;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ pokemon }) => {

    const getTypes = (): string[] => pokemon.types.map(type => type.type.name);

    return (
        <div 
            className='px-20 hover:border hover:cursor-pointer h-[100%] grid items-end'
            onClick={() => alert(getTypes().join(' '))}
        >
            <div className='grid flex grid-cols-4 items-start h-[100%] py-2'>
                {getTypes().map(type => <PokemonType type={type} key={type} />)}
            </div>
            <img 
                src={pokemon.sprites.other.dream_world.front_default}
                className='h-45 mx-auto pt-3'
            />
            <div className="text-lg text-center font-medium mx-auto py-5 w-[100%]">
                {pokemon.name.toUpperCase()}
            </div>
        </div>
    );
};

export default PokemonCard;