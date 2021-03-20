import { AxiosResponse } from "axios";
import { IFetchIsValidIdResult } from "../redux/types";
import axios from "./axios";

const api = {
    getIsValidId: (
        id: string | null
    ): Promise<AxiosResponse<IFetchIsValidIdResult>> =>
        axios.get<IFetchIsValidIdResult>(`/is_valid?id=${id}`),
};

export default api;
