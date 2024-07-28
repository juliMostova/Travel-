import DynamicCompon from "../DynamicCompon";
import React from "react";
import "./AboutStyle.css";
import VideoPlayer from '../VideoPlayer';
import imageMap from "../../assets/image/map.jpg";
import male1 from "../../assets/image/male-1.jpg";
import male2 from "../../assets/image/male-2.jpg";
import male3 from "../../assets/image/male-3.jpg";
import male4 from "../../assets/image/male-4.jpg";
import male5 from "../../assets/image/male-5.jpg";

const About = () => {
  return (
    <div>
      <DynamicCompon cName="about" DynamicImage={imageMap} titleHead="About" />
      <div className="text_about">
        <h3>Who are we ?</h3>
        <p>
          "Youth tourism" is a team of enthusiastic travelers united by a common
          goal: to discover the beauty of Ukraine and share it with others. Our
          team consists of two main parts:
        </p>
        <h3>The team that creates the tours.</h3>
        <p>
          We are experienced managers, logisticians, marketers and other
          specialists who work in harmony to ensure that every detail of your
          trip is flawlessly organized. We carefully plan routes, select the
          best hotels and restaurants, arrange excursions and entertainment. Our
          goal is to make sure that you can completely relax and enjoy your trip
          without worrying about any organizational issues.
        </p>
        <h3>Our guides which create an atmosphere.</h3>
        <div className="image_guide">
          <img src={male1} alt="male1"/>
          <img src={male2} alt="male2"/>
          <img src={male3} alt="male3"/>
          <img src={male4} alt="male4"/>
          <img src={male5} alt="male5"/>
        </div>
        <h3>What do we offer?</h3>
        <p>
          Excursions for every taste: From exciting walks through historic
          cities to active hikes in the mountains. Discovering new places: Our
          guides will take you not only through Lviv, but also through other
          pearls of Ukraine: Ivano-Frankivsk, Ternopil, Chernivtsi and others.
          Our goal is to make your trip unforgettable!
        </p>
      </div>
      <VideoPlayer/>
    </div>
  );
};

export default About;
