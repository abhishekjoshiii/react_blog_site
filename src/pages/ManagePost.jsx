import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateForm from '../components/UpdateForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '../components/Pagination';
import FetchUpdatedPost from '../components/FetchUpdatedPost';

const ManagePost = () => {
    const [data, setData] = useState([]);
    const [updatePost, setUpdatePost] = useState({ id: '', title: '', body: '' });
    const [selectedPostId, setSelectedPostId] = useState('');
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
        // .catch(error => console.error('Error fetching data', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setData(data.filter(post => post.id !== id));
            })
            .catch(error => console.error('Error deleting post', error));
    };
    const handleUpdate = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${selectedPostId}`, updatePost)
            .then(response => {
                setData(data.map(post => post.id === selectedPostId ? response.data : post));
                setUpdatePost({ id: '', title: '', body: '' });
                setSelectedPostId('');
                setIsUpdateFormVisible(false);
            })
            .catch(error => console.error('Error updating post', error));
    };

    const handleUpdateClick = (post) => {
        setUpdatePost({ id: post.id, title: post.title, body: post.body });
        setSelectedPostId(post.id);
        setIsUpdateFormVisible(true);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className='pt-4'>

            <h2><img src='post.gif' alt=''></img>Manage Blogs</h2>
            {isUpdateFormVisible && (
                <UpdateForm updatePost={updatePost} setUpdatePost={setUpdatePost} handleUpdate={handleUpdate} />

            )}

            <FetchUpdatedPost data={currentPosts} handleDelete={handleDelete} handleUpdateClick={handleUpdateClick} />
            <div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate} /></div>
        </div >
    );
};

export default ManagePost;