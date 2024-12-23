import Person from "@/../public/person.png"
import family from "@/../public/family.png"
import couple from "@/../public/couple.png"
import children from "@/../public/children.png"
import Group from "@/../public/group.png"
import Career from "@/../public/Career.png"
import Image from "next/image"
// import ServicesContainer from "./Components/ServicesContainer";
const Iconstyles={
    width:"64px",
    height:"64px",
  }
export default function ServicesContainer(){
    return(
        <>
            <div className="firstcontainer">
                <h3 className="our_services">Our Services</h3>
                <h1 className="YHIAE">Your Happiness is An Essential</h1>
                <p className="Happiness_message">Happiness is letting go of what you think your life is<br/> supposed to look like and celebrating it for everything that it is</p>
                <div className="boxes-container">
                    <div className="box1-cd">
                        <Image className="individualicon" src={Person} style={Iconstyles} alt="individual"/>
                        <h3 className="individual">Individual Therapy</h3>
                        <p className="description_ind">Your Happiness is An Essential One. <br/>Attend the Session with our psychologist</p>
                        <a href="#" className="readmoretext1">Read more   <i className="fa-solid fa-arrow-right" style={{color: "#f2d49b"}}></i></a>
                        </div>
                    <div className="box2-cd">
                        <Image className="individualicon" src={family} style={Iconstyles} alt="individual"/>
                        <h3 className="individual">Family Therapy</h3>
                        <p className="description_ind">Your Happiness is An Essential One. <br/>Attend the Session with our psychologist</p>
                        <a href="#" className="readmoretext">Read more   <i className="fa-solid fa-arrow-right" style={{color: "black"}}></i></a>
                    </div>
                    <div className="box3-cd">
                        <Image className="individualicon" src={couple} style={Iconstyles} alt="individual"/>
                        <h3 className="individual">Couples Therapy</h3>
                        <p className="description_ind">Your Happiness is An Essential One. <br/>Attend the Session with our psychologist</p>
                        <a href="#" className="readmoretext">Read more   <i className="fa-solid fa-arrow-right" style={{color: "black"}}></i></a>
                    </div>
                </div>
                <div className="boxes-container2">
                    <div className="box1-cd">
                        <Image className="individualicon" src={children} style={Iconstyles} alt="individual"/>  
                        <h3 className="individual">Children Therapy</h3>
                        <p className="description_ind">Your Happiness is An Essential One. <br/>Attend the Session with our psychologist</p>
                        <a href="#" className="readmoretext">Read more   <i className="fa-solid fa-arrow-right" style={{color: "black"}}></i></a>
                    </div>
                    <div className="box2-cd">
                        <Image className="individualicon" src={Group} style={Iconstyles} alt="individual"/>
                        <h3 className="individual">Group Counseling</h3>
                        <p className="description_ind">Your Happiness is An Essential One. <br/>Attend the Session with our psychologist</p>
                        <a href="#" className="readmoretext">Read more   <i className="fa-solid fa-arrow-right" style={{color: "black"}}></i></a>
                    </div>
                    <div className="box3-cd">
                        <Image className="individualicon" src={Career} style={Iconstyles} alt="individual"/>
                        <h3 className="individual">Career Counseling</h3>
                        <p className="description_ind">Your Happiness is An Essential One. <br/>Attend the Session with our psychologist</p>
                        <a href="#" className="readmoretext">Read more   <i className="fa-solid fa-arrow-right" style={{color: "black"}}></i></a>  
                    </div>
                </div>
            </div>
        </>
    )
}