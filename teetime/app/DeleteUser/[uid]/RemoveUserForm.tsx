"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

import { useState } from 'react';
import { UserInfo } from '../../Users/[uid]/getUserInfo';

export function RemoveUserForm({ params }: { params: { info: UserInfo } }) {
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
    const res = await fetch('/api/RemoveUser', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(golfer)
    })
    console.log(res.status);
    if (res.status === 201) {
      router.push('/')
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
        <span>Confirm Username:</span>
        <input
          required
          type="text"
          onChange={(e) => (setUsername(e.target.value))}
          value={username}
        />
      </label>
      <label>
        <span>Enter Password:</span>
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
        {!isLoading && <span>Delete Account</span>}
      </button>
    </form>
  )
}

export default RemoveUserForm