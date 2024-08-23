import { useState } from "react";
import toast from "react-hot-toast";
import { RiPlayListAddLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/todos/actions";

const TodoInput = () => {

    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(text.trim() === '') {
            return toast.error("First write your todo!");
        }
        dispatch(addtodo(text));
        setText("");
        toast.success("Todo added successfully!");
    } 

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <div className="relative">
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="w-full bg-gray-100 text-xl p-5 text-gray-600 focus:outline-none rounded-lg" placeholder="Write your todo..." />

                    <button type="submit" title="Add your todo" className="bg-emerald-300 absolute p-2 rounded-full text-2xl right-5 top-1/2 -translate-y-1/2 cursor-pointer duration-300 hover:bg-emerald-500 ">
                        <RiPlayListAddLine />
                    </button>
                </div>
            </form>
            <div className="flex items-center justify-between py-5 text-gray-600 font-light text-sm">
                <button className="px-2 py-0.5 bg-gray-100 hover:bg-gray-200 duration-300 rounded-lg flex items-center gap-1">Complete All Tasks <TiTick className="text-lg text-emerald-600" /></button>
                <button className="px-2 py-0.5 bg-gray-100 hover:bg-gray-200 duration-300 rounded-lg">Clear All Completed</button>
            </div>
        </>
    );
};

export default TodoInput;