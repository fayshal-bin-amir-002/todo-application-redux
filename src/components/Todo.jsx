import PropTypes from 'prop-types';
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineRemoveDone } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

{/* <MdOutlineRemoveDone /> */}
const Todo = ({todo}) => {
    return (
        <div className='flex justify-between items-center gap-4 mb-1'>
            <div className='flex items-center gap-2'>
            <button className='border-2 text-emerald-600 border-emerald-600 p-0.5 rounded-full'><IoMdDoneAll /></button>
            <p className='text-sm text-gray-600 line-through'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, error.</p>
            </div>
            <div className='flex items-center gap-2'>
                <button className='p-2 bg-red-500 hover:bg-red-500 rounded-full border-2 border-red-500'></button>
                <button className='p-2 bg-green-500 hover:bg-green-500 rounded-full border-2 border-green-500'></button>
                <button className='p-2 bg-yellow-500 hover:bg-yellow-500 rounded-full border-2 border-yellow-500'></button>
                <button className='text-xl hover:scale-105 duration-300'><RxCrossCircled /></button>
            </div>
        </div>
    );
};

Todo.propTypes = {
    todo: PropTypes.object
};

export default Todo;