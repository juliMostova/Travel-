import DynamicCompon from "../DynamicCompon";
import Destinations from "../Destinations";
import RecentTrip from "../RecentTrip";
import image4 from "../../assets/image/4.jpg";
import React, { useState } from "react";
import "./HomeStyle.css";
import { Alert } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";


const Home = () => {
  const [country, setCountry] = useState("");
  const [updateCountry, setUpdateCountry] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    if (!country.trim()) {
      setErrorMessage("Please enter a country name.");
      return;
    }
    try {
      const resp = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await resp.json();
      setUpdateCountry(data);
    } catch (error) {
      setErrorMessage("Error fetching country data: " + error.message);
    }
  };

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCloseError = () => {
    setErrorMessage("");
  };

  return (
    <div className="containerHome">
      <DynamicCompon
        cName="dynamic_comp"
        DynamicImage={image4}
        titleHead="Your story begin with us..."
        text="Choose Your Favorite Destination."
      />
      <div className="cardDiv">
        <div className="destinationInput">
          <label htmlFor="city">Search your destination:</label>
          <div className="input flex">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter name here.."
              value={country}
            />
            <CiLocationOn className="icon" />
          </div>
        </div>
        <div className="dateInput">
          <label htmlFor="date">Select your date:</label>
          <div className="input flex">
            <input type="date" />
            <CiLocationOn className="icon" />
          </div>
        </div>
        <button onClick={handleSearch} className="searchButton">
          <CiSearch />
        </button>
      </div>
      {errorMessage && (
        <div className="error_message">
          <Alert severity="error" onClose={handleCloseError}>
            {errorMessage}
          </Alert>
        </div>
      )}
      {updateCountry.length > 0 &&
        updateCountry.map((item, index) => (
          <div key={index} className="country_info">
          <IoMdCloseCircle className="iconClose" onClick={()=>setUpdateCountry([])}/>
            <h3>{item.name.common}</h3>
            <p>Capital: {item.capital ? item.capital.join(", ") : "N/A"}</p>
            <p>
              Languages:{" "}
              {item.languages
                ? Object.values(item.languages).join(", ")
                : "N/A"}
            </p>
            <img
              className="flagsImg"
              src={item.flags.png}
              alt={item.name.common}
            />
            <p>Population: {item.population}</p>
            <p>Subregion: {item.subregion}</p>
          </div>
        ))}
      <Destinations />
      <RecentTrip />
    </div>
  );
};

export default Home;
