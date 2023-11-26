import { useState } from 'react';
import axios from 'axios';

export const useCreatePost = () => {
    const [newPost, setNewPost] = useState({ title: '', body: '' });

    const createPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(response => {
                setNewPost({ title: '', body: '' });
                return response.data;
            })
            .catch(error => console.error('Error creating post', error));
    };

    return [newPost, setNewPost, createPost];
};