import { EditPostForm } from "@/components/EditPostForm";
import { getPost } from "@/db/posts";
import { notFound } from "next/navigation";


export const revalidate = 5

export default async function EditPostPage({ params: { postId } }: { params: { postId: string } }) {
    const post = await getPost(postId)

    if (!post) return notFound()

    return (
        <>
            <h1 className="page-title">Edit Post</h1>
            <EditPostForm post={post} />
        </>
    )
}
