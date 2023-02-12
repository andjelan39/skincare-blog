import React from 'react'
import { useLocation } from 'react-router-dom';

const Blog = () => {

  const location = useLocation();
  const data = location.state;

  const newDesc = data.description.split('\n').map(str => <p>{str}</p>);

  return (
    <div className='container'>
      <div className="blog-wrap">
        <header>
          <h1>{data.title}</h1>
          <p className='blog-date'>Published {data.createdAt}
          <br /> By: {data.authorName}</p>
        </header>
        <img src={data.cover} alt="cover" />
        <p className='blog-desc'>{newDesc}</p>
      </div>
    </div>
  )
}

export default Blog