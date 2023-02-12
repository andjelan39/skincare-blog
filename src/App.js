import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import BlogPosts from './components/BlogPosts';
import { blogPosts } from './config/data';
import Footer from './components/Footer';
import React, { useState } from 'react';
import Pagination from './components/Pagination';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarks from './components/Bookmarks';
import Blog from './components/Blog';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogPosts.slice(firstPostIndex, lastPostIndex);

  const [bookmark, setBookmark] = useState([]);

  function refreshBook() {
    let bookBlog = blogPosts.filter((blog) => blog.bookmarked == true);
    setBookmark(bookBlog);
  }

  function addToBookmarks(id) {
    blogPosts.forEach((blog) => {
      if(blog.id === id){
        blog.bookmarked = true;
        alert(
            blog.title +
            " is successfully added to your bookmarks!"   
        );
      }
    });
    refreshBook();
  }

  function removeFromBookmarks(id){
    blogPosts.forEach((blog) => {
      if(blog.id === id)
        blog.bookmarked = false;
    });
    refreshBook();
  }

  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={
          <React.Fragment>
            <Header />
            <BlogPosts blogs={currentPosts}
              addToBookmarks={addToBookmarks}
            />
            <Pagination
              totalPosts={blogPosts.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </React.Fragment>
        } />
        <Route path='/bookmarks' element={<Bookmarks blogs={bookmark} removeFromBookmarks={removeFromBookmarks} />} />
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
