import { useState } from 'react';
import axios from 'axios';

function GetRoute() {
    const [trainNo, setTrainNo] = useState('');
    const [routeData, setRouteData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchTrainRoute = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5555/getRoute/${trainNo}`);
            setRouteData(response.data);
        } catch (error) {
            console.error(error);
            // Handle errors
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        <>
            <p>Please wait....</p>
        </>
    }
    return (
        <div>
            <h1 className='text-center mt-5 gap-x-5'>Indian Railway Train Route</h1>
            <div className="max-w-2xl mx-auto">
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        value={trainNo}
                        onChange={(e) => setTrainNo(e.target.value)}
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Train Number"
                        required=""
                    />
                    <button
                        type="submit"
                        onClick={fetchTrainRoute}
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Fetch route
                    </button>
                </div>

            </div>
            <div >

                {routeData && (
                    <>
                        <div className='flex-col w-full p-5'>
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#082b71] dark:text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Source Station Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Source Station Code
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Arrival
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Depart
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Distance
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Day
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Zone
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {routeData.data.map((item, index) => (
                                            <tr key={index}
                                                className="bg-gray-300 border-b dark:bg-gray-800 dark:border-gray-900">
                                                <td className="px-6 py-4">{item.source_stn_name}</td>
                                                <td className="px-6 py-4">{item.source_stn_code}</td>
                                                <td className="px-6 py-4">{item.arrive}</td>
                                                <td className="px-6 py-4">{item.depart}</td>
                                                <td className="px-6 py-4">{item.distance}</td>
                                                <td className="px-6 py-4">{item.day}</td>
                                                <td className="px-6 py-4">{item.zone}</td>


                                                {/* Add more table data columns as needed */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </>
                )}

            </div>
        </div >
    );
}

export default GetRoute;
