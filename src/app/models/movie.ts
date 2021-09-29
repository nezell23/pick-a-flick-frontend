import { Tag } from "./tag";

export class Movie {
    // ! since user won't be inputting this upon movie creation
    movieId!: number;
    authorId!: number;
    imageUrl: string;
    movieTitle: string;
    year: number;
    runTimeInMinutes: number;
    genre: string;
    leadActors: string;
    description: string;
    tags: Tag[];
}
