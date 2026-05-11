import React from 'react'
import { useState } from 'react';
import './Home.css';

const Home = () => {
  //couting balls
  const[balls,setBalls]=useState(0);
  const[runs,setRuns]=useState(0);
  const[wickets,setWickets]=useState(0);
  const[extras,setExtras]=useState(0);
  const[inputruns,setInputruns]=useState(0);
  const[runrate,setRunrate]=useState(0);
  //how many wide and no ball and byes and leg byes
  const[wide,setWide]=useState(0);
  const[byes,setByes]=useState(0);
  const[noball,setNoball]=useState(0);

  const overs=Math.floor(balls/6)+(balls%6)/10;
  //balls and over calculate
  const handleballs=()=>{
    const runs=parseInt(inputruns)||0;
    if(balls%6===5)alert("Over Completed");
    setBalls(Prev=>Prev+1);
    setRuns(Prev=>Prev+runs);
    setInputruns('');
    setRunrate((runs / overs).toFixed(2));
  }
  //adding wide balls
  const addwide=()=>{
    const runs=parseInt(inputruns)||0;
    setRuns(Prev=>Prev+runs+1);
    setExtras(Prev=>Prev+runs+1);
    setInputruns('');
    setWide(Prev=>Prev+1);
  }
  //adding byes
   const addbyes=()=>{
    const runs=parseInt(inputruns)||0;
    setRuns(Prev=>Prev+runs);
    setExtras(Prev=>Prev+runs);
    setInputruns('');
    setByes(Prev=>Prev+1);
  }
  //adding no ball
   const addnoball=()=>{
    const runs=parseInt(inputruns)||0;
    setRuns(Prev=>Prev+runs+1);
    setExtras(Prev=>Prev+runs+1);
    setInputruns('');
    setNoball(Prev=>Prev+1);
  }
  // adding wickets
  const addwicket=()=>{
    setWickets(Prev=>Prev+1);
  }
  return (
    <>
      <input type="number" value={inputruns} onChange={(e)=>setInputruns(e.target.value)} placeholder='Enter runs'/>  
      <div className="input-section">
      <button onClick={handleballs}>Balls</button>
      <button onClick={addwide}>Wide</button>
      <button onClick={addbyes}>Byes</button>
      <button onClick={addwicket}>Wicket</button>
      <button onClick={addnoball}>No Ball</button>
      </div>

      <div className="scoreboard">  
      <h2 style={{ color: 'red' }}>Over: {overs.toFixed(1)}</h2>
      <h2 style={{ color: 'blue' }}>Score: {runs}/{wickets}</h2>
      <h2 style={{ color: 'green' }}>Extras: {extras}</h2>
      <h2 style={{ color: 'orange' }}>Balls: {balls} </h2>
      <h2 style={{ color: 'voilet' }}>Run Rate: {runrate}</h2>
      <h2 style={{ color: 'black' }}>Wide: {wide}</h2>
      <h2 style={{ color: 'white' }}>Byes:  {byes}</h2>
      <h2 style={{ color: 'sandal' }}>No Ball: {noball}</h2>
      </div>
      
    </>
  )
}

export default Home