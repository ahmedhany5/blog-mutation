
"use server"
import { deletePost } from "@/db/posts"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
export async function deleteAction({ id }: { id: string | number }) {
    await deletePost(id)
    revalidatePath("/posts")

    return redirect("/posts")
}


function wait(ms: number) {
    return Promise.resolve((res: any) => setTimeout(res, ms))
}
