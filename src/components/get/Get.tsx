import { useEffect } from 'react'
import getall from '../../store/useproducts'
import './Get.scss'
const Get = () => {
    const {products,getproducts, deleteproduct}=getall()

    useEffect(()=>{
        getproducts()
    },[])

   
    
      const handldel=(id:any)=>{
        deleteproduct(id)
        setTimeout(()=>{
          getproducts()
          getproducts()
        },400)
        
      }
    

  return (
    <div className='get'>

          <table>
        <thead>
          <tr>
            <th>IMG</th>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Edit...</th>
            <th>Delete...</th>
          </tr>
        </thead>


        <tbody>
            {products.map((p)=>(
                <tr className='product' key={p.id}>
                    <td><img src={p.img} alt="" /></td>
                    <td>{p.name}</td>
                    <td>{p.title}</td>
                    <td>{p.description}</td>
                    <td>{p.price}</td>
                    <td className='edit'>Edit</td>
                    <td onClick={()=>handldel(p.id)} className='delete'>Delete</td>

                </tr>
            ))}
        </tbody>
      </table>



    </div>
  )
}

export default Get
