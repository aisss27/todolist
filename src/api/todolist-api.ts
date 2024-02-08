import axios from 'axios'



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY' : 'a429c398-ce89-4afe-a373-d7c853606dc1'
    }
})

export const todolistApi = {
    getTodos() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(payload: { title: string }) {
        return instance.post<ResponseType<{item:TodolistType}>>('todo-lists', payload)
    },
    deleteTodolist(todoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
    },
    updateTodolist(todoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
    },
    getTasks(todolistId: string) {
        return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`);
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    },
    updateTask(todolistId:string,taskId:string,model:UpdateTaskType){
      return instance.put<UpdateTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    },
}

type ResponseType<T = {}> ={
    resultCode: number
    messages: string[]
    data: T
    fieldErrors: string[]
}


type TodolistType = {
    'id': string,
    'title': string
    'addedDate': Date
    'order': number
}

export type TaskType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todolistId: string
    order: number
    addedDate: string
}

export type UpdateTaskType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

type GetTaskResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}