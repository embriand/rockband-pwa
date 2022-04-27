export interface IRockband {
    id: number;
    name: string;
    country: string;
    city: string;
    startYear: number;
    endYear: number;
    founders: string;
    members: number;
    genre: string;
    bio: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IRockband2 {
    name: string;
    country: string;
    city: string;
    startYear: number;
    endYear: number;
    founders: string;
    members: number;
    genre: string;
    bio: string;
}
