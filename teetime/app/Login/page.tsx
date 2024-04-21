import Link from 'next/link'
import React from 'react'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div>

      <LoginForm />
      <Link href={'/Register/'}>Register Here</Link>

    </div>
  )
}

export default Login