import React from 'react'
import BlogItem from './BlogItem'

const BlogPosts = ({blogs}) => {
  return (
    <div className='blogPosts-wrap'>
        {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  )
}

export default BlogPosts