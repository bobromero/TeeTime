import React from 'react'

const CoursePage = ({ params }: { params: { upid: string } }) => {
  return (
    <div>CoursePage of {params.upid}</div>
  )
}

export default CoursePage