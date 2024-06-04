import React from 'react'

function Navinside(props) {
  return (
    <div className="Navinside insideboy">
        <div className="choose forBody">
            Choose 
          </div>
          <h5 className="forBody1">{props.title}</h5>
          <div className="forBody">{props.yt}</div>
          <div className="forBody">{props.leetCode}</div>
          {/* <div className="forBody">{props.HackerRank}</div>
          <div className="forBody">{props.gfg}</div> */}
    </div>
  )
}

export default Navinside