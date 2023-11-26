import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateForm from '../components/UpdateForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManagePost = () => {
    const [data, setData] = useState(null);
    const [updatePost, setUpdatePost] = useState({ id: '', title: '', body: '' });
    const [selectedPostId, setSelectedPostId] = useState('');
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);

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

    return (
        <div className='pt-4'>

            <h2><img src='post.gif' alt=''></img>Manage Blogs</h2>
            {isUpdateFormVisible && (
                <UpdateForm updatePost={updatePost} setUpdatePost={setUpdatePost} handleUpdate={handleUpdate} />

            )}
            {data && data.slice().reverse().map((post) => (
                <div className='p-1'>
                    <div className="card" key={post.id} >
                        <div className="card-body ">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <button className='btn btn-danger m-1' onClick={() => handleDelete(post.id)}>Delete</button>
                            < button className='btn btn-primary m-1' onClick={() => handleUpdateClick(post)}>Update</button>
                        </div >
                    </div >
                </div >
            ))}
        </div >
    );
};

export default ManagePost;