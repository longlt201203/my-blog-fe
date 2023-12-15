export default interface GetManyDto<T> {
    page: number;
    perPage: number;
    nextPage?: number;
    prevPage?: number;
    data: Array<T>;
}