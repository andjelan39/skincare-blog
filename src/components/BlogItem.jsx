import React from 'react'
import {AiFillLike} from 'react-icons/ai'
import {BsFillBookmarkPlusFill} from 'react-icons/bs'
import {FaArrowRight} from 'react-icons/fa'

const BlogItem = ({ blog:{
    cover,
    title,
    category,
    shortDesc,
    authorName,
    authorAvatar,
    createdAt,
}
}) => {
    return (
            <div className="card">
                <div className="card-header">
                    <img src={cover} alt="cover" className='card-img' />
                </div>
                <div className="card-body">
                    <span className="tag tag-blue">{category}</span>
                    <h2>{title}</h2>
                    <p>{shortDesc}</p>
                </div>
                <div className="card-footer">
                    <div className="user">
                        <img src={authorAvatar} alt="user" className='user-img' />
                        <div className="user-info">
                            <h5>{authorName}</h5>
                            <small>{createdAt}</small>
                        </div>
                    </div>
                    <div className="card-buttons">
                        <button><AiFillLike/></button>
                        <button><BsFillBookmarkPlusFill/></button>
                        <button><FaArrowRight/></button>
                    </div>
                </div>
            </div>
    )
}

export default BlogItem