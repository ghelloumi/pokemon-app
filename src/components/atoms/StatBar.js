import React from "react"

const StatBar = ({percentage, background}) => (
   <div className="statBar">
       <div style={{width: `${percentage}%`, background}}/>
   </div>
)

export default StatBar
