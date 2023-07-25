import { IContent } from "./IContent";
import { IUser } from "./IUser";

export interface IPost {
    id: number;
    author: IUser;
    content: IContent[];
    publishedAt: Date;
}