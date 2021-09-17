import { Tag } from "./tag";

export class Movie {
    movieId: number;
    authorId: number;
    imageUrl: string;
    movieTitle: string;
    year: number;
    runTimeInMinutes: number;
    genre: string;
    leadActors: string;
    description: string;
    tags: Tag[];
}
