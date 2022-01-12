import React  from "react"
import "./result.css"

export default function Result(props){
    const hi = props.data
    
    return(
        <div className="box">
            <h2 >{hi.City}, {hi.State}</h2>
            <ul>
                <li>State: {hi.State}</li>
                <li>Location: ({hi.Lat}, {hi.Long})</li>
                <li>Population (estimated): {hi.EstimatedPopulation}</li>
                <li>Total Wages: {hi.TotalWages}</li>
            </ul>
        </div>
    )
}