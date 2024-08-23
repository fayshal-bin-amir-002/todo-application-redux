import { combineReducers } from "redux";
import todosReducer from "./todos/todosReducer";
import filtersReducer from "./filters/filtersReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer;