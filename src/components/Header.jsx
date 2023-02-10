import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div>
            <div className='container'>
                <header className='home-header'>
                    <h2>Welcome to</h2>
                    <h1>
                        <span>“</span> Skincare Blog <span>”</span>
                    </h1>
                    <p>
                        Your skin deserves a routine as unique as you are. That's why we're always chatting with skin <br />
                        care experts and looking into the latest products, treatments and tips to help you create your <br />
                        perfect skin care routine. Whether your skin is sensitive, dry or acne-prone, you'll find tips for <br />
                        all your concerns.
                    </p>
                    <SearchBar></SearchBar>
                </header>
            </div>
        </div>
    )
}

export default Header