"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

import { useState } from 'react';
import { CourseInformation } from '../../CourseSearch/[numSearch]/getCourseTiles';

export function RemoveCourseForm({ params }: { params: { info: CourseInformation } }) {
  const router = useRouter()

  const [verifyName, setVerifyName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(password)
    const upid = params.info.UPID;
    const course = {
      upid, password
    }
    if (params.info.Name = verifyName) {
      const res = await fetch('/api/RemoveCourse', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course)
      })
      if (res.status === 201) {
        router.push('/Courses/')
        router.refresh()
        setIsLoading(false);
        return;
      }
    }
    router.refresh()
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className='grid grid-rows-6 gap-4'>
      <label>
        <span>Verify the name of the course:</span>
        <input
          required
          type="text"
          onChange={(e) => (setVerifyName(e.target.value))}
          value={verifyName}
        />
      </label>
      <label>
        <span>Enter admin password:</span>
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
        {!isLoading && <span>Remove Course</span>}
      </button>
    </form>
  )
}

export default RemoveCourseForm