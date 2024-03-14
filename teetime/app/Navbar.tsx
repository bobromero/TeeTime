import Link from 'next/link'
import React from 'react'
import { QueryImage } from './PhotoServer'

const Navbar = () => {
  return (
    <div className="grid grid-cols-9">

      <Link href='/' className="flex justify-center  items-center Nav-grid-item"><img src={QueryImage(1, 3)}
        height={50}
        width={50}
      />TeeTime</Link>
      <div></div>
      <div></div>
      <div></div>
      <Link className="flex justify-center Nav-grid-item" href='/Courses'>  Search Courses</Link>
      <div></div>
      <div></div>
      <Link className="flex justify-center Nav-grid-item" href='/Rules'>  Rules </Link>
      <Link className="flex justify-center Nav-grid-item" href='/Profile'>Profile</Link>
    </div >
  )
}

export default Navbar