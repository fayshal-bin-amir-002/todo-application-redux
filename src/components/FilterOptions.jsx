const FilterOptions = () => {
    return (
        <div className="flex justify-between items-center gap-3">
            <p className="text-sm text-gray-600">Filter Options : </p>
            <ul className="flex gap-1.5 items-center justify-center text-sm font-medium">
                <li><button>All</button></li>
                <li>|</li>
                <li><button>Complete</button></li>
                <li>|</li>
                <li><button>Uncomplete</button></li>
                <li>
                    <div className="flex justify-center items-center gap-1.5 ms-3">
                        <button className='p-1.5 bg-red-500 hover:bg-red-500 rounded-full border-2 border-red-500'></button>
                        <button className='p-1.5 bg-green-500 hover:bg-green-500 rounded-full border-2 border-green-500'></button>
                        <button className='p-1.5 bg-yellow-500 hover:bg-yellow-500 rounded-full border-2 border-yellow-500'></button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FilterOptions;