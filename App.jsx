
import React, { useState } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Sdata from './Sdata.jsx'
import More from './More'
const App=()=>{
    const[data,setData]=useState(Sdata)
    return(<>
        <section >
        <div className='main-div'>
        <h1 className='heading'>react interview questions</h1>
        {
        data.map((currentElement) => {
return <More key={currentElement.id}{...currentElement}/>;

        })
    }
        </div>
     </section>
        </>)
    
}
export default App