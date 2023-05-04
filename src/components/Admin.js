import React,{useState,useEffect} from 'react'
import './CSS/Admin.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
function Admin() {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/product")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
        <div>
      <table border={3}>
      <thead>
        <tr>
          <th>Product-ID</th>
          <th>Product-Name</th>
          <th>Quantity</th>
          <th>Product-Type</th>
          <th>Catagory</th>
          <th>Product-Discription</th>
          <th>PriceAmazon</th>
          <th>PriceFlipcart</th>
          <th>PriceLocalSeller</th>
          <th>AmazonLink</th>
          <th>FlipkartLink</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Pid}</td>
                <td>{item.Pname}</td>
                <td>{item.Qty}</td>
                <td>{item.PType}</td>
                <td>{item.Category}</td>
                <td>{item.PDisc}</td>
                <td>{item.PriceAmazon}</td>
                <td>{item.PriceFlipcart}</td>
                <td>{item.PriceLS}</td>
                <td>{item.AmazonLink}</td>
                <td>{item.FlipkartLink}</td>
                <td><img src={EditNoteIcon} width="40px" height="20px"></img></td>
                <td><img src={DeleteSweepIcon} width="40px" height="20px"></img></td>
              </tr>
            ))}
        </tbody>
          
       
      </table>
    </div>
    </>
  )
}

export default Admin
