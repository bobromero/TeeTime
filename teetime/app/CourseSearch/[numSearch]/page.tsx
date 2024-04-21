import React from 'react'
import SideBar from './SideBar'
import CourseTiles from './courseTiles'
import Link from 'next/link'


const CourseSearch = ({ params }: { params: { numSearch: number } }) => {

  return (
    <div >
      {/* <SideBar /> */}

      <div className={'grid grid-cols-' + params.numSearch + ' gap-' + params.numSearch}>
        <CourseTiles params={params} />

      </div>
      <Link href={'/CourseAdd/'}>Add a course!</Link>

    </div>
  )
}

export default CourseSearch