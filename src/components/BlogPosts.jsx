import React from 'react'
import BlogItem from './BlogItem'

const BlogPosts = ({ blogs, addToBookmarks }) => {

  return (
    <div>
      <div className='blogPosts-wrap'>
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.id} inBookmarks={1}
            addToBookmarks={addToBookmarks}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPosts