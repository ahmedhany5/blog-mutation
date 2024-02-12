"use client"

import { deleteAction } from "@/app/actions/deleteAction"


export function DeletePostBtn({ id, userId }: { id: string | number, userId: string | number }) {
    return (
        <button
            className="btn btn-danger"
            onClick={async () => {
                await deleteAction({ id, userId })
            }}
        >
            Delete
        </button>
    )
}
