import React from 'react'
import { GetCourseInfo, CourseInformation } from '../../CourseSearch/[numSearch]/getCourseTiles';
import RemoveCourseForm from './RemoveCourseForm';


const RemoveCoursePage = async ({ params }: { params: { upid: string } }) => {
  if (params.upid == 'src') {
    return;
  }
  const info: CourseInformation = await GetCourseInfo(params.upid);
  return (
    <div>
      <h1>Are you sure you want to remove {info.Name}</h1>
      <RemoveCourseForm params={{
        info: info
      }} />

    </div>
  )
}

export default RemoveCoursePage