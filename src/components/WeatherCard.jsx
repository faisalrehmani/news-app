import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../providers/theme/ThemeContext'
import WeatherContext from '../providers/weather/WeatherContext';
import { fetchWeather } from '../providers/weather/WeatherActions';

const WeatherCard = () => {



const {dark} = useContext(ThemeContext); 
const {weatherData , dispatch} = useContext(WeatherContext); 

const [mycity , setMyCity] = useState("")

const [weatherError , setWeatherError] = useState(false)

const getWeather = async (city) => {
  
 const data = await fetchWeather(city)
 
    if(data.location){
      dispatch({
        type : "GET_WEATHER",
        payload : data,
       })
      setWeatherError(false);
    }else{
      setWeatherError(true);
      setTimeout(() => {
        setWeatherError(false);
      }, 1000);
    }

}

const handleSubmit = (e) => {
  e.preventDefault()
  getWeather(mycity)
  setMyCity("");
}

useEffect(()=>{
  getWeather("indore")
}, [])



if(weatherError){
  return(
    <div className="card p-3 rounded-0 bg-danger text-light">

    <h4 className='text-light text-center'>Envalid City</h4>

    
    
 </div>
  )
}



if(!weatherData){
  return(
    <div className={dark ? "card p-3 rounded-0 bg-secondary text-light" : "card p-3 rounded-0"}>

    <h4 className={dark ? 'text-light' : 'text-secondary'}>Loading...</h4>

    
    
 </div>
  )
}


  return (
   
    <div className={dark ? "card p-3 rounded-0 bg-secondary text-light" : "card p-3 rounded-0"}>

        <h4 className={dark ? 'text-light' : 'text-secondary'}>Today's Weather </h4>


        <form className="my-2" onSubmit={handleSubmit}>
          <input type="text" 
          className='form-control rounded-0 border-secondary' 
          placeholder='Enter City Name'
          required
          onChange={(e) => setMyCity(e.target.value)}
          value={mycity}
         />
          <button className={dark ? 'btn btn-dark rounded-0 my-2 float-end' : 'btn btn-success rounded-0 my-2 float-end'}>Search City</button>
        </form>


        <div className="d-flex align-items-center justify-content-between">

        <span>
        <h1>{weatherData?.current.temp_c} C</h1>
        <h2>{weatherData?.location.name}</h2>
        </span>

        <span>
        <img src={weatherData?.current.condition.icon} alt="" />
        <p>{weatherData?.current.condition.text}</p>
        </span>

        </div>
        
     </div>

  )
}

export default WeatherCard
