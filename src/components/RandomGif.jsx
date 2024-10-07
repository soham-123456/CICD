import React, { useState ,useEffect} from 'react'
import axios from "axios";
import Spinner from './Spinner';

// const API_KEY=process.env.REACT_APP_GIPHY_APT_KEY;

export default function RandomGif() {
  const [gif,setgif]=useState("");
  const [loading,setloading]=useState(false);
  
  
  
  async function fetchdata(){
    setloading(true);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=kCgdqZP2xqPvevrXz4uwF7iSVlBJTw9O`
    const {data}=await axios.get(url);
    setgif(data.data.images.downsized.url)
    setloading(false);
  }

  useEffect(()=>{
    fetchdata(); 
   },[])


   function clickhandler(){
     fetchdata(); 
  }
  
  return (

    <div className='w-3/4 pb-5 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>  

      <h2>A RANDOM GIF</h2>

    { !loading ? <img src={gif} width="250"></img> :  <Spinner/>}

  <button onClick={clickhandler} className='w-3/4 h-10 bg-yellow-200 outline-none hover:ring-2 hover:shadow-md hover:shadow-slate-500  border-0  border-neutral-50 rounded-md'>GENERATE</button> 
     
    </div>
  )
}
