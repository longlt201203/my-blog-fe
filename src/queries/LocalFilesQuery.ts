import axios from "axios";
import LocalFile, { UpdateLocalFileDto } from "../entities/LocalFile";
import GetManyDto from "@/entities/GetManyDto";

export default class LocalFilesQuery {
    public static async getLocalFiles(page: number): Promise<GetManyDto<LocalFile>> {
        const res = await axios.get<GetManyDto<LocalFile>>(`${import.meta.env.VITE_API_URL}/local-files/?page=${page}`);
        if (res.status == 200) {
            return res.data;
        }
        throw res.data;
    }

    public static async getLocalFile(id: string) {
        const res = await axios.get<LocalFile>(`${import.meta.env.VITE_API_URL}/local-files/${id}`);
        if (res.status == 200) {
            return res.data;
        }
        throw res.data;
    }

    public static async uploadFiles(data: FormData) {
        const res = await axios.post<LocalFile>(`${import.meta.env.VITE_API_URL}/local-files/`, data);
        if (res.status == 200) {
            return res.data;
        }
        throw res.data;
    }

    public static async editFileInfo(data: {id: string, dto: UpdateLocalFileDto}) {
        const res = await axios.patch<LocalFile>(`${import.meta.env.VITE_API_URL}/local-files/${data.id}`, data.dto);
        if (res.status == 200) {
            return res.data;
        }
        throw res.data;
    }

    public static async deleteFile(id: string) {
        const res = await axios.delete(`${import.meta.env.VITE_API_URL}/local-files/${id}`);
        if (res.status != 200) {
            throw res.data;
        }
    }
}