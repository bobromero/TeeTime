import React from 'react'
import SideBar from './SideBar'
import CourseTiles from './courseTiles'

const CourseSearch = ({ params }: { params: { numSearch: number } }) => {
  return (
    <div>
      <SideBar />

      <CourseTiles params={params} />

    </div>
  )
}

export default CourseSearch