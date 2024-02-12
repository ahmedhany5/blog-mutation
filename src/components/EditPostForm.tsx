import { Suspense } from "react"
import Link from "next/link"
import { UserSelectOptions } from "@/app/posts/userSelectOptions"
import { editPost } from "@/db/posts"
import { revalidatePath } from "next/cache"
import { FormGroup } from "./FormGroup"
import { SkeletonInput } from "./Skeleton"

type Post = {
    id: number
    title: string
    body: string
    userId?: number
}

export function EditPostForm({ post }: { post: any }) {
    return (
        <form className="form" action={async (FormData: { get: (arg0: string) => any }) => {

            "use server"
            await editPost({ id: post.id, title: FormData.get("title") || "", body: FormData.get("body") || "" })
            revalidatePath("/posts")
        }}>
            <input type="hidden" name="id" value={post.id} />
            <div className="form-row">
                <FormGroup errorMessage="Placeholder Error Message">
                    <label htmlFor="title">Title</label>
                    <input defaultValue={post.title} type="text" name="title" id="title" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="userId">Author</label>
                    <select defaultValue={post.userId} name="userId" id="userId">
                        <Suspense fallback={<option value="">Loading...</option>}>
                            <UserSelectOptions />
                        </Suspense>
                    </select>
                </FormGroup>
            </div>
            <div className="form-row">
                <FormGroup>
                    <label htmlFor="body">Body</label>
                    <textarea defaultValue={post.body} name="body" id="body" />
                </FormGroup>
            </div>
            <div className="form-row form-btn-row">
                <Link className="btn btn-outline" href="/posts">
                    Cancel
                </Link>
                <button className="btn">Save</button>
            </div>
        </form>
    )
}

export function SkeletonPostForm() {
    return (
        <form className="form">
            <div className="form-row">
                <FormGroup>
                    <label htmlFor="title">Title</label>
                    <SkeletonInput />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="userId">Author</label>
                    <SkeletonInput />
                </FormGroup>
            </div>
            <div className="form-row">
                <FormGroup>
                    <label htmlFor="body">Body</label>
                    <SkeletonInput />
                </FormGroup>
            </div>
            <div className="form-row form-btn-row">
                <Link className="btn btn-outline" href="/posts">
                    Cancel
                </Link>
                <button disabled className="btn">
                    Save
                </button>
            </div>
        </form>
    )
}
