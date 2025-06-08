import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const GalleryPage = () => {
  return (
       <div className="portal-wrapper">
        <Nav />
        <Header title="Gallery"/>
        <main className="main">
            <div className='img-container'>
                <img src="Images/picture1.jpg" alt="image" />
                <img src="Images/picture2.jpg" alt="image" />
                <img src="Images/picture3.jpg" alt="image" />
                <img src="Images/picture4.jpg" alt="image" />
                <img src="Images/picture5.jpg" alt="image" />
                <img src="Images/picture6.jpg" alt="image" />
                <img src="Images/picture7.jpg" alt="image" />
                <img src="Images/picture8.jpg" alt="image" />
                <img src="Images/picture9.jpg" alt="image" />
                <img src="Images/picture10.jpg" alt="image" />
                <img src="Images/picture11.jpg" alt="image" />
                <img src="Images/picture12.jpg" alt="image" />
            </div>
           
        </main>
        <Footer /> 
    </div>
  )
}

export default GalleryPage