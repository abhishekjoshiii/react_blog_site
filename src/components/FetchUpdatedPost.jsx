import React from 'react';

export const FetchUpdatedPost = ({ data, handleDelete, handleUpdateClick }) => {
    return (
        <>
            {data && data.map((post) => (
                <div className='p-1' key={post.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <button className='btn btn-danger m-1' onClick={() => handleDelete(post.id)}>Delete</button>
                            <button className='btn btn-primary m-1' onClick={() => handleUpdateClick(post)}>Update</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FetchUpdatedPost;