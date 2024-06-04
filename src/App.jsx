import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Body1 from './component/Body1'

function App(props) {
  
  return (
    <>
    <Navbar/>
    <Body1 info="main topic name" title="Name of topic" yt="YTlinks" leetCode="leetcodelinks" HackerRank="hackerlink" gfg="gfglink"/>
    <Body1 info="main topic name" title="Name of topic" yt="YTlinks" leetCode="leetcodelinks" HackerRank="hackerlink" gfg="gfglink"/>
    <Body1 info="main topic name" title="Name of topic" yt="YTlinks" leetCode="leetcodelinks" HackerRank="hackerlink" gfg="gfglink"/>
    <Body1 info="main topic name" title="Name of topic" yt="YTlinks" leetCode="leetcodelinks" HackerRank="hackerlink" gfg="gfglink"/>
    <Body1 info="main topic name" title="Name2 of topic" yt="YTlinks" leetCode="leetcodelinks" HackerRank="hackerlink" gfg="gfglink"
                                   title1="Name2 of topic" yt1="YTlinks" leetCode1="leetcodelinks" HackerRank1="hackerlink" gfg1="gfglink"/>
    </>
  )
}

export default App
