import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoLists = () => {

    const todos = useSelector((state) => state.todos); 

    return (
        <div className="border-t py-6">
            {
                todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default TodoLists;