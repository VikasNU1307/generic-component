import React from 'react'
import axios from 'axios';
import Pagebtn from '../Paginations/Pagebtn';
import Posts from '../Paginations/Posts';
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const API = 'https://jsonplaceholder.typicode.com/posts';
const Pagination = () => {
    const [posts,setPosts]= useState([]);
    const [currentpg,setcurrentpg]=useState(1);
    const[postPerpg,setPostperPg]=useState(10);
    
   
    useEffect(()=>{
      const fetchdata= async(url)=>{
        const res= await axios.get(url);
        // console.log("before",posts);
        setPosts(res.data);
        // console.log('data',res.data);
        
       
    }
   
        fetchdata(API);
    },[])
    
   console.log(posts);
   const indexoflastpost=currentpg*postPerpg;
   const indexoffirstpost=indexoflastpost-postPerpg;
   const currentposts=posts.slice(indexoffirstpost,indexoflastpost);
   const paginate=(pageNumbers)=>{
    setcurrentpg(pageNumbers);
   }
  return (
    
    <div>
        {/* { console.log('after',posts)} */}
      <h1 style={{textAlign:'center'}}>Pagination</h1>
      {posts.length>0?<Posts  posts={currentposts}/>:<p>loading</p>}
      <Pagebtn postPerpg={postPerpg} totalposts={posts.length} paginate={paginate} currentpg={currentpg} setcurrentpg={setcurrentpg}/>
      {/* <Posts/> */}
      {/* <button onClick={()=>fetchdata(API)}>click</button> */}
    </div>
  )
}

export default Pagination
