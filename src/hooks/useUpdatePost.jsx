import { useState } from 'react';
import axios from 'axios';

export const useUpdatePost = () => {
    const [updatePostData, setUpdatePostData] = useState({ id: '', title: '', body: '' });

    const updatePostHandler = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${updatePostData.id}`, updatePostData)
            .then(response => {
                setUpdatePostData({ id: '', title: '', body: '' });
                return response.data;
            })
            .catch(error => console.error('Error updating post', error));
    };

    return [updatePostData, setUpdatePostData, updatePostHandler];
};