import { retry } from "@reduxjs/toolkit/query"

const BASE_URL= 'https://quote-74ea2-default-rtdb.firebaseio.com/'

export const useFetch=()=>{
    const  castimFetch= async(api,method='GET',body)=>{
        try {
            const response = await fetch(`${BASE_URL}/${api}.json`,{
                method,
                Headers:{
                    'Content-type':'application/json'
                },
                body:body&& JSON.stringify(body)
            })

            const data = await response.json()
            return data
            
        } catch (error) {
            return error
            
        }
    }

    return{
        castimFetch,
    }
}
