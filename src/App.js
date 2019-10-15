import React, { useEffect, useState } from 'react';
import './App.css';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    try {
      let url = 'https://jsonplaceholder.typicode.com/posts';
  
      const postsRes = await fetch(url);
      const posts = await postsRes.json();

      setPosts(posts);
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id', // String-based value accessors!
      width: 50,
    },
    {
      Header: 'UserId',
      accessor: 'userId',
      width: 100,
    },
    {
      Header: 'Title',
      accessor: 'title',
      sortable: false,
    },
    {
      Header: 'Body',
      accessor: 'body',
      sortable: false,
    },
  ]

  return (
    <div className="App">
      <ReactTable
        data={posts}
        columns={columns}
        loading={loading}
        filterable
      />
    </div>
  );
}

export default App;
