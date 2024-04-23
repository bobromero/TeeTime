import React from 'react'

import UpdateScoreForm from './UpdateScoreForm'

const page = ({ params }: {
  params: {
    upid: string
  }
}) => {
  return (
    <div>
      <h1>Update Score</h1>
      <UpdateScoreForm params={params} />
    </div>
  )
}

export default page