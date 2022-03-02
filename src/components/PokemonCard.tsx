import React, { FunctionComponent } from 'react';
import { Pokemon } from '../utils/types';

type PokemonCardProps = {
    pokemon: Pokemon;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div 
            className='px-20 hover:border hover:cursor-pointer h-[100%] grid items-end'
            onClick={() => alert(pokemon.types.map(type => type.type.name).join(' '))}
        >
            <img 
                src={pokemon.sprites.other.dream_world.front_default}
                className='h-45 mx-auto pt-5'
            />
            <div className="text-lg text-center font-medium mx-auto py-5 w-[100%]">
                {pokemon.name.toUpperCase()}
            </div>
        </div>
    );
};

export default PokemonCard;