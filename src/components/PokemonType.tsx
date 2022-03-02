import React, { FunctionComponent } from 'react';
import { getType } from '../utils/poketypes';

type PokemonTypeProps = {
    type: string;
}

const PokemonType: FunctionComponent<PokemonTypeProps> = ({ type }) => (
    <img src={getType(type)} className='h-7'/>
);

export default PokemonType;