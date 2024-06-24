import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Link to="/" className='d-flex align-tems-center justify-content-center'>
      <img className='mt-3 mb-3' src="https://cdn.dribbble.com/users/644529/screenshots/2662296/404.gif" alt="" />
    </Link>
  )
}

export default Error