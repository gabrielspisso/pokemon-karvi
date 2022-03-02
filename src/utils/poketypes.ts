import React from 'react'
import bug from '../assets/poketypes/bug.png';
import dark from '../assets/poketypes/dark.png';
import dragon from '../assets/poketypes/dragon.png';
import electric from '../assets/poketypes/electric.png';
import fairy from '../assets/poketypes/fairy.png';
import fighting from '../assets/poketypes/fighting.png';
import fire from '../assets/poketypes/fire.png';
import flying from '../assets/poketypes/flying.png';
import ghost from '../assets/poketypes/ghost.png';
import grass from '../assets/poketypes/grass.png';
import ground from '../assets/poketypes/ground.png';
import ice from '../assets/poketypes/ice.png';
import normal from '../assets/poketypes/normal.png';
import poison from '../assets/poketypes/poison.png';
import psychic from '../assets/poketypes/psychic.png';
import rock from '../assets/poketypes/rock.png';
import steel from '../assets/poketypes/steel.png';
import water from '../assets/poketypes/water.png';

const poketypes = [
    {
        name: 'bug',
        src: bug
    },
    {
        name: 'dark',
        src: dark
    },
    {
        name: 'dragon',
        src: dragon
    },
    {
        name: 'electric',
        src: electric
    },
    {
        name: 'fairy',
        src: fairy
    },
    {
        name: 'fighting',
        src: fighting
    },
    {
        name: 'fire',
        src: fire
    },
    {
        name: 'flying',
        src: flying
    },
    {
        name: 'ghost',
        src: ghost
    },
    {
        name: 'grass',
        src: grass
    },
    {
        name: 'ground',
        src: ground
    },
    {
        name: 'ice',
        src: ice
    },
    {
        name: 'normal',
        src: normal
    },
    {
        name: 'poison',
        src: poison
    },
    {
        name: 'psychic',
        src: psychic
    },
    {
        name: 'rock',
        src: rock
    },
    {
        name: 'steel',
        src: steel
    },
    {
        name: 'water',
        src: water
    }
];

export const getType = (name: string) => poketypes.find(type => type.name == name)?.src || normal;