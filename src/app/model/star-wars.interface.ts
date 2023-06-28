export interface starWars {
    films: string;
    people: string;
    planets: string;
    species: string;
    starships: string;
    vehicles: string;
}

export interface People {
    name: string; 
    height: number; 
    mass: number; 
    hair_color: string; 
    skin_color: string; 
    eye_color: string; 
    birth_year: string; 
    gender: string; 
    homeworld: string 
    films: string[]; 
    species: string[]; 
    vehicles: string[]; 
    starships: string[]; 
    created: Date; 
    edited: Date; 
    url: string;
    force?: Force;
}

export interface Force {
    power: number; 
    ability: number;
    winner: boolean;
}