import React from 'react'
import UpdateCourseForm from './UpdateCourseForm'
import { CourseInformation, GetCourseInfo } from '../../CourseSearch/[numSearch]/getCourseTiles'


async function page({ params }: { params: { upid: string } }) {
  const info: CourseInformation = await GetCourseInfo(params.upid);
  return (
    <div>
      <h1>Update Info for {info.Name}</h1>

      <UpdateCourseForm params={{
        info: info
      }} />

    </div>
  )
}

export default page