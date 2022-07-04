import axios from "axios";
import { useState } from "react";
const FindDashboard = () =>{
    const [database,setDatabase] = useState();
    
        const Submitget = async () =>{
            const results = await axios.get('http://localhost:5000/dashboard')
                console.log(results.data);
                  setDatabase(results.data);
        }
        console.log("testdb = "+JSON.stringify(database))
return(
    <div align="center">
        <h1>GET DATABASE</h1>
        <input type="button" value="Submit" onClick={Submitget} />
        <br/>
        {JSON.stringify(database)}
    </div>
)
}
export default FindDashboard;