import React from 'react';
import useFetch from './useFetch';
import './PostsList.css'; 

const PostsList = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="posts-list">
            <h2>Posts</h2>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
