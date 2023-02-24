import React from 'react'

const Timeline = () => {
  return (
    <div id='timeline'>
      <div className='timeLineBox'></div>
    </div>
  )
}

const timelineItem= () =>{
    <div className={'timelineItem ${index%2===0}'}></div>
}

export default Timeline
