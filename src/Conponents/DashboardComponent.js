import axios from 'axios'
import { useState  } from 'react'
const DashboardFIND =  () =>{

    const [Product,setProduct] = useState('')
    const [ Textfind,setTextFind] = useState()
    const inputTextfind = (event) =>{
        setTextFind(event.target.value);
    }
        //  useEffect(() =>  {
        //     const database = {"id":3}
        // const dbfind = async () =>{
        //     await axios.post('http://localhost:5000/Product',database).then(res => {
        //     setProduct(res.data);
        //     console.log("Connected = "+JSON.stringify(res.data))})
        //    }
        //    dbfind()
        //     },[]);
            const dbfind = async () =>{
                await axios.post('http://localhost:5000/Product',{'id':Textfind}).then(res => {
                setProduct(res.data);
                console.log("Connected = "+JSON.stringify(res.data))})
               }
    return(
        <div align = "center">
            <h1>FIND DATABASE</h1>
            <label>FIND ID 1-10 </label>
            <input type="number" onChange={inputTextfind}></input>
            <input type="button" value="FIND" onClick={dbfind}></input>
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
        <td>{Product.id}</td>
        <td>{Product.name}</td>
        <td>{Product.email}</td>
  </tr>
 </tbody>
</table>
        </div>
    )
}
export default DashboardFIND