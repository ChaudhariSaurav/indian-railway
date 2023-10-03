import { useState } from 'react';
import axios from 'axios';

function SearchForm() {
    const [formData, setFormData] = useState({
        src: '',
        dst: '',
        doj: '',
    });

    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://railway-a3r5.onrender.com/search', formData);
            setSearchResult(response.data);
            setError(null);
        } catch (error) {
            setSearchResult(null);
            setError(error.response ? error.response.data.error : 'An error occurred');
        }
    };


    return (
        <div>
            <h1>Search Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Source:</label>
                    <input type="text" name="src" value={formData.src} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Destination:</label>
                    <input type="text" name="dst" value={formData.dst} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Date of Journey:</label>
                    <input type="date" name="doj" value={formData.doj} onChange={handleInputChange} />
                </div>
                {/* Add more input fields for other form data */}
                <button type="submit">Search</button>
            </form>

            {error && <p>Error: {error}</p>}

            {searchResult && (
                <div>
                    <h2>Search Result</h2>
                    {/* Display the search results here */}
                    <pre>{JSON.stringify(searchResult, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default SearchForm;
