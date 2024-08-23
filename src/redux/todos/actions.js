import { ADDTODO, CLEARCOMPLETED, COMPLETEALL, DELETETODO, SELECTCOLOR, TOGGLECOMPLETE } from "./actionTypes"

export const addtodo = (todoText) => {
    return {
        type: ADDTODO,
        payload: todoText
    }
}

export const deletetodo = (todoId) => {
    return {
        type: DELETETODO,
        payload: todoId
    }
}

export const togglecomplete = (todoId) => {
    return {
        type: TOGGLECOMPLETE,
        payload: todoId
    }
}

export const completeall = () => {
    return {
        type: COMPLETEALL
    }
}

export const clearcompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}

export const selectcolor = (todoId, color) => {
    return {
        type: SELECTCOLOR,
        payload: {
            todoId, color
        }
    }
}