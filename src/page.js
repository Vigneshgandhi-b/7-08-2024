import Image from "next/image";
import Navbar from "./Components/Navbar";
import "./CSS/Home.css"
import Psycology from "@/../public/Psycology.jpg"
import AI from "@/../public/AI.png"
import Security from "@/../public/personal-security.png"
import "./CSS/Home2.css"
import WhyChose from "./Components/WhyChose";
import Imageachievements from "./Components/Imageachievements";
import ServicesContainer from "./Components/ServicesContainer";
import BoxesMessage from "./Components/BoxesMessage";
import BoxesMessage2 from "./Components/BoxesMessage2";
import OurStages from "./Components/OurStages";
import OurPartner from "./Components/OurPartner";
import OurBlog from "./Components/OurBlog";
import Footer from "./Components/Footer";
const ImageStyle={
  width:"100%",
  height:"720px !important",
  opacity:"100% !important",
}
const ImageStyle2={
  marginTop:"84px",
  width:"100%",
  height:"380px !important",
  opacity:"100% !important",
}
const ControlBoxstyles={
  marginTop:"80px",
}
const Iconstyles={
  width:"64px",
  height:"64px",
}
const style2={
  width:"64px",
  height:"64px",
  marginTop:"40px"
}

const forstagestyle1={

}
export default function page(){
  return(
    <>
      <Navbar/>
      <div className="Home" about="Home" aria-controls="Home" aria-label="Home">
        <div id="image-1" about="image">
          <div className="image-1" id="Homeimage" style={ImageStyle} alt="loading"/>
          {/* <div className="image-2" id="Homeimage2"/> */}
            <p className="welcome_message">Welcome to Genical</p>
            <p className="welcome_message2">You Deserve <span className="peace">Peace & Freedom</span></p>
            <p className="message">Your story is important, and so are you. Our mission is to create a safe, supportive space where you<br/> can feel heard, valued, and understood. Let’s work together to build the life and peace you deserve.</p>
            <div id="buttongroup-1">
              <button className="button">Consultation</button>
              <button className="button1">Make an appointment</button>
            </div>
        </div>
        <BoxesMessage2 style2={style2} ControlBox={ControlBoxstyles}/>
        <div className="About">
          <h6 className="h6About">About Genical</h6>
          <h3 className="WeAreHere">We Are Here for You</h3>
          <p className="MessageWere">Whether you're navigating life's challenges or seeking support for your mental well-being, our team is here for you every step of the way. Explore resources, connect with professionals, and take the first step toward a brighter tomorrow. Together, we can make things better.<br/><br/>Every day brings challenges, but it also brings opportunities for growth and healing. We’re here to help you discover your strength and guide you toward a brighter future. 
          Let’s begin this journey together.</p>
          <div className="ImageIcons">
            <div className="Icon1expert">
              <Image src={AI} className="experticon" alt="Icon-1" />
              <p className="head1text">Expert psychologist</p>
              <p className="quotes">"You're Not Alone <br/> We're Here to Help."</p>
            </div>
            <div className="Icon2expert">
              <Image src={Security} className="experticon-2" alt="Icon-2" />
              <p className="head2text">Confidentiality</p>
              <p className="quotes-2">"We're Here for You <br/> Every Step of the Way."</p>
            </div>
          </div>
          <div className="backgroundshadow">
            <blockquote cite="dialogbox" className="dialogbox">
              <p className="psycology_message">Your story is important, and so are you. Our mission is to create a safe, <br/>supportive space where you can feel heard, valued, and understood. <br/>Let’s work together to build the life and peace you deserve.</p>
            </blockquote>
          </div>
          <div className="boxshadowback">
            <div className="Image1">
              <Image src={Psycology} className="psycology_image" alt="Image of psychologist speaking to patient"/>
            </div>
            <div className="Image2">
              <Image src={Psycology} className="psycology_image2" alt="Image of psychologist speaking to patient"/>
            </div>
          </div>
        </div>
          <button className="More-About">More About Us</button>
      </div>
      <Imageachievements />
      <ServicesContainer />
      <div className="boxshadowback2">
        <div className="Image3">
          <Image src={Psycology} className="psycology_image3" alt="Image of psychologist speaking to patient"/>
        </div>
        <div className="Image4">
          <Image src={Psycology} className="psycology_image4" alt="Image of psychologist speaking to patient"/>
        </div>
      </div>
      <WhyChose />
      <BoxesMessage/>
      <div className="image-5" style={ImageStyle2}>
        <p className="AnxietyMessage">You Need to Understand That Mental Anxiety Can be <span className="spanAnx">Discussed</span> </p>
        <p className="AnxMess2">Your story is important, and so are you. Our mission is to create a safe, supportive space where you can feel heard, valued, and understood. Let’s work together to build the life and peace you deserve.</p>
        <button type="button" className="buttonAnx">Consultation Now</button>
      </div>
      <OurStages forstagestyle={Iconstyles} stageclass={"consultation"}/>
      <OurPartner/>
      <OurBlog />
      <Footer />
    </>
  );
}