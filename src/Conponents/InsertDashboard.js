import axios from "axios";
import { useState } from "react";
const InsertDashboard = () =>{
    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [data,setData] = useState({})
    const Inputid = (event)=>{
            setId(event.target.value)
    }
    const InputName = (event)=>{
        setName(event.target.value)
    }
    const InputEmail = (event)=>{
        setEmail(event.target.value)
    }
    const Submit = async () =>{
        
            const database = {
                'id':id,
                'name':name,
                'email':email,
            }
            setData(database)
        
        axios.post('http://localhost:5000/InsertProduct',data)
    console.log("INPUT Connected = "+JSON.stringify(data))    
    alert("สำเร็จนะจ๊ะ")
    }

    return(
        <div align = "center">
            <h1>INPUT DATABASE</h1>
            <label>ID </label>
            <input type="text" onChange={Inputid}></input><br/>
            <label>NAME </label>
            <input type="text" onChange={InputName}></input><br/>
            <label>EMAIL </label>
            <input type="text" onChange={InputEmail}></input><br/>
            <div>
                <input type="submit" value="INPUT" onClick={Submit}></input>
            </div>
            <table>
            <thead>
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            </tr>
            </thead>
            <tbody>
            <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        </tr>
        </tbody>
        </table>

        </div>
    )
}
export default InsertDashboard;