import axios from "axios"
import { baseURL } from "./baseURL.mjs"

export const apiCall = axios.create(
    {
        baseURL: baseURL
    }
)