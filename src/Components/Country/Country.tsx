import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface InitiProps {
    name: string
}

interface InitInfo{
    capital:string[],
    population:number,

    latlng:number[],
    flags:{
        png:string
    },
}

interface InitWeatherInfo{
    temperature:number,
    weather_icons:string[],
    precip:number,
    wind_speed:number
}
const Country:React.FC = () => {
    const {name} = useParams<InitiProps>()
    const [countryInfo,setCountryInfo] = useState<InitInfo>()
    const [weatherInfo,setWeatherInfo] = useState<InitWeatherInfo>();
    const [loadingWeather,setLoadingWeather] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(false)

    useEffect(()=>{
        getCountry()
    },[])
    
    const getCountry = async() =>{
        try{
            setLoading(true)
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data = await response.json()
            setCountryInfo(data[0]);
            setLoading(false)
            // console.log(data[0]);
        }catch(error){
           setLoading(false)
           console.log(error)
        }
    }

    const handleWeather =async ()=>{
        try{
            setLoadingWeather(true)
           const response  = await fetch(`http://api.weatherstack.com/current?access_key=ba9de385df8c5f0930b38727951f2a62&query=${countryInfo?.capital}`)
           const data = await response.json();
           setWeatherInfo(data.current)
           setLoadingWeather(false)
           console.log(data.current)
        }catch(error){
           console.log(error)
           setLoadingWeather(false)
        }
        
    }
    
    return (
        <div data-testid="country">
           {
               loading ? <p>loading</p> : countryInfo ?    
               <>
               <h1>Capital : {countryInfo?.capital}</h1>
               <h4>{countryInfo?.population}</h4>
               <img src={countryInfo?.flags.png} alt=""/>
               <p>Latitude: {countryInfo?.latlng[0]}</p>
               <p>Longtitude: {countryInfo?.latlng[1]}</p>
        
           </> : <p>Country not found</p>
           }
           {
               countryInfo && <button onClick={handleWeather}>see Weather</button>
           }
           <hr />
          {
              loadingWeather? <p>loading...</p> : weatherInfo &&
              <>
                <h3>temperature : {weatherInfo.temperature}</h3>
               <img src={weatherInfo.weather_icons[0]} alt="" />
                <h5>{weatherInfo.precip}</h5>
                <h6>{weatherInfo.wind_speed}</h6>
              </>
          }
        </div>
    );
};

export default Country;