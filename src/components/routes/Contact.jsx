import DynamicCompon from "../DynamicCompon";
import image3 from "../../assets/image/3.jpg";
import "./ContactStyle.css";


const Contact = () => {
  return (
    <>
      <DynamicCompon
        cName="contact"
        DynamicImage={image3}
        titleHead="Contact"
      />
      <div className="container_Contact">
      {/* <div className="info_box"> */}
        <h2>If You have any qestions or propose You can type us any time</h2>
        <div className="arrow">
          <i class="fa-solid fa-arrow-down"></i>
        </div>

        <form className="form-info">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Subject"></input>
          <textarea placeholder="Your message.." rows={4}></textarea>
          <button>Send</button>
        </form>
      {/* </div> */}
      </div>
    </>
  );
};

export default Contact;
