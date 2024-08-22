import React, { useContext } from 'react'
import ThemeContext from '../providers/theme/ThemeContext'


const NewsCard = ({ news }) => {

const {dark} = useContext(ThemeContext);


  return (
    
    <div className={dark ? "card p-3 rounded-0 mb-3 bg-secondary text-light" : "card p-3 rounded-0 mb-3"}>

<div className="row g-0">
    <div className="col-md-4">
      <img 
      style={{height : "250px" , objectFit : "contain"}}
      src={news.urlToImage ? news.urlToImage : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.description}</p>
        <p className="card-text"><small className="text-body-secondary">
          {news.author}
          <br />
          {new Date(news.publishedAt).toDateString("en-IN")}
          </small></p>

          <a
          href={news.url}
          target='_blank'
          className='btn btn-sm btn-dark rounded-0 float-end'>Read More</a>

      </div>
    </div>
  </div>

     </div>

  )
}

export default NewsCard
