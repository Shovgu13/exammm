import React, { useEffect } from 'react'
import './Crud.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../services/request'
import { Base_url } from '../../services/Base_url'
import { addAllData } from '../../redux/product'

const Crud = () => {

    // const alldata =useSelector(state=>state.data.product)
    // const dispatch = useDispatch()

    useEffect(()=>{
        getAllData(Base_url).then((res)=>{
dispatch(addAllData(res))
        })
        
    },[])

    // const handleaddWish=(elem)=>{
    //     dispatch(addFav(elem))
    // }

    // alldata &&alldata.map(elem=>{
  return (
    <div>
<h2 className='h2'>Features Products</h2>
    <div className='Cards'>
        <div className='Card'>
            <img src="https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg" alt="" />
            <div className='title'>
                <h3>Tank Top</h3>
                <p>Finding perfect t-shirt</p>
                <span className='price'>$50</span>
            </div>
        </div>
        <div className='Card'>
            <img src="https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg" alt="" />
            <div className='title'>
                <h3>Tank Top</h3>
                <p>Finding perfect t-shirt</p>
                <span className='price'>$50</span>
            </div>
        </div>
        <div className='Card'>
            <img src="https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg" alt="" />
            <div className='title'>
                <h3>Tank Top</h3>
                <p>Finding perfect t-shirt</p>
                <span className='price'>$50</span>
            </div>
        </div>
       

    </div>
    </div>
  )
}

export default Crud