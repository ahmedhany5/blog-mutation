import { getUsers } from "@/db/users"
import Link from "next/link"

type User = {
    id: number
    name: string
    companyName: string
    website: string
    email: string
}

export default async function UsersPage() {
    const users = await getUsers()

    return (
        <>
            <h1 className="page-title">Users</h1>
            <div className="card-grid">
                {users.map((user: User) => (
                    <div key={user.id} className="card">
                        <div className="card-header">{user.name}</div>
                        <div className="card-body">
                            <div>{user.companyName}</div>
                            <div>{user.website}</div>
                            <div>{user.email}</div>
                        </div>
                        <div className="card-footer">
                            <Link className="btn" href={`users/${user.id.toString()}`}>
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
