import { useState } from 'react';
import axios from 'axios';


function GetStation() {
    const [fromStation, setFromStation] = useState('');
    const [toStation, setToStation] = useState('');
    const [stationsData, setStationsData] = useState(null);
    const [loading, setLoading] = useState(false);


    // running day 
    const fetchStationsBetween = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5555/stationsBetween?from=${fromStation}&to=${toStation}`);
            setStationsData(response.data);
        } catch (error) {
            console.error(error);
            // Handle errors
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='shadow text-center' >
            <h1 className='text-center mt-5 gap-x-5'>Indian Railway Stations Between</h1>

            <div className="p-5 grid gap-6 mb-6 md:grid-cols-3">
                <div>

                    <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="From Station (Code)"
                        value={fromStation}
                        onChange={(e) => setFromStation(e.target.value)}
                        required=""
                    />
                </div>
                <div>

                    <input
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="To Station (Code)"
                        value={toStation}
                        onChange={(e) => setToStation(e.target.value)}
                        required=""
                    />
                </div>
                <div>

                    <button
                        type="button"
                        onClick={fetchStationsBetween}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Fetch Station
                    </button>

                </div>

            </div>








            {loading ? (
                <p className='h-screen justify-center p-5 mt-6 '>Loading...</p>
            ) : (
                <>
                    {stationsData && (
                        <>
                            <div className='flex-col w-full p-5'>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#082b71] dark:text-white">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Train Number
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Train Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Start
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    End
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    From
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    From Time
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    To
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    To Time
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Time Travel
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stationsData.data.map((item, index) => (
                                                <tr key={index}
                                                    className="bg-gray-300 border-b dark:bg-gray-800 dark:border-gray-900">
                                                    <td className="px-6 py-4">{item.train_base?.train_no}</td>
                                                    <td className="px-6 py-4">{item.train_base?.train_name}</td>
                                                    <td className="px-6 py-4">{item.train_base?.source_stn_name}</td>
                                                    <td className="px-6 py-4">{item.train_base?.dstn_stn_name}</td>
                                                    <td className="px-6 py-4">{item.train_base?.from_stn_name}</td>
                                                    <td className="px-6 py-4">{item.train_base?.from_time}</td>
                                                    <td className="px-6 py-4">{item.train_base?.to_stn_name}</td>
                                                    <td className="px-6 py-4">{item.train_base?.to_time}</td>
                                                    <td className="px-6 py-4">{item.train_base?.travel_time}</td>


                                                    {/* Add more table data columns as needed */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </>
                    )}

                </>
            )}

        </div>
    );
}

export default GetStation;
