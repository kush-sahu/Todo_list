// import React from 'react'

// function Body1() {
//   return (
//     <div className="body1-1">
//        <div className="insideboy">

//         <div className="forBody">Choose</div>
//         <h5 className="forBody">Lorem ipsum dolor sit amet consectetur.</h5>
//         <div className="forBody">YouTube</div>
//         <div className="forBody">LeetCode</div>
//         <div className="forBody">HackerRank</div>
//         <div className="forBody">GFG</div>

//        </div>

//     </div>
//   )
// }

// export default Body1


import React, { useState } from 'react';
import Navinside from './Navinside';

function Body1(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="body1-1">
        <div className="insideboy">
          <div className="choose forBody" onClick={toggleOpen}>
            Choose {isOpen ? <span className="cross">&#10005;</span> : <span>&#9660;</span>}
          </div>
          <h5 className="forBody1">{props.info}</h5>
          <div className="forBody">Youtube</div>
          <div className="forBody">LeetCode</div>
          {/* <div className="forBody">HackerRank</div>
          <div className="forBody">GFG</div> */}
        </div>
      </div>
      {isOpen && (
        <div className="additional-content">
          <Navinside title={props.title} yt={props.yt} leetCode={props.leetCode} HackerRank={props.HackerRank} gfg={props.gfg} />
          <Navinside title={props.title1} yt={props.yt1} leetCode={props.leetCode1} HackerRank={props.HackerRank1} gfg={props.gfg1} />
          <Navinside title={props.title2} yt={props.yt2} leetCode={props.leetCode2} HackerRank={props.HackerRank2} gfg={props.gfg2} />
          <Navinside title={props.title3} yt={props.yt3} leetCode={props.leetCode3} HackerRank={props.HackerRank3} gfg={props.gfg3} />
          <Navinside title={props.title4} yt={props.yt4} leetCode={props.leetCode4} HackerRank={props.HackerRank4} gfg={props.gfg4} />
          <Navinside title={props.title5} yt={props.yt5} leetCode={props.leetCode5} HackerRank={props.HackerRank5} gfg={props.gfg5} />
          <Navinside title={props.title6} yt={props.yt6} leetCode={props.leetCode6} HackerRank={props.HackerRank6} gfg={props.gfg6} />
          <Navinside title={props.title1} yt={props.yt7} leetCode={props.leetCode7} HackerRank={props.HackerRank7} gfg={props.gfg7} />
          <Navinside title={props.title1} yt={props.yt8} leetCode={props.leetCode8} HackerRank={props.HackerRank8} gfg={props.gfg8} />
          <Navinside title={props.title1} yt={props.yt9} leetCode={props.leetCode9} HackerRank={props.HackerRank9} gfg={props.gfg9} />
        </div>
        )}
        </>
      );
    }
    
export default Body1;
