import React, { FunctionComponent } from 'react';
import { Pokemon } from '../utils/types';
import PokemonType from './PokemonType';
import { useNavigate } from 'react-router'

type PokemonCardProps = {
    pokemon: Pokemon;
    className?: string;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ pokemon, className }) => {
    
    const navigate = useNavigate();
    const getTypes = (): string[] => pokemon.types.map(type => type.type.name);

    return (
        <div 
            className={`px-20 hover:border hover:cursor-pointer h-[100%] grid items-end ${className}`}
            onClick={() => navigate(`/detail/${pokemon.id}`)}
        >
            <div className='flex inline-flex items-start h-[100%] py-2'>
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