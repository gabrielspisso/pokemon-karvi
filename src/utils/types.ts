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
}