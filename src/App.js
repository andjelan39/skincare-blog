import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import BlogPosts from './components/BlogPosts';
import {blogPosts} from './config/data';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Header/>
       <BlogPosts blogs={blogPosts}/>
       <Footer/>
    </div>
  );
}

export default App;
