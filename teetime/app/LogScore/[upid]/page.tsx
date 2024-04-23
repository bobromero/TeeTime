import React from 'react'

import LogScoreForm from './LogScoreForm'

const page = async ({ params }: {
  params: {
    upid: string
  }
}) => {
  return (
    <div>

      <LogScoreForm params={params} />
    </div>
  )
}

export default page