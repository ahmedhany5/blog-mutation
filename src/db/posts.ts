import { unstable_cache } from "next/cache";
import { cache } from "react";
import { baseApi } from "./base";



export const getPosts = unstable_cache(cache(async () => {
    return baseApi.get("posts").then(res => res.json())
}), ["postss"])


export const getPost = unstable_cache(cache(async (id: string | number) => {
    return baseApi.get(`posts/${id}`).then(res => res.json())
}), ["postss", "userId"])


export const getUserPosts = unstable_cache(cache(async (userId: string | number) => {
    return baseApi.get(`posts?userId=${userId}`).then(res => res.json())
}), ["userId"])


type Post = {
    id: number
    title: string
    body: string
    userId?: number
}


export const deletePost = async (id: string | number) => {
    return baseApi.delete(`posts/${id}`)
}

export const createPost = async ({ title, body, userId }: Post) => {
    return baseApi.post("posts", { title, body, userId }).then(res => res.json())
}

export const editPost = async ({ id, title, body, userId }: Post) => {
    return baseApi.update(`posts/${id}`, { title, body, userId }).then(res => res.json())
}



function wait(ms: number) { return new Promise(resolve => setTimeout(resolve, ms)) }
