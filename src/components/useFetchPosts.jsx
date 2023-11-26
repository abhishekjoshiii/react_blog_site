import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchPosts = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data', error));
    }, []);

    return data;
};