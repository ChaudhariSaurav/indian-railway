import { useState, useEffect } from 'react';

function WelcomePage() {
    const [fromStnCode, setFromStnCode] = useState('');
    const [destStnCode, setDestStnCode] = useState('');
    const [doj, setDoj] = useState('');
    const [quota, setQuota] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the API URL
        const apiUrl = `https://securedapi.confirmtkt.com/api/platform/trainbooking/tatwnstns?fromStnCode=${fromStnCode}&destStnCode=${destStnCode}&doj=${doj}&token=&quota=${quota}&appVersion=290&androidid=mwebd_android`;

        if (submitting) {
            // Fetch data from the API
            fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setResponseData(data);
                    setSubmitting(false);
                    setError(null);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setSubmitting(false);
                    setError('An error occurred while fetching data.');
                });
        }
    }, [fromStnCode, destStnCode, doj, quota, submitting]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fromStnCode && destStnCode && doj && quota) {
            setSubmitting(true);
        } else {
            setError('Please fill in all fields');
        }
    };


    return (
        <div className="h-screen w-full  max-w-lg  justify-center item-center gap-2 p-4 text-center">
            <div className="text-center text-xl">Welcome to the Indian Railway </div>

            <div className=' className="flex flex-wrap -mx-3 mb-6" justify-center item-center text-center'>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label>
                        From Station Code:
                        <input type="text" placeholder='START FROM "NDLS"' className='p-2 uppercase ring-1 w-full gap-2 justify-center mt-4' value={fromStnCode} onChange={(e) => setFromStnCode(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Destination Station Code:
                        <input type="text" placeholder='END TO "BJU"' className='p-2 uppercase ring-1 w-full gap-2 justify-center mt-4' value={destStnCode} onChange={(e) => setDestStnCode(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Date of Journey:
                        <input type="text" placeholder='DATE OF JOURNEY "30-10-2023"' className='p-2 ring-1 w-full gap-2 justify-center mt-4' value={doj} onChange={(e) => setDoj(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Quota:
                        <input type="text" placeholder='QUOTA EG: TQ, GN, LD, DP, FT' className='p-2 uppercase ring-1 w-full gap-2 justify-center mt-4' value={quota} onChange={(e) => setQuota(e.target.value)} />
                    </label>
                    <br />
                    <button className='bg-blue-700 p-3 hover:bg-indigo-600 text-white' type="submit">Submit</button>
                </form>
                {submitting && <p>Submitting...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {responseData && (<>

                    {responseData.trainBtwnStnsList.map((train, index) => (
                        <div key={index}>
                            <p>Departure Time: {train.departureTime}</p>
                            <p>Train Name: {train.trainName}</p>
                            <hr />
                            {/* Include other train data fields as needed */}
                        </div>
                    ))}

                    {responseData.trainBtwnStnsList.avaiblitycache?.map((train, index) => (
                        <div key={index}>
                            <p>Train Name: {train?.Availability}</p>
                            {/* Include other train data fields as needed */}
                        </div>
                    ))}
                </>)}

            </div>
            <div>

                {/* {responseData && (
                    <div>
                        <h2>API Response:</h2>
                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    </div>
                )} */}

            </div>
        </div>
    )
}


export default WelcomePage
