import React from 'react'
import "./Second.scss"

const Second = () => {
  return (
    <div>
        <div className='title'>
            <h2>Big Sale</h2>
        </div>
     <div className='gridsection'>
     <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" alt="" />
       <div className='about'>
        <h5>50% less in all items</h5>
        <span>By Carl Smith • September 3, 2018</span>
       <div className='p'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p></div>
        <button>SHOP NOW</button>
       </div>
     </div>
    </div>
  )
}

export default Second