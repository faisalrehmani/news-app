import React, { useContext, useState } from 'react'
import ThemeContext from '../providers/theme/ThemeContext'
import NewsContext from '../providers/news/NewsContext';
import { fetchNews } from '../providers/news/NewsActions';

const Navbar = () => {

const {dark} = useContext(ThemeContext);
const {dispatch} = useContext(NewsContext);

const [text , setText ] = useState("")

const getNews = async(text) => {
  const allNews = await fetchNews(text);
  dispatch({
    type : "GET_NEWS",
    payload : allNews,
  });
}

const handleSubmit = async (e) => {
  e.preventDefault()
 getNews(text)
  setText("")
}

  
  return (
    <>
      
      <nav className={dark ? "navbar navbar-expand-lg bg-dark shadow" : "navbar navbar-expand-lg bg-light shadow"}>
  <div className="container-fluid">
    <a className={dark ? "navbar-brand text-light"  : "navbar-brand" }href="#">Taaza-Khabar</a>
    <button className={dark ? "navbar-toggler bg-light" : "navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className={dark ? "nav-link active text-light" : "nav-link active"} aria-current="page" href="#"
          onClick={() => getNews("Indian Sports")}>
            Sports</a>
        </li>

        <li className="nav-item">
          <a className={dark ? "nav-link active text-light" : "nav-link active"} aria-current="page" href="#"
           onClick={() => getNews("Bollywood")}>
            Entertainment</a>
        </li>

        <li className="nav-item">
          <a className={dark ? "nav-link active text-light" : "nav-link active"} aria-current="page" href="#"
           onClick={() => getNews("Indian Politics")}>
            Politics</a>
        </li>

        <li className="nav-item">
          <a className={dark ? "nav-link active text-light" : "nav-link active"} aria-current="page" href="#"
           onClick={() => getNews("Indian Geopolitics")}>
            International</a>
        </li>
    
      </ul>
      <form className="d-flex" role="search"onSubmit={handleSubmit}>
        <input className="form-control me-2 rounded-0" type="search" placeholder="Search" aria-label="Search"
        onChange={(e) => setText(e.target.value)}
        value={text}
        />
        <button className="btn btn-success rounded-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
