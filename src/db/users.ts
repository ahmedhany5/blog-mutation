import { unstable_cache } from "next/cache";
import { cache } from "react";
import { baseApi } from "./base";


export const getUsers = unstable_cache(cache(async () => {
    return baseApi.get("users").then(res => res.json())
}), ["users"])


export const getUser = unstable_cache(cache(async (id: string | number) => {
    return baseApi.get(`users/${id}`).then(res => res.json())
}), ["users", "userId"])

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
