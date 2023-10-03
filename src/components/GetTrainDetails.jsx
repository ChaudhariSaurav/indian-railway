import { useState } from 'react';
import axios from 'axios';
// import { Input, InputGroup, } from 'rsuite';
// import SearchIcon from '@rsuite/icons/Search';

function App() {
  const [trainNo, setTrainNo] = useState('');
  const [trainData, setTrainData] = useState(null);
  const [loading, setLoading] = useState(false); // Add a loading state


  const fetchTrainData = async () => {
    setLoading(true); // Set loading to true while fetching data
    try {
      const response = await axios.get(`http://localhost:5555/getTrainData/${trainNo}`);
      setTrainData(response.data);
    } catch (error) {
      console.error(error);
      // Handle errors
    } finally {
      setLoading(false); // Set loading to false when the request is complete or when there's an error
    }
  };
  if (!loading) {
    <p>
      PLease wait....
    </p>
  }



  return (
    <div className='shadow'>
      <h1 className=' text-center mt-5'>Indian Railway Data</h1>
      <div className='flex gap-2 p-4 text-center'>
        <input
          type="text"
          className="block p-4 pl-10 w-50 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Train Number"
          value={trainNo}
          required={true}
          onChange={(e) => setTrainNo(e.target.value)}
        />
        <button onClick={fetchTrainData}
          className="text-white bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

        >Fetch Train Info</button>


      </div>




      {trainData && (
        <>

          <div className='shadow-xl p-4 text-xl'>
            <h2>Train Information</h2>
            <p>Train Number: {trainData?.data?.train_no}</p>
            <p className='font-semibold'>Train Name: {trainData?.data?.train_name}</p>
            <p>From Station: {trainData?.data?.from_stn_name} ({trainData?.data?.from_stn_code})</p>
            <p>To Station: {trainData?.data?.to_stn_name} ({trainData?.data?.to_stn_code})</p>
            <p>Departure Time: {trainData?.data?.from_time}</p>
            <p>Arrival Time: {trainData?.data?.to_time}</p>
            <p>Travel Time: {trainData?.data?.travel_time}</p>
            <p>Type: {trainData?.data?.type}</p>
            <p>Train ID: {trainData?.data?.train_id}</p>
            <p>Distance: {trainData?.data?.distance_from_to} km</p>
            <p>Average Speed: {trainData?.data?.average_speed} km/h</p>
          </div>
        </>
      )}



    </div >
  );
}

export default App;
