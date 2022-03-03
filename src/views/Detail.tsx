import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Loader from '../components/Loader';
import Logo from '../components/Logo';
import PokemonCard from '../components/PokemonCard';
import { pokemonDetailFetcher } from '../utils/fetchers';
import { pokemonRoute } from '../utils/routes';
import { Pokemon, PokemonDetail } from '../utils/types';

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getTypes(p: Pokemon): string{
    return p.types.map(type => capitalizeFirstLetter(type.type.name)).join(', ');
}


const Detail: FunctionComponent<{}> = () => {
    const { id } = useParams();
    const { data: pokemonDetail, error } = useSWR<PokemonDetail>(`${pokemonRoute}/${id}`, pokemonDetailFetcher);
    

    if (error) return <div>failed to load</div>
    if (!pokemonDetail) return <Loader />

    return (
        <div className='container mx-auto h-screen space-y-10'>
            <Logo />
            <div className='grid md:grid-cols-2 xs:grid-cols-1 content-end'>
                <img 
                    src={pokemonDetail.pokemon.sprites.other.dream_world.front_default}
                    className='mx-auto py-8 w-80'
                />
                <div className='sm:mx-auto'>
                    <div className="text-5xl text-left font-medium py-8 w-[100%] justify-self-auto ">
                        {pokemonDetail.pokemon.name.toUpperCase()}
                        <p className="
                            text-2xl
                            text-left 
                            font-thin 
                            py-8 
                            w-[100%]
                            tracking-wide"
                        >
                            This pokemon has types: {getTypes(pokemonDetail.pokemon)}
                            <br /><br />
                            Can be found on: {capitalizeFirstLetter(pokemonDetail.habitat)}
                        </p>
                    </div>
                </div>
            </div>
            <p className="
                text-2xl
                text-left 
                font-bold
                font-mono
                underline
                underline-offset-8
                w-[100%]
                mt-10 
                tracking-wide">
                Description
            </p>
            <p className="
                text-2xl
                text-left 
                font-thin
                py-8
                w-[100%]
                tracking-wide"
            >
                {(pokemonDetail.description)}
            </p>
            <div className='overflow-x-scroll inline-flex w-full'>
                    {pokemonDetail.evolutionChain.map(pok =>
                        <PokemonCard pokemon={pok} key={pok.name} className='w-96' />
                    )}
            </div>
        </div>
    );
};

export default Detail;