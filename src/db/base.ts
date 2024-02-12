


export const baseApi = {
    get: async (path: string) => {
        return await fetch(`http://localhost:3001/${path}`)
    },
    post: async (path: string, body: any) => {
        return await fetch(`http://localhost:3001/${path}`, { method: 'POST', body: JSON.stringify(body) }) 
    },
    update: async (path: string, body: any) => {
        return await fetch(`http://localhost:3001/${path}`, { method: 'PATCH', body: JSON.stringify(body) })
    },
    delete: async (path: string) => {
        return await fetch(`http://localhost:3001/${path}`, { method: 'DELETE' }).then(res => res.json())
    }

}
