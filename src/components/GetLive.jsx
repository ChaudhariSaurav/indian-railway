import { useState } from 'react';
import axios from 'axios';

function GETLive() {
    const [trainNo, setTrainNo] = useState('');
    const [doj, setdoj] = useState('')
    const [live, setLive] = useState(null);
    const [loading, setLoading] = useState(false);

    const [searchString, setSearchString] = useState('');


    const fetchLiveRoute = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://railway-a3r5.onrender.com/getLive/${trainNo}/${searchString}/${convertedDate}`);
            setLive(response.data);
        } catch (error) {

            console.error(error);
            // Handle errors
        } finally {
            setLoading(false);
        }
    };
    const inputDate = doj;
    const dateObject = new Date(inputDate);

    dateObject.setDate(dateObject.getDate());

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to the month because it's zero-based
    const day = dateObject.getDate().toString().padStart(2, '0');

    const convertedDate = `${year}${month}${day}`;




    return (
        <div className='shadow-xl  w-full'>
            <div className='p-10 bg-slate-200 gap-x-5 text-center'>
                <h1 >{live?.trainNumber}  Live Running Status</h1>
                <h3>{live?.trainName} </h3>
            </div>
            <div className="max-w-2xl mx-auto mt-6 p-5 ">
                <div className="relative">

                    <div className="mb-2">
                        <input
                            type="search"
                            id="default-search"
                            value={trainNo}
                            onChange={(e) => setTrainNo(e.target.value)}
                            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Train Number (12345)"
                            maxLength={5}
                            required="true"
                            autoComplete={false}
                        />
                    </div>

                    <div className="mb-2">

                        <input
                            type="text"
                            id="default-search"
                            className="block p-4 pl-10 w-full uppercase text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Sorce Station(NDLS)"
                            value={searchString}
                            onChange={(e) => setSearchString(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <input
                            type="date"
                            id="date"
                            value={doj}
                            onChange={(e) => setdoj(e.target.value)}
                            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter date of journey"
                            required=""
                        />
                    </div>

                    <div className="mb-2">
                        <button
                            type="submit"
                            onClick={fetchLiveRoute}
                            className="text-white w-full  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Live Running Status
                        </button>
                    </div>
                </div>




            </div>
            <div >

                {loading && (
                    <p className='text-center h-screen place-content-center justify-center text-xl'>
                        <div className="container text-center">
                            <div className="content w-full text-center">
                                <div className="track" />
                                <div className="train">
                                    <div className="front" />
                                    <div className="wheels">
                                        <div className="smallOne" />
                                        <div className="smallTwo" />
                                        <div className="smallThree" />
                                        <div className="smallFour" />
                                        <div className="smallFive" />
                                        <div className="smallSix" />
                                        <div className="big" />
                                    </div>
                                    <div className="cord" />
                                    <div className="coach" />
                                    <div className="coachTwo" />
                                    <div className="windows" />
                                    <div id="up" className="steam" />
                                    <div id="up" className="steam2" />
                                    <div id="up" className="steam3" />
                                </div>
                            </div>
                        </div>
                    </p>
                )}

                {!loading && (
                    <>
                        <div className="overflow-x-auto">
                            {live && (
                                <>
                                    <table className="min-w-full bg-white/10 border border-gray-300 rounded-lg shadow-xl">
                                        <thead>
                                            <tr>
                                                <th className="border-b py-2 px-4 text-left">Last Halt Station</th>
                                                <th className="border-b py-2 px-4 text-left">Currently at</th>
                                                <th className="border-b py-2 px-4 text-left">Upcomming Station</th>
                                                <th className="border-b py-2 px-4 text-left">Last Halt Station Code</th>
                                                <th className="border-b py-2 px-4 text-left">Last Station Departure Time</th>
                                                <th className="border-b py-2 px-4 text-left">Running Status</th>
                                                <th className="border-b py-2 px-4 text-left">Status</th>
                                                <th className="border-b py-2 px-4 text-left">Messgae</th>
                                                <th className="border-b py-2 px-4 text-left">Last Updated</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-b py-2 px-4">{live?.lastHaltStation}</td>
                                                <td className="border-b py-2 px-4">{live?.currentlyAt}</td>
                                                <td className="border-b py-2 px-4">{live?.upcomingStation}</td>
                                                <td className="border-b py-2 px-4">{live?.lastHaltStationCode}</td>
                                                <td className="border-b py-2 px-4">{live?.lastStationDepartureTme}</td>
                                                <td className="border-b py-2 px-4">{live?.runningStatus.header}</td>
                                                <td className="border-b py-2 px-4">{live?.runningStatus?.status}</td>
                                                <td className="border-b py-2 px-4">{live?.runningStatus?.runningStatusMessage}</td>
                                                <td className="border-b py-2 px-4">{live?.ltsLastUpdated} {live?.ltsLastUpdatedTime}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            )}
                        </div>

                        <div className='grid grid-cols-1 gap-4 p-4 lg:grid lg:grid-cols-3 text-center '>
                            {live?.stations.map((station, index) => (
                                <div key={index} >

                                    <div className="shadow p-4 text-xl border border-slate-500 rounded-xl ">
                                        <p>Station Name: {station.stationName}</p>
                                        <p>Station Code: {station.stationCode}</p>
                                        <p>Distance From Origin: {station.distanceFromOrigin}</p>
                                        <p>Platform: {station.platform}</p>
                                        <p>Schedule Departure: {station.scheduledDepartureTime}</p>
                                        <p>Delay Departure: {station.delayDep} min</p>
                                        <p>Departure Time: {station.departureTime}</p>
                                        <p className={`text-lg ${station.hasArrived ? 'text-green-500 font-bold' : 'text-red-500'}`}>
                                            Arrival: {station.hasArrived ? 'Yes' : 'No'}
                                        </p>
                                        {/* Apply animation pulse class based on hasDeparted */}
                                        <p className={`text-lg ${station.hasDeparted ? '' : 'animate-pulse'}`}>
                                            Depart: {station.hasDeparted ? 'Yes' : 'No'}
                                        </p>
                                        {/* {station.intermediateStations && station.intermediateStations.length > 0 && (
                                            <div>
                                                <h3>Intermediate Stations:</h3>
                                                <ul>
                                                    {station.intermediateStations.map((intermediateStation, i) => (
                                                        <li key={i}>
                                                            {intermediateStation.stationName} - {intermediateStation.distanceFromOrigin} kms
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )} */}

                                    </div>


                                </div>
                            ))}
                        </div>


                    </>
                )}

            </div>

            {live?.stations.map((station, index) => (
                <div key={index}>
                    {/* Render intermediate stations */}
                    {station.intermediateStations && station.intermediateStations.length > 0 && (
                        <div className="shadow p-4 text-xl border border-slate-500 rounded-xl">
                            <h3>Intermediate Stations:</h3>
                            <ul>
                                {station.intermediateStations.map((intermediateStation, i) => (
                                    <li key={i}>
                                        {intermediateStation.stationName} - {intermediateStation.distanceFromOrigin} kms
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Check if currentlyAt is an intermediate station */}
                    {live?.currentlyAt === station.intermediateStations?.stationName && (
                        <div className="shadow p-4 text-xl border border-slate-500 rounded-xl">
                            <h3>Currently At Intermediate Station:</h3>
                            <p>Station Code: {station.stationCode}</p>
                            {/* Add other details you want to display */}
                        </div>
                    )}

                </div>
            ))}
        </div >
    );
}


export default GETLive;
