import React from 'react'
import { Link } from 'react-router-dom'
import notfoundImage from './notfound.png';

const NotFound = () => {
  return (
    <>
        <section className='page notfound'>
          <div className="content">
            <img src={notfoundImage} alt="notfound" />
            <Link to={'/'}>RETURN TO HOME PAGE</Link>
          </div>
        </section>
    </>
  )
}

export default NotFound