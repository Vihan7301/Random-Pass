import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/passchar';

function App() {
  let [uppercase,setuppercase]=useState(false)
  let [lowercase,setlowercase]=useState(false)
  let [number,setnumber]=useState(false)
  let [symbol,setsymbol]=useState(false)
  let [passwordLentgh,setpasswordLentgh]=useState(10)
  let[fpass,setfpass]=useState('')

let createPassword=()=>{
  let finalpass=""
  let charset =""
  if(uppercase || lowercase || number || symbol){
    if(uppercase)  charset+=UC
    if(lowercase)  charset+=LC
    if(number) charset+=NC
    if(symbol) charset+=SC
    if(passwordLentgh>=20 && passwordLentgh<=8){
      alert("Password Is Not In Range (8-20)")
  }
    for(let i=0;i<passwordLentgh;i++){
      finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
    }
    setfpass(finalpass)
  }
  else(
    alert("Plesase check one textbox!......")
  )
  
}
let copypass=()=>{
  navigator.clipboard.writeText(fpass)
}
  return (
    <div className="App">
      <div className='passwordBox'>
        <h1>Password Generator</h1>
        <div className="passwordBoxIn">
          <input tpye="text" value={fpass} readOnly />
          <button onClick={copypass}>Copy</button>
        </div>

        <div className="passwordBoxex" id="passLength">
          <label>Password Length</label>
          <input type="number" max={20} min={8} value={passwordLentgh} onChange={(event)=>setpasswordLentgh(event.target.value)} />
        </div>
        <div className="passwordBoxex">
          <label>Include Upper Case Letter</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setuppercase(!uppercase)} />
        </div>
        <div className="passwordBoxex">
          <label>Include Lower Case Letter</label>
          <input type="checkbox" checked={lowercase} onChange={()=>setlowercase(!lowercase)} />
        </div>
        <div className="passwordBoxex">
          <label>Include Number</label>
          <input type="checkbox" checked={number} onChange={()=>setnumber(!number)} />
        </div>
        <div className="passwordBoxex">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbol} onChange={()=>setsymbol(!symbol)} />
        </div>
        <button className="btn" onClick={createPassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
