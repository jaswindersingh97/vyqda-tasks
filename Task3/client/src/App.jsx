import React, { useState } from 'react'
import axios from 'axios';
function App() {
  const onSubmit = async(e) =>{
    e.preventDefault();
    const response = await axios({
      method:"post",
      data:{
        "phonenumber":phoneNo
      },
      url:"https://chimpu.online/api/post.php"
    })
    console.log(response);
    setOutput({data:JSON.stringify(response.data), Headers:JSON.stringify(response.headers)});
  }
  const [phoneNo,setPhoneNo] = useState("");
  const [output,setOutput] = useState({data:"",Headers:""});
  return (
    <>
    <form onSubmit={onSubmit}>
      <p>enter the phone no</p>
      <input type="text"  placeholder='enter the number' value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}/>
      <button type='submit'>submit</button>      
    </form>
    {output.data && <>
    <p>data:{output.data}</p>
      <h1>Headers:{output.Headers}
    </h1>
    </>}
    
    </>

  )
}

export default App
