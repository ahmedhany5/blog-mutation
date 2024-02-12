"use client"

import { deleteAction } from "@/app/actions/deleteAction"
import { revalidatePath } from "next/cache"


export function DeletePostBtn({ id }: { id: string | number }) {
    return (
        <button
            className="btn btn-danger"
            onClick={async () => {
                await deleteAction({ id })
                revalidatePath("/posts")
            }}
        >
            Delete
        </button>
    )
}
