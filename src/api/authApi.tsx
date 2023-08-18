import axios from "axios"

const url: string = "https://jsonplaceholder.typicode.com/photos"
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/photos


export const getData = async () =>{
    try {
       return await axios.get(`${url}`).then((res:any)=>{
        return res.data
       }) 
    } catch (error) {
        console.log(error)
    }
}