"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

import { useState } from 'react';

export function AddCourseForm() {
  const router = useRouter()

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [yardage, setYardage] = useState('');
  const [numberofholes, setNumberofholes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(name, address, description, yardage, numberofholes)
    const course = {
      name, address, description, yardage, numberofholes
    }
    const res = await fetch('/api/AddCourse', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course)
    })
    if (res.status === 201) {
      router.push('/Courses/' + await res.text())
      router.refresh()
      setIsLoading(false);
      return;
    }
    router.refresh()
    setIsLoading(false);

  }

  return (
    <form onSubmit={handleSubmit} className='grid grid-rows-6 gap-4'>
      <label>
        <span>Name:</span>
        <input
          required
          type="text"
          onChange={(e) => (setName(e.target.value))}
          value={name}
        />
      </label>
      <label>
        <span>Address:</span>
        <input
          required
          type="text"
          onChange={(e) => (setAddress(e.target.value))}
          value={address}
        />
      </label>
      <label>
        <span>Description:</span>
        <input
          required
          type="text"
          onChange={(e) => (setDescription(e.target.value))}
          value={description}
        />
      </label>
      <label>
        <span>Yardage:</span>
        <input
          required
          type="text"
          onChange={(e) => (setYardage(e.target.value))}
          value={yardage}
        />
      </label>
      <label>
        <span>Number of Holes:</span>
        <input
          required
          type="text"
          onChange={(e) => (setNumberofholes(e.target.value))}
          value={numberofholes}
        />
      </label>
      <button className='btn-primary'
        disabled={isLoading}
      >
        {isLoading && <span>Loading...</span>}
        {!isLoading && <span>Add Course</span>}
      </button>
    </form>
  )
}

export default AddCourseForm