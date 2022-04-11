import React, { useEffect } from 'react'

function Data(props) {

  return (
    <div>{props.data.map((d,index)=>

        
            <ul key={index}>

                <li>Title :{d.title}</li>
                <li>Description:{d.description}</li>
                <li>Email:{d.email}</li>
                <li>Range:{d.range}</li>
            

            </ul>
        )}
</div>
  )
}

export default Data