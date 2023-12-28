import React from 'react'
import Forms from '../Forms/Forms'
const Data = () => {
    let data ={
        title:'Login Form',
        fields:[
            {
            title:'Firstname',
            type:'text',
            },
            {
              title:'Lastname',
              type:'text',
              },
              {
                title:'Email',
                type:'email',
                },
            {
                title:'Password',
                type:'password',
                },
                
                
        ]
        
    }
  return (
    <div>
      <Forms data={data}/>
    </div>
  )
}

export default Data
