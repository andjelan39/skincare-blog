import React from 'react'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className='navBar'>
        <Link to='/'>Skincare Blog</Link>
        <div className='bookmarked-posts'>
          <p><Link to='/bookmarks'> Bookmarks </Link> </p> <BsBookmarkHeartFill/>
        </div>
    </div>
  )
}

export default NavBar