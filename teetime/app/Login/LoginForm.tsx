"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

import { useState } from 'react';

export function LoginForm() {
  const router = useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(username, password)
    const golfer = {
      username, password
    }
    const res = await fetch('/api/LoginRequest', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(golfer)
    })
    console.log(res.status);
    if (res.status === 201) {
      router.push('/Users/' + username)
      router.refresh()
      setIsLoading(false);
      return;
    }
    router.refresh()
    setIsLoading(false);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username:</span>
        <input
          required
          type="text"
          onChange={(e) => (setUsername(e.target.value))}
          value={username}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="text"
          onChange={(e) => (setPassword(e.target.value))}
          value={password}
        />
      </label>
      <button className='btn-primary'
        disabled={isLoading}
      >
        {isLoading && <span>Loading...</span>}
        {!isLoading && <span>Login</span>}
      </button>
    </form>
  )
}

export default LoginForm