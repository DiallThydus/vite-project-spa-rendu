interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: Origin;
    location: LocationType[];
    image: string;
    episode: Episode[];
    url: string;
    created: string;
}

interface Origin {
    url?: string;
    name?: string;
}

interface LocationType {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[]; // urls api
    url: string;
    created: string;
}

interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]; // urls api
    url: string;
}

interface ApiResponseInfo {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
}
