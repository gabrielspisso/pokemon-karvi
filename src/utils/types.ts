export type PokemonUrl = {
    name: string;
    url: string;
}

export type Pokemon = {
    name: string;
    id: number;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            },
            home: {
                front_default: string;
            },
            "official-artwork": {
                front_default: string;
            }
        }
    };
    types: {
        type: {
            name: string;
        }
    }[];
    species: {
        url: string;
    }
}

export type Species = {
    habitat: {
        url: string;
    };
    evolution_chain: {
        url: string;
    }
    flavor_text_entries: {
        flavor_text: string;
        language: {
            name: string;
        };
    }[]
}

export type EvolvesTo = {
    species: {
        name: string;
    }
    evolves_to: EvolvesTo[];
}

export type EvolutionChain = {
    chain: EvolvesTo;
}

export type Habitat = {
    names: {
        language:{
            name: string;
        };
        name: string;
    }[];
}

export type PokemonDetail = {
    pokemon: Pokemon;
    description: string;
    habitat: string;
    evolutionChain: Pokemon[];
}