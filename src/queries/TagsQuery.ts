import GetManyDto from "@/entities/GetManyDto";
import Tag from "@/entities/Tag";
import axios from "axios";

export default class TagsQuery {
    public static async getTags() {
        const res = await axios.get<GetManyDto<Tag>>(`${import.meta.env.VITE_API_URL}/tags/`);
        if (res.status == 200) {
            return res.data;
        }
        throw res.data;
    }

    public static async createTag() {
        
    }
}