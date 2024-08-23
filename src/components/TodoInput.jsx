import { RiPlayListAddLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const TodoInput = () => {
    return (
        <>
            <form>
                <div className="relative">
                    <input type="text" className="w-full bg-gray-100 text-xl p-5 text-gray-600 focus:outline-none rounded-lg" placeholder="Write your todo..." />
                    <button type="submit">
                        <RiPlayListAddLine className="absolute text-2xl right-5 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer duration-300 hover:text-emerald-600 " />
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