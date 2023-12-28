import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Forms.css'
const Forms = ({data}) => {
    const {title,fields}=data;
    const renderfields=(fields)=>{
        return fields.map(field=>{
            const {title,type}=field;
            return(
              <div className='wrapper d-flex align-items-center justify-content-center w-100'>
               
         <div className="form-group mb-2 " style={{display:'flex',flexDirection:'column'}}>
        <label style={{fontFamily:'monospace',fontSize:'larger'}}>{title}:</label>
        <input style={{width:'20pc',borderRadius:'6px',height:'2.3pc',padding:'10px',border:'1px solid black'}} type={type}  />
        </div>
        
      
              </div>
        
            )
        })
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
    }
  return (
    
     <form  className="form1"style={{marginBottom:'12pc'}}>
        <h4 className='mb-3 wrapper d-flex align-items-center justify-content-center w-100' style={{fontFamily:'serif',fontWeight:'bolder'}}>{title}</h4>
     
        
            {renderfields(fields)}
            <button type='submit' className='btn btn-success mt-2 'style={{alignItems:'center',marginLeft:'9pc',marginBottom:'10px'}}>Submit</button>
    
     </form>
     
   
  )
}

export default Forms
