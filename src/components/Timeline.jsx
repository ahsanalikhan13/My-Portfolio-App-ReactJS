import React from 'react';
import data from '../assets/data.json';

const TimeLineItem = ({heading, text, index}) =>(
  <div 
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
      >
        <div>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
  </div>
  )


const Timeline = () => {
  return (
    <div id="timeline">

      <h2>TIMELINE</h2>

      <div className="timelineBox">
        {data.projects.map((i, index)=>(
          <TimeLineItem
            heading={i.title}
            text={i.date}
            index={index}
            key={i.title}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Timeline;
