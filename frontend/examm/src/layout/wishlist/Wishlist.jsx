import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Wishlist = () => {
const favorit =useSelector(state=>state.data.product)
const dispatch = useDispatch()
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist