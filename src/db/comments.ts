
import { unstable_cache } from "next/cache";
import { cache } from "react";
import { baseApi } from "./base";

export const getPostComments = unstable_cache(cache(async (postId: string | number) => {
    return baseApi.get(`comments?postId=${postId}`).then(res => res.json())
}), ["comments", "postId"])




function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
