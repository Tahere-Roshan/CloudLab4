import { useState } from "react"

export default function  Weather() {
  const [temprature, settemprature] = useState('');
  const [humididty, sethumididty] = useState('');
  const [city, setcity] = useState('');
  const [country, setcountry] = useState('');

  const getWeather=(e) => {
   e.preventDefault();
   const city=e.target.elements.city.value;
   const country=e.target.elements.country.value;
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=84162686b1907b6d3409620172431194`)
    .then((response) => response.json())
    .then((actualData) => {
     console.log(actualData)
     settemprature(actualData.main.temp);
     sethumididty(actualData.main.humidity)
     setcity(actualData.name)
     setcountry(actualData.sys.country)
   })
    .catch((err) => {
     console.log(err.message);
    });
  };

  return (

    <div>
    <h1 className="header">Weather</h1>
     <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country" />
        <button type="submit"> Get Weather</button>
     </form>
     <div className="info">
       <p>{temprature}</p> 
       <p >{humididty}</p> 
       <p>{city}</p> 
       <p>{country}</p> 
     </div>

  </div>

   

  )
}