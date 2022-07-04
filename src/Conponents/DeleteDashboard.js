import axios from "axios";
import { useState } from "react";

const DeleteDashboard = ()=>{

    const [id,setId] = useState('');
    const InputId = (event) =>{
            setId(event.target.value);
    }
    const SubmitDelete = async () => {
        await axios.post('http://localhost:5000/DeleteProduct',{'id':id})
            console.log("Delete Connected = "+JSON.stringify({'id':id}))
    }
    return(
        <div align = "center">
            <h1>DELETE DASHBOARD</h1>
            <label>DELETE ID </label>
            <input type="number" onChange={InputId}></input>
            <div>
                <input type="button" value="Delete" onClick={SubmitDelete}  />
            </div>
        </div>
    )
}
export default DeleteDashboard;