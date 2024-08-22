export const fetchWeather = async(city) => {

    try {
        const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=%20169bfe90c5694cb1bea50128242305&q=${city}&aqi=yes`)
    const data = await response.json()
    return data;
    } catch (error) {
       return error.message
    }


}