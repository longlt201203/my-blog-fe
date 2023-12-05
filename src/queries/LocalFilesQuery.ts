import axios from "axios";
import LocalFile from "../entities/LocalFile";

export default class LocalFilesQuery {
    public static async getLocalFiles() {
        const res = await axios.get<LocalFile[]>(`${import.meta.env.VITE_API_URL}/local-files/`);
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
}