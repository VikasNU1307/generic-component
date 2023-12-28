import React from 'react'

const Posts = ({posts}) => {
  return (
    
        <ul style={{margin:'85px'}}  className='list-group mb-4 '>
      {posts.map((post)=>(
<li style={{paddingLeft:'30pc',backgroundColor:'ghostwhite',marginBottom:'5px'}} key={post.id} className='list-group-item '>
    {post.title}
</li>
      ))}
      </ul>
   
  )
}

export default Posts