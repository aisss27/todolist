import React, {useEffect, useState} from 'react'
import {todolistApi} from '../api/todolist-api';


export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = todolistApi.getTodos()
        promise.then((res) => {
            setState(res.data)
        })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const payload = {
            title: 'Sport'
        }
        todolistApi.createTodolist(payload)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todoId = 'b061d41a-e485-42eb-81dd-3b9d40200ba2';
        todolistApi.deleteTodolist(todoId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'e74872f5-6fe2-4cd8-91c7-4bfe56a76cf5';
        const title: string = 'React'
        todolistApi.updateTodolist(todoId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


