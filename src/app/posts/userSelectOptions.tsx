import { getUsers } from "@/db/users"

type User = {
    id: number
    name: string
}

export async function UserSelectOptions({
    withAnyOption = false,
}: {
    withAnyOption?: boolean
}) {
    const users = await getUsers()
    return (
        <>
            {withAnyOption && <option value="">Any</option>}
            {users.map((user: User) => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </>
    )
}
