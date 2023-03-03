import React, { useState } from 'react'
import "./card.css"
import man from "./man.jpg"
import Heart from "./heart 1.png"
import o2 from "./o2 1.png"
import temperature from "./temperature 1.png"
export default function Card() {
  const[name,setName]= useState("Hiran de silva");
  const[regno,setRegno]= useState("HP.202304");
  const[age,setAge]= useState("35");
  const[nic,setNic]= useState("972456746V");
  const[clinic,setClinic]= useState(["hiaran is a heart patient since 2022"]);
  const[prescription,setPrescription]= useState(["Panadol","Piriton","Citracene"]);
  const[apo,setSpo]= useState("50%");
  const[temp,setTemp]= useState("27 C");
  const[heartrate,setHeartrate]= useState("72 bpm");
  return (
    <div className='card_frame'>
      <br/>
      <p className='card_head'>Patient</p>
      <div ><img id='image' src={man}/></div>
      <div className='frame_1'>
        <p>Name:        {name}</p>
        <p>Reg. Number: {regno}</p>
        <p>Age:         {age}</p>
        <p>NIC:         {nic}</p>
        
        <p>Clinical Details:</p>
        
        <ul>
          <li>hiaran is  a heart patient</li>
        </ul>
        <p>Prescriptions:</p>
        <ul>
          <li>panadol</li>
          <li>piriton</li>
        </ul>
        <div style={{display:'flex',
         justifyContent:"flex-start",
         width:'100pc',
         marginLeft:"-30pc",
         marginTop:'2pc'}}>
        <div className='spo'>
          <p className='dataname'>SPO</p>
          <p className='data'>{apo}</p>
          <img className='icon' src={o2}/>
        </div>
        <div className='temp'>
        <p className='dataname'>Body Temp</p>
        <p className='data'>{temp}</p>
        <img className='icon' src={temperature}/>
        </div>
        <div className='heart'>
        <p className='dataname'>Heart Rate</p>
        <p className='data'>{heartrate}</p>
        <img className='icon' src={Heart}/>
        </div>
        </div>
      </div>
    </div>
  )
}
