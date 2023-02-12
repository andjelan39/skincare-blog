import React from 'react'
import BlogItem from './BlogItem'

const Bookmarks = ({ blogs, removeFromBookmarks }) => {
  return (
    <div>
      <div className='container'>
          <div className='book-header'>
            <h2>Find your bookmarked blog posts right here.</h2>
          </div>
      </div>
        <div className='blogPosts-wrap'>
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.id} inBookmarks={0}
          removeFromBookmarks = {removeFromBookmarks}
           />
        ))}
      </div>
    </div>
  )
}

export default Bookmarks