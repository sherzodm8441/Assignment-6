import React from "react"
import Result from "./Result"
import "./result.css"



export default function Layout(){
    const baseUrl = "http://ctp-zip-api.herokuapp.com/zip/"

    
    const [zipcode, setZipcode] = React.useState("")

    function updateZipcode(event){
        setZipcode(event.target.value)
    }
    
    const [data, setData] = React.useState([])
    

    React.useEffect(()=>{
        fetch(baseUrl + zipcode)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error  => console.log(error))
    }, [zipcode])

    
    const result = data.map(x => <Result key={x.RecordNumber} data={x} />)


    return(
        <div>
            <h1>Zip Code Search</h1>
            <div className="search">
                    <p>Enter zipcode</p>
                    <input value={zipcode} onChange={updateZipcode} type="text"/>
                </div>
            <div className="cont">
                {(data.length === 0)? <p>No Result</p>:result}
            </div>
        </div>
        
    )
}