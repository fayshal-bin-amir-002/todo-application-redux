import { useDispatch, useSelector } from "react-redux";
import { filtercolor, filterstatus } from "../redux/filters/actions";

const FilterOptions = () => {

    const filters = useSelector((state) => state.filters); 
    const dispatch = useDispatch();

    const { status, colors } = filters;

    const handleStatusChange = (status) => {
        dispatch(filterstatus(status));
    }

    const handleColorChange = (color) => {
        if(colors.includes(color)) {
            dispatch(filtercolor(color, 'remove'));
        } else {
            dispatch(filtercolor(color, 'add'));
        }
        
    }

    return (
        <div className="flex justify-between items-center gap-3">
            <p className="text-sm text-gray-600">Filter Options : </p>
            <ul className="flex gap-1.5 items-center justify-center text-sm">
                <li className={`${status === 'All' && 'font-semibold'}`}><button onClick={() => handleStatusChange("All")}>All</button></li>
                <li>|</li>
                <li className={`${status === 'Complete' && 'font-semibold'}`}><button onClick={() => handleStatusChange("Complete")}>Complete</button></li>
                <li>|</li>
                <li className={`${status === 'Incomplete' && 'font-semibold'}`}><button onClick={() => handleStatusChange("Incomplete")}>Incomplete</button></li>
                <li>
                    <div className="flex justify-center items-center gap-1.5 ms-3">
                        <button onClick={() => handleColorChange("red")} className={`p-1.5 hover:bg-red-500 rounded-full border-2 border-red-500 ${colors.includes('red') && 'bg-red-500'}`}></button>

                        <button onClick={() => handleColorChange("green")} className={`p-1.5 hover:bg-green-500 rounded-full border-2 border-green-500 ${colors.includes('green') && 'bg-green-500'}`}></button>

                        <button onClick={() => handleColorChange("yellow")} className={`p-1.5 hover:bg-yellow-500 rounded-full border-2 border-yellow-500 ${colors.includes('yellow') && 'bg-yellow-500'}`}></button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FilterOptions;