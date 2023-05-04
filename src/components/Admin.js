import React,{useState,useEffect} from 'react'
import './CSS/Admin.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweepRounded';
import { Link } from 'react-router-dom';
function Admin(props) {
    const [data, setData] = useState([]);
    const [pname,setPname] = useState();
    const [Qty,setQty] = useState();
    const [PA,setPA] = useState();
    const [PF,setPF] = useState();
    const [PLS,setPLS] = useState();
    const [PI,setPI] = useState();
    const [PD,setPD] = useState();
    const [PT,setPT] = useState();
    const [PC,setPC] = useState();
    const [PAL,setPAL] = useState();
    const [PFL,setPFL] = useState();
    const [PLSL,setPLSL] = useState();
  useEffect(() => {
    fetch("http://localhost:3005/product")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
        <div className='insert__btn'><Link to='/Insert' class="btn btn-outline-success btn-lg">Insert</Link></div>
        <div className='borderdiv'></div>
        <div className='Admin__root'>
      <table className={`table ${props.mode==='light'?'':'table-dark'} table-bordered`}>
      <thead className='table-dark'>
        <tr className='table__row'>
          <th>Pid</th>
          <th>Pname</th>
          <th>Quantity</th>
          <th>Price Amazon</th>
          <th>Price Flipcart</th>
          <th>Price Local Seller</th>
          <th>Product Image</th>
          <th>Product Discription</th>
          <th>Product Type</th>
          <th>Category</th>
          <th>Amazon Link</th>
          <th>Flipkart Link</th>
          <th>Local Seller Link</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody className='table__body'>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Pid}</td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPname(e.target.value)} value={item.Pname}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setQty(e.target.value)} value={item.Qty}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPA(e.target.value)} value={item.PriceAmazon}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPF(e.target.value)} value={item.PriceFlipcart}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPLS(e.target.value)} value={item.PriceLS}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPI(e.target.value)} value={item.PImage} /></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPD(e.target.value)} value={item.PDisc}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPT(e.target.value)} value={item.PType}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPC(e.target.value)} value={item.Category}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPAL(e.target.value)} value={item.AmazonLink}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPFL(e.target.value)} value={item.FlipkartLink}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>setPLSL(e.target.value)} value={item.LS+" "}/></td>
                <td><button type='button' className={`btn table__buttons ${props.mode ==='light'?'table__buttons__light':'table__buttons__dark'}`}><EditNoteIcon color='success'/></button></td>
                <td><button type='button' className={`btn table__buttons ${props.mode ==='light'?'table__buttons__light':'table__buttons__dark'}`}><DeleteSweepIcon color='success'/></button></td>
              </tr>
            ))}
        </tbody>
          
       
      </table>
    </div>
    </>
  )
}

export default Admin
