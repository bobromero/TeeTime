import React from 'react'
import { CourseInformation, GetCourseInfo } from '../../CourseSearch/[numSearch]/getCourseTiles'
import Link from 'next/link';
import Scores from './Scores';

const CoursePage = async ({ params }: { params: { upid: string } }) => {
  let courseInfo: CourseInformation = await GetCourseInfo(params.upid);
  return (
    <div>
      <h1>{courseInfo.Name}</h1>
      <h3>Address: {courseInfo.address}</h3>
      <p>{courseInfo.description}</p>
      <h1>Number of holes: {courseInfo.NumberOfHoles}</h1>
      <h1>Yardage: {courseInfo.Yardage}</h1>

      <h1>Golfers who scored here</h1>

      <Scores params={params} />

      <Link href={"/LogScore/" + params.upid}>Enter Score</Link>


      <Link href={'/UpdateCourse/' + params.upid}>Update Course</Link>
      <Link href={'/RemoveCourses/' + params.upid}>Remove Course</Link>
    </div>
  )
}

export default CoursePage