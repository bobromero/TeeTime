import React from 'react'
import { RemoveScoreForm } from './RemoveScoreForm'
const RemoveScore = ({ params }: {
  params: {
    upid: string
  }
}) => {
  return (
    <div>
      <RemoveScoreForm params={params} />

    </div>
  )
}

export default RemoveScore