import React, { useState } from 'react'
import "./card.css"

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
      <p className='card_head'>Patient</p>
      <div className='frame_1'>
        <p>Name:{name}</p>
        <p>Reg. Number:{regno}</p>
        <p>Age:{age}</p>
        <p>NIC:{nic}</p>
        
        <p>Clinical Details:</p>
        
        <ul>
          <li>hiaran is  a heart patient</li>
        </ul>
        <p>Prescriptions:</p>
        <ul>
          <li>panadol</li>
          <li>piriton</li>
        </ul>
      </div>
    </div>
  )
}
