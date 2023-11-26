import axios from 'axios';

export const useDeletePost = () => {
    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => id)
            .catch(error => console.error('Error deleting post', error));
    };

    return deletePost;
};