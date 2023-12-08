export default interface LocalFile {
    _id: string;
    aliasName: string;
    link?: string;
}

export interface UpdateLocalFileDto {
    aliasName: string;
}