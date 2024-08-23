import { ADDTODO, CLEARCOMPLETED, COMPLETEALL, DELETETODO, SELECTCOLOR, TOGGLECOMPLETE } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return [
                ...state,
                {
                    id: nextId(state),
                    text: action.payload,
                    completed: false
                }
            ];

        case DELETETODO:
            return state.filter((todo) => todo.id !== action.payload);

        case TOGGLECOMPLETE:
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo, completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            });

        case COMPLETEALL:
            return state.map((todo) => {
                return {
                    ...todo, completed: true
                }
            });

        case CLEARCOMPLETED:
            return state.filter((todo) => !todo.completed);

        case SELECTCOLOR:
            return state.map((todo) => {
                if(action.payload.todoId === todo.id) {
                    return {
                        ...todo, color: action.payload.color
                    }
                } else {
                    return todo;
                }
            });

        default:
            return state;
    }
}