import { getTodos } from "@/db/todos"
import { Skeleton, SkeletonList } from "@/components/Skeleton"
import { TodoItem } from "@/components/TodoItem"
import { Suspense } from "react"

type Todo = {
    id: number
    title: string
    completed: boolean
}

export default function TodosPage() {
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={10}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <TodosList />
        </Suspense>
      </ul>
    </>
  )
}

async function TodosList() {
  const todos = await getTodos()

  return todos.map((todo: Todo) => <TodoItem key={todo.id} {...todo} />)
}
