import Bakverk_APIService from "../../shared/api/service/Bakverk_APIService"
import {useState,useEffect} from 'react'
import './PastryPage.css'

export const PastryPage = () => {
    const [appResponse , setAppResponse] = useState([])


    const fetchData = async () => {
        const {data} = await  Bakverk_APIService.getAllData()
        setAppResponse (data)
    }

    const displayData = () => {
        return(
            appResponse.map((x) =>
            <div >  
                <h1> Product name : {x.productsname} </h1> 
                <h1> Quantity : {x.quantity} </h1>
                <h1> Ingredient : {x.ingredient} </h1>
                <h1> ------</h1>
            </div>)
            
        )
    }
    useEffect(() => {
		fetchData()
	}, [ ])
    
    return (
        <div >
            {displayData()}
        </div>
    )
}

        