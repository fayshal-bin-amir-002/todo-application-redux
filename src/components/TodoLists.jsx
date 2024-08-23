import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoLists = () => {

    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);

    const { status, colors } = filters;

    return (
        <div className="border-t py-6">
            {
                todos
                    .filter((todo) => {
                        switch (status) {
                            case 'Complete':
                                return todo.completed;

                            case 'Incomplete':
                                return !todo.completed;

                            default:
                                return todo;
                        }
                    })
                    .filter((todo) => {
                        if(colors.length > 0) {
                            return colors.includes(todo.color);
                        } else {
                            return todo;
                        }
                    })
                    .map((todo) => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default TodoLists;