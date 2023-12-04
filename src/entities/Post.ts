import Tag from "./Tag";

export default interface Post {
    id: number;
    title: string;
    tags: Array<Tag>,
    lastUpdate: string;
    status: string;
    thumbnailImage: string;
    thumbnailDescription: string;
    content: string;
}