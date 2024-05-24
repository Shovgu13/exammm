import axios from "axios"



export const getAllData =async(url)=>{
const res = await axios.get(url)
const data =res.data
return data
}
export const Deletebyid =async(url , id)=>{
    const res = await axios.del(`${url}/ ${id}`)
    const data =res.data
    return data
    }

    export const postData =async(url , obj)=>{
        const res = await axios.post(`${url}/ ${obj}`)
        const data =res.data
        return data
        }