import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from './loadingScreen';

function GtPnr() {
    const [pnr, setPnr] = useState('');
    const [loading, setLoading] = useState(false);
    const [pnrData, setPnrData] = useState(null);
    const [error, setError] = useState(null);


    const key = `012562ae-60a9-4fcd-84d6-f1354ee1ea48`
    const api = `https://www.trainman.in/services/getPredictPnr?pnr=${pnr}&key=${key}&token=`;

    const fetchPnrStatus = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(api);
            setPnrData(response.data);
        } catch (error) {
            // setError('An error occurred while fetching PNR status');
            const response = await axios.get(api);
            console.error({ error });
            setError(response.data)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (pnrData) {
            // Handle the received PNR data, you can display it here
            console.log({ pnrData });
        }
    }, [pnrData]);



    return (
        <>

            <div className="p-4 rounded-lg h-fit flex-col">
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px]">
                        <h1 className="text-center text-4xl font-bold mb-7 ">PNR STATUS</h1>
                        <form action="#" onSubmit={fetchPnrStatus}>
                            <div className="max-w-2xl mx-auto mt-6">
                                <input
                                    type="search"
                                    id="default-search"
                                    value={pnr}
                                    onChange={(e) => setPnr(e.target.value)}
                                    className="block p-4 pl-10 w-full text-md font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter PNR Number"
                                    required
                                />
                                <button
                                    type="submit"
                                    onClick={fetchPnrStatus}

                                    className=" w-full mt-5 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
                                >
                                    {loading ? 'Fetching...' : 'Fetch PNR Status'}
                                </button>
                            </div>
                        </form>

                        <div className='mt-5 border-1 p-2'>

                            {loading && (
                                <div>
                                    <LoadingScreen />
                                </div>
                            )}

                            {!loading && (
                                <div className='grid grid-cols-1 border-1 bg-slate-100 border-gray-900 text-center  p-4 ring-1 rounded-lg'>
                                    {!pnrData && (<>
                                        <p>No results found</p>
                                    </>)}
                                    {error && <p className="text-red-500">{pnrData?.message}</p>}
                                    {pnrData && (
                                        <div>
                                            <p className='font-bold'>PNR NUMBER: {pnrData.pnr}</p>
                                            <p className='font-bold'>Train Name: {pnrData.pnr_data.train_code} - {pnrData.pnr_data.train_name}</p>
                                            <p>Date of Journey: {pnrData.pnr_data.travel_date}</p>
                                            <p>Boarding: {pnrData.pnr_data.boarding}&nbsp;({pnrData.pnr_data.boarding_code})</p>
                                            <p>Class: {pnrData.pnr_data.class_full}</p>
                                            <p>Upto: {pnrData.pnr_data.to_full}&nbsp;({pnrData.pnr_data.to})</p>
                                            <p>Fare: {pnrData.pnr_data.fare}</p>
                                            {pnrData.pnr_data.initial_passenger.map((index, i) => {
                                                return (
                                                    <div key={i}>
                                                        {/* <p>Booking Status : {index.booking_status}</p> */}
                                                        <p>Current Status : {index.current_status}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>





        </>

    );
}

export default GtPnr;
