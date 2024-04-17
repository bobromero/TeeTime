import React from 'react'
import { CourseInformation, GetCourseInfo } from '../../getCourseTiles'

const CoursePage = ({ params }: { params: { upid: string } }) => {
  let courseInfo: CourseInformation = GetCourseInfo(params.upid);
  return (
    <div>
      <h1>CoursePage of {courseInfo.UPID}</h1>
      <h1>{courseInfo.Name}</h1>
      <h3>Address: {courseInfo.address}</h3>
      <p>{courseInfo.description}</p>
      <h1>Number of holes: {courseInfo.NumberOfHoles}</h1>
      <h1>Yardage: {courseInfo.Yardage}</h1>
    </div>
  )
}

export default CoursePage