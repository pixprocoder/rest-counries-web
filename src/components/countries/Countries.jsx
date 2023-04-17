import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'



const Countries = () => {
  
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  return (
    <div className="countries-container">
      
      {
        countries.map((country, index)=> <Country country={country} key={index}></Country>)
      }
    </div>
  );
};

export default Countries;
