import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
import { BsBookmarkXFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

const BlogItem = ({ blog: {
    cover,
    title,
    category,
    description,
    shortDesc,
    authorName,
    authorAvatar,
    createdAt,
    id,
}, addToBookmarks, inBookmarks, removeFromBookmarks
}) => {
    const data = {
        title: title,
        description: description,
        cover: cover,
        authorName: authorName,
        createdAt: createdAt
    }
    const[btnColor, setBtnColor]=useState("btn");

    return (
        <div className="card">
            <div className="card-header">
                <img src={cover} alt="cover" className='card-img' />
            </div>
            <div className="card-body">
                <span className="tag">{category}</span>
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
                {inBookmarks === 1 ? (<div className="card-buttons">
                    <button className={btnColor} onClick={()=>setBtnColor((btnColor)=>(btnColor==="btn" ? "btn-red" : "btn"))}><AiFillLike /></button>
                    <button className='btn' onClick={() => addToBookmarks(id)}><BsFillBookmarkPlusFill /></button>
                    <Link to='/blog' state={data}><button className='btn'><FaArrowRight /></button></Link>
                </div>) : (<div className="card-buttons">
                    <button onClick={() => removeFromBookmarks(id)} className='btn'><BsBookmarkXFill /></button>
                    <Link to='/blog' state={data}><button className='btn'><FaArrowRight /></button></Link>
                </div>)}
            </div>
        </div>
    )
}

export default BlogItem