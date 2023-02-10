import React from 'react'
import {BsBookmarkHeartFill} from 'react-icons/bs'

function NavBar() {
  return (
    <div className='navBar'>
        <a>Skincare Blog</a>
        <div className='bookmarked-posts'>
          <BsBookmarkHeartFill/>
          <p className="broj-postova">0</p>
        </div>
    </div>
  )
}

export default NavBar