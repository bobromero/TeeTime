import Link from 'next/link'
import React from 'react'
import { QueryImage } from './PhotoServer'

const Navbar = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="flex justify-center items-center Nav-grid-item"><img src={QueryImage(1, 3)}
        height={50}
        width={50}
      /></div>

      <Link className="flex justify-center Nav-grid-item" href='/'>TeeTime</Link>

      <Link className="flex justify-center Nav-grid-item" href='/'> Home </Link>
      <Link className="flex justify-center Nav-grid-item" href='/Rules'>  Rules </Link>
      <Link className="flex justify-center Nav-grid-item" href='/Courses'>  Courses</Link>
      <Link className="flex justify-center Nav-grid-item" href='/Profile'>

        Profile
      </Link>
    </div >
  )
}

export default Navbar