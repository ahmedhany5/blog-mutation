import { unstable_cache } from "next/cache";
import { cache } from "react";
import { baseApi } from "./base";







export const getTodos = unstable_cache(cache(async () => {

    return await baseApi.get("todos").then(res => res.json())
}), ["todos"])


export const getUserTodos = unstable_cache(cache(async (userId: string | number) => {
    return baseApi.get(`todos?userId=${userId}`).then(res => res.json())
}), ["todos", "userId"])

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
