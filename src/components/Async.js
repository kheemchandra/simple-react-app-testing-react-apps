import { useState, useEffect } from 'react';

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => setPosts(data));
  }, []);

  return <ul>
    {posts.map(post => <li key={post.id}><p>{post.title}</p></li>)}
  </ul>
};

export default Async;