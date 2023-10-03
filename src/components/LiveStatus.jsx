import { useState } from 'react';
import axios from 'axios';

function LiveRunningStatus() {
    const [trainNo, setTrainNo] = useState('');
    const [liverunningData, setliverunningData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchLiveRunning = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://railway-a3r5.onrender.com/getLtsDetails/${trainNo}`);
            setliverunningData(response.data);
        } catch (error) {
            console.error(error);
            // Handle errors
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <h1 className='text-center mt-5 gap-x-5'>Indian Railway </h1>
            <div className="max-w-2xl mx-auto p-5">
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
                        onClick={fetchLiveRunning}
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Fetch route
                    </button>
                </div>

            </div>
            <div >
                {loading && <p className='text-center mt-5 h-screen justify-center text-xl'>Please wait....</p>}
                <div>
                    {liverunningData && (
                        <table className="w-full table-auto overflow-x-auto" >
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Train Number</th>
                                    <th className="px-4 py-2">Train Name</th>
                                    <th className="px-4 py-2">Running Date</th>
                                    <th className="px-4 py-2 text-green-600">Current At</th>
                                    <th className="px-4 py-2">Last Halt At</th>
                                    <th className="px-4 py-2">Upcoming Station At</th>
                                    <th className="px-4 py-2">Running Status</th>
                                    <th className="px-4 py-2 text-red-600 font-semibold">Delayed By</th>
                                    <th className="px-4 py-2">Last Update Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">{liverunningData?.trainNumber}</td>
                                    <td className="border px-4 py-2">{liverunningData?.trainName}</td>
                                    <td className="border px-4 py-2">{liverunningData?.consideredRunningDate}</td>
                                    <td className="border px-4 py-2  text-green-600 font-semibold">{liverunningData?.currentlyAt}</td>
                                    <td className="border px-4 py-2">{liverunningData?.lastHaltStation}</td>
                                    <td className="border px-4 py-2">{liverunningData?.upcomingStation}</td>
                                    <td className="border px-4 py-2">{liverunningData?.runningStatus?.status}</td>
                                    <td className="border px-4 py-2 text-red-600 font-semibold">{liverunningData?.runningStatus?.header}</td>
                                    <td className="border px-4 py-2">{liverunningData?.ltsLastUpdatedTime}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>


                {/* {liverunningData?.trainNumber} */}

            </div>
        </div>
    );
}

export default LiveRunningStatus;
