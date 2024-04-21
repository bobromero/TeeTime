"use client"


import { useRouter } from 'next/navigation';
import React from 'react'

import { useState } from 'react';
import { CourseInformation } from '../../CourseSearch/[numSearch]/getCourseTiles';

export function UpdateCourseForm({ params }: { params: { info: CourseInformation } }) {
  const router = useRouter()

  const upid = params.info.UPID;
  const [name, setName] = useState(params.info.Name);
  const [address, setAddress] = useState(params.info.address);
  const [description, setDescription] = useState(params.info.description);
  const [numberofholes, setNumberofholes] = useState(params.info.NumberOfHoles);
  const [yardage, setYardage] = useState(params.info.Yardage);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const course = {
      upid, name, address, description, numberofholes, yardage
    }
    console.log(course)
    const res = await fetch('/api/UpdateCourse', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course)
    })
    console.log(res);
    if (res.status === 201) {
      router.push('/Courses/' + upid)
      router.refresh()
    }
    setIsLoading(false);

  }

  return (
    <form onSubmit={handleSubmit} className='grid grid-rows-6 gap-4'>
      <label>
        <span>Name:</span>
        <input
          required
          placeholder={params.info.Name}
          type="text"
          onChange={(e) => (setName(e.target.value))}
          value={name}
        />
      </label>
      <label>
        <span>Address:</span>
        <input
          required
          placeholder={params.info.address}
          type="text"
          onChange={(e) => (setAddress(e.target.value))}
          value={address}
        />
      </label>
      <label>
        <span>Description:</span>
        <input
          required
          placeholder={params.info.description}
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
          placeholder={params.info.Yardage.toString()}
          onChange={(e) => (setYardage(Number(e.target.value)))}
          value={yardage}
        />
      </label>
      <label>
        <span>Number of Holes:</span>
        <input
          required
          placeholder={params.info.NumberOfHoles.toString()}
          type="text"
          onChange={(e) => (setNumberofholes(Number(e.target.value)))}
          value={numberofholes}
        />
      </label>
      <button className='btn-primary'
        disabled={isLoading}
      >
        {isLoading && <span>Loading...</span>}
        {!isLoading && <span>Update Course</span>}
      </button>
    </form>
  )
}

export default UpdateCourseForm