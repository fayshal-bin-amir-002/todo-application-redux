import PropTypes from 'prop-types';
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineRemoveDone } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { deletetodo, selectcolor, togglecomplete } from '../redux/todos/actions';

const Todo = ({ todo }) => {

    const dispatch = useDispatch();

    const { id, text, color, completed } = todo;

    const handleDeleteTodo = (todoId) => {
        dispatch(deletetodo(todoId));
    }

    const handleChangeColor = (todoId, color) => {
        dispatch(selectcolor(todoId, color))
    }

    const handleChangeStatus = (todoId) => {
        dispatch(togglecomplete(todoId));
    }

    return (
        <div className='flex justify-between items-center gap-4 mb-2 pb-2 border-b'>
            <div className='flex items-center gap-2'>
                <button onClick={() => handleChangeStatus(id)} className='border-2 text-emerald-600 border-emerald-600 p-0.5 rounded-full'>{completed ? <IoMdDoneAll /> : <MdOutlineRemoveDone />}</button>
                <p className={`text-sm text-gray-600 ${completed && 'line-through'}`}>{text}</p>
            </div>
            <div className='flex items-center gap-2'>
                <button onClick={() => handleChangeColor(id, 'red')} className={`p-2 hover:bg-red-500 rounded-full border-2 border-red-500 ${color === 'red' && 'bg-red-500'}`}></button>

                <button onClick={() => handleChangeColor(id, 'green')} className={`p-2 hover:bg-green-500 rounded-full border-2 border-green-500 ${color === 'green' && 'bg-green-500'}`}></button>

                <button onClick={() => handleChangeColor(id, 'yellow')} className={`p-2 hover:bg-yellow-500 rounded-full border-2 border-yellow-500 ${color === 'yellow' && 'bg-yellow-500'}`}></button>

                <button onClick={() => handleDeleteTodo(id)} className='text-xl hover:scale-105 duration-300'><RxCrossCircled /></button>
            </div>
        </div>
    );
};

Todo.propTypes = {
    todo: PropTypes.object
};

export default Todo;