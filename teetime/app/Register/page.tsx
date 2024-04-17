import Link from 'next/link'
import React from 'react'



const RegisterPage = () => {

  return (
    <div>
      <h1>RegisterPage</h1>
      <Link href={'/Users/' + Math.floor(Math.random() * 99)}>Register</Link>

    </div>

  )
}

export default RegisterPage