import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      TeeTime
      <Link href='/'> Home </Link>
      <Link href='/Rules'>  Rules </Link>
      <Link href='/Courses'>  Courses</Link>
      <Link href='/Profile'></Link>
    </div>
  )
}

export default Navbar