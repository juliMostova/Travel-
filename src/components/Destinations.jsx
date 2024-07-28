import "./DestinationsStyle.css";
import image5 from "../assets/image/5.jpg";
import image1 from "../assets/image/1.jpg";
import bagam3 from "../assets/image/baga3.jpg";
import bagam2 from "../assets/image/baga2.jpg";

function Destinations() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame.</p>

      <div className="block_descrip">
        <div className="block-text">
          <h2>The Allure of Vietnam</h2>
          <p>
            Vietnam’s rich cultural history is a tapestry woven from centuries
            of diverse influences. The country has been shaped by the powerful
            presence of China, the French colonial period, and the modern touch
            of American involvement. This blend of cultures has given Vietnam a
            unique identity that differentiates it from other Southeast Asian
            destinations. Its local traditions and customs, rooted in ancient
            beliefs and practices, continue to thrive in contemporary society,
            reflecting the resilience and adaptability of the Vietnamese people.
            The country’s cuisine is a testament to this cultural fusion,
            offering an array of flavors and textures that tantalize the taste
            buds, from the delicate balance of pho to the vibrant freshness of
            Vietnamese spring rolls.
          </p>
        </div>
        <div className="imageGroupVietnam">
          <img src={image5} alt="vietnam1" />
          <img src={image1} alt="vietnam2" />
        </div>
      </div>
      <div className="block_descrip_2">
        <div className="block_text2">
          <h2>Bahamas, North America</h2>
          <p>
            The Bahamas is a paradise corner of the planet with a warm climate
            and landscapes of great beauty. A cruise to the Bahamas will appeal
            to any tourist. Here you will find respectable beaches and chic
            establishments, clean ocean and water parks for family recreation.
            New Providence Island. There is a beach here, which won the title of
            the most luxurious place in the entire archipelago. Tourists find
            here chic hotels, restaurants with amazing cuisine and numerous
            casinos and shops. City of Freeport. Located on the island of Grand
            Bahama. Fans of nightlife will find an ideal shelter here. On the
            coast with stunning pink sand and the best nightlife. Coco Cay and
            Costaway Cay private beaches. These are isolated places with the
            cleanest water and beaches, free from outsiders.
          </p>
        </div>
        <div className="image_2">
          <img src={bagam3} alt="bagamas1" />
          <img src={bagam2} alt="bagamas2" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
