import React from 'react'

const CarousalItem = ({ news , active }) => {
  return (
    <>
      
      <div className={active === 0 ? "carousel-item active" : "carousel-item"}>
      <img 
      style={{height : '60vh' ,width:"100%", backgroundSize: "cover" , backgroundPosition : "20%"}}
      src={news.urlToImage ? news.urlToImage : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"}/>
    </div>

    </>
  )
}

export default CarousalItem ;




