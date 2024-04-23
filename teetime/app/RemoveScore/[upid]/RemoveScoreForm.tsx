"use client"


import { useRouter } from 'next/navigation';
import React from 'react'

import { useState } from 'react';

export function RemoveScoreForm({ params }: { params: { upid: string } }) {
  const router = useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(username, password)
    const upid = params.upid;
    const record = {
      upid, username, password
    }
    const res = await fetch('/api/RemoveScore', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record)
    })
    console.log(res.status);
    if (res.status === 201) {
      router.push('/Courses/' + params.upid)
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
        {!isLoading && <span>Remove Score</span>}
      </button>
    </form>
  )
}

export default RemoveScoreForm