import React from 'react'

const Pagebtn = ({totalposts,postPerpg,paginate,currentpg,setcurrentpg}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalposts/postPerpg);i++){
        pageNumbers.push(i);
    }
    const prePage=()=>{
        if(currentpg!==1)setcurrentpg(currentpg-1);
      
    }
    const nextPage=()=>{
        if(currentpg!==Math.ceil(totalposts/postPerpg))setcurrentpg(currentpg+1);
       
    }
  return (
    <nav>
        <ul className='pagination justify-content-center'>
            <li className="page-item">
                <a href="#" className='page-link active' onClick={prePage} >Prev</a>
            </li>
            {pageNumbers.map(number=>(
                <li key={number} className='page-item '>
                    <a href="#" onClick={()=>paginate(number)} className='page-link '>
                        {number}
                    </a>
                </li>
            ))}
            <li className="page-item">
                <a href="#" className='page-link active' onClick={nextPage} >Next</a>
            </li>
        </ul>
    </nav>
  )
}

export default Pagebtn