"use client"


import { useRouter } from 'next/navigation';
import React from 'react'

import { useState } from 'react';

export function RegisterForm() {
  const router = useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [handicap, sethandicap] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(username, password)
    const golfer = {
      username, password, bio, handicap
    }
    const res = await fetch('/api/PostRegister', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(golfer)
    })
    console.log(res);
    if (res.status === 201) {
      router.push('/Users/' + username)
      router.refresh()
    }
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
      <label>
        <span>Bio:</span>
        <input
          required
          type="text"
          onChange={(e) => (setBio(e.target.value))}
          value={bio}
        />
      </label>
      <label>
        <span>Handicap:</span>
        <input
          required
          type="text"
          onChange={(e) => (sethandicap(e.target.value))}
          value={handicap}
        />
      </label>
      <button className='btn-primary'
        disabled={isLoading}
      >
        {isLoading && <span> Loading...</span>}
        {!isLoading && <span>Register</span>}
      </button>
    </form>
  )
}

export default RegisterForm