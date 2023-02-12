import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer'>
                <div className='footer-content'>
                    <h3>Skincare Blog</h3>
                    <p>Brought to you by CeraVe. <br/> For contact and CeraVe products check the links below. </p>
                    <ul className='socials'>
                        <li><a href="https://twitter.com/cerave"><i> <AiOutlineTwitter/> </i></a></li>
                        <li><a href="https://www.instagram.com/cerave/"><i> <AiFillInstagram/> </i></a></li>
                        <li><a href="https://www.cerave.com/"><i> <CgWebsite/> </i></a></li>
                        <li><a href="https://www.facebook.com/CeraveSkincareUKI/"><i> <AiFillFacebook/> </i></a></li>
                    </ul>
                </div>
                <div className='footer-bottom'>
                    <p>copyright &copy;2023 CeraVe.</p>
                </div>
        </div>
    )
}

export default Footer