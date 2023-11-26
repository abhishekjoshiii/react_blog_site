import React from 'react'

export const Postss = ({ data }) => {
    return (
        <div className=' p-1'>{data && data.map((post) => (
            <div className="card m-2" style={{ width: "100%" }} key={post.id}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Postss;