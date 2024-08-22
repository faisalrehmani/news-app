import React, { useContext } from 'react'
import CarousalItem from './CarousalItem';
import NewsContext from '../providers/news/NewsContext';
import { IoFastFood } from 'react-icons/io5';


const Carousal = () => {

const {allNews} = useContext(NewsContext);



 

  return (
    <>
      
      <div id="carouselExample" className="carousel slide mb-3">
  <div className="carousel-inner">
     
      {
        allNews.map((news , index) => (<CarousalItem key={index} news={news} active={index} />
      
      ))};
  
   
  </div> 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carousal
