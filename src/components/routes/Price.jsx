import img1 from "../../assets/image/Alyaska.jpeg";
import img2 from "../../assets/image/Island.jpeg";
import img3 from "../../assets/image/Kanada.jpg";
import img4 from "../../assets/image/indonesia-Bali.jpg";
import img5 from "../../assets/image/Tikyo.jpg";
import img6 from "../../assets/image/Zambiya.jpg";
import img22 from '../../assets/image/2.jpg';
import img18 from '../../assets/image/18.jpg';
import img19 from '../../assets/image/19.jpg';

import { CiLocationOn } from "react-icons/ci";

import "./PriceStyle.css";
import React,{ useState } from "react";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Alaska",
    location: "USA",
    grade: "Cultural Relax",
    price: "1500 ",
    ua:'$',
    description: `Alaska is home to the largest glacier in the world. This is Bering (5800 square kilometers).
And in general, 85% of the state’s territory is permafrost. Mosses and lichens can lie on the surface, dwarf willows bend in the wind and writhe 
in the embrace of the cold, black spruce trees stick out at random, as if dancing on drunken legs, but dig a little and you will find the ground frozen for many meters. We can draw meridians on the map and argue until we are hoarse whether this is the Middle East of America, or the edge where its West ends. You can’t argue about the North of America: Alaska is the North.
Alaska is the North, and the North is harsh. On January 23, 1971, Prospect 
Creek recorded a temperature of -62.2℃`,
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Island",
    location: "Norvegia",
    grade: "Cultural Relax",
    price: "800",
    ua:'$',
    description: `Iceland is one of the most beautiful places on Earth. 
    Only 320 thousand people live here, but the country is constantly crowded with tourists from all over the world who want to see its geysers and fjords, cliffs and glaciers.
     Iceland is definitely worth adding to your list of countries to visit next year.`,
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Canada",
    location: "North America",
    grade: "Cultural Relax",
    price: "750",
    ua:'$',
    description: `Thanks in large part to its proximity to the Rocky Mountains,
     Calgary has traditionally been a popular winter sports destination. After the 1988 Winter Olympics,
      the city retained several major sports facilities, including the Canadian Olympic Park
       (luge, cross-country skiing, ski jumping, alpine skiing, snowboarding and some summer sports) and the Olympic Oval (speed skating and hockey). ). These facilities serve as the main training grounds for a number of professional athletes.
     During the summer months, Canada Olympic Park doubles as a mountain biking destination.`,
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Bali",
    location: "Indonesia",
    grade: "Cultural Relax",
    price: "1200",
    ua:'$',
    description: `Bali is an Indonesian island that is part of the Lesser Sunda archipelago.
     Bali neighbors the island of Java to the west and the island of Lombok to the east.
      The island has long been associated with an exotic paradise: picturesque green rice
       fields and plantations, soaring volcanoes, cool lakes and fast-flowing rivers, lush
    green forests and palm-fringed beaches. Bali is Indonesia's most important tourist 
    destination and, as a result, suffers from commercialization
     and high population density, but this mainly applies to a few main resort regions.`,
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Tokyo",
    location: "Japan",
    grade: "Cultural Relax",
    price: "1700",
    ua:'$',
    description: `Japan is a country of cherry blossoms, ancient castles, fantastic
     legends and minimalism. Every park, house, museum, island is already a work of art.
      Travelers come here in search of tranquility, unique beauty, contemplative philosophy
       and advances in science and technology. A tour to Japan is a ticket to a world of contrasts.
        Next to picturesque quiet gardens and palaces you can see high-speed trains
     and incredible trams that take passengers straight to the peak of the mountain.`,
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Zabmia",
    location: "South Africa",
    grade: "Cultural Relax",
    price: "1300",
    ua:'$',
    description: `Traveling around Zambia is an opportunity to get many vivid impressions and photographs.
     Amateur photographers enjoy photographing picturesque landscapes, wild animals, waterfalls, and local
 residents in national costumes.
     Such photographs will be a great reminder of this wonderful African country.`,
  },
  {
    id:7,
    imgSrc: img22,
    destTitle: "Utah",
    location: "Arizona",
    grade: "Cultural Relax",
    price: "2900",
    ua:'$',
    description:`Welcome to Utah - "The Greatest Snow on
     Earth" - an outdoor lover's paradise! Home to the 2002 Winter Olympics, Park City has plenty to keep winter fun seekers busy. Here, snowboarders and skiers can ride on miles of scenic slopes covered in deep, fluffy snowdrifts and enjoy breathtaking mountain views. The Olympic Park offers vacationing families a range of ski activities, attractions and shows. Alta, Sundance, Snowbird and Brighton resorts are also
     popular destinations for cross-country skiing and
      downhill skiing.`
  },
  {
    id:8,
    imgSrc: img18,
    destTitle: "San Francisco",
    location: "California",
    grade: "Cultural Relax",
    price: "2400",
    ua:'$',
    description:`San Francisco is a global tourist destination,
     known for its cool summer fogs, steep hills and mix of
      Victorian and modern architecture. The city's attractions include the Golden Gate Bridge,
     Alcatraz Island, the cable car system, Coit Tower and Chinatown.`
  },
  {
    id:9,
    imgSrc:img19 ,
    destTitle: "Los Angeles",
    location: "California",
    grade: "Cultural Relax",
    price: "3400",
    ua:'$',
    description:`Meet your favorite idol on the streets of the
     "Capital of Entertainment", dive into the amazing dimension
      of the world film industry, fulfill a childhood dream by
       visiting Disneyland, or stroll along the legendary Walk of Fame
        - the giant city in southern California called Los Angeles will
         have something to offer absolutely every guest. We have
          collected for you a selection of the most interesting locations of the city so that you do not get lost among the kaleidoscope of impressions.`
  }

];

const Price = () => {

  const [maxPrice,setMaxPrice] = useState(5000);

const handleChangeRange = (e)=>{

setMaxPrice(Number(e.target.value));
}

const filterData = Data.filter((item) =>item.price <= maxPrice);
    return (
      <div className="priceContainer">
        
   <h2 className="title">🎇Seasonal Discounts🎇</h2>
        <div>
  <input type="range" onChange={handleChangeRange}
  id="priceRange" 
  name="priceRange" 
  min="0" max="5000"
  value={maxPrice}> 
 
</input>
  <label for="volume"> Max price:{maxPrice}</label>
       </div>
        <div className="grid_container">
          {filterData.map(
            ({ id, imgSrc,ua, destTitle, location, grade, price, description }) => {
              return (
                <div key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>
                  <h3>{destTitle}</h3>
                  <div className="location">
                    <CiLocationOn className="picture" />
                    {location}
                  </div>
                  <div className="describe_box">
                    <div className="grade">{grade}</div>
                    <div className="price">{price}</div>
                    <p>{ua}</p>
                  </div>
                  <div className="description_tour">{description}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  };
  
  export default Price;