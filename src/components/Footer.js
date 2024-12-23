import Image from "next/image";
import Facebook from "@/../public/facebook.png"
import Twitter from "@/../public/twitter.png"
import Linkedin from "@/../public/linkedin.png"
import Youtube from "@/../public/youtube.png"
import AI from "@/../public/AI.png"
import arrowright from "@/../public/arrow-point-to-right.png"

const StylesIcon={
    width:"32px",
    height:"32px"
}
const StylesIcon2={
    width:"10px",
    height:"10px"
}
export default function Footer(){
    return(
        <>
            <div id="Footer">
                <div id="FM-1">

                    <section className="foot-section1">
                        <div className="top">
                            <section className="section1">
                                <Image src={AI} alt="icon" className="logofooter" style={StylesIcon}/>
                                <p className='headtext-foot'> Genical</p>
                                <p className='Subheadtext-foot'>Take care of your health</p>
                            </section>
                            <section className="section2">
                            </section>
                        </div>
                        <div className="middle">
                            <p className="lorem_footer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="icons">
                            <Image src={Facebook} alt="icons" className="icons1" style={StylesIcon} />
                            <Image src={Twitter} alt="icons" className="icons1" style={StylesIcon} />
                            <Image src={Linkedin} alt="icons" className="icons1" style={StylesIcon} />
                            <Image src={Youtube} alt="icons" className="icons1" style={StylesIcon} />    
                        </div>
                    </section>
                    <section className="foot-section2">
                        <h3 className="quicklinks">Quick Links</h3>
                        <a href="/home" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Home</a>
                        <a href="/Aboutus" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Aboutus</a>
                        <a href="/Services" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Services</a>
                        <a href="/Appointment" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Appointment</a>
                        <a href="/pricing" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Pricing</a>
                        <a href="/Contact Us" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Contact Us</a>
                    </section>
                    <section className="foot-section3">
                        <h3 className="Services">Services</h3>
                        <a href="/home" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Individual Therapy</a>
                        <a href="/Aboutus" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Family Counseling</a>
                        <a href="/Services" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Couple Therapy</a>
                        <a href="/Appointment" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Children Therapy</a>
                        <a href="/pricing" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Group Counseling</a>
                        <a href="/Contact Us" className="LinkFoot"><Image src={arrowright} alt="icons" className="icons1" style={StylesIcon2} />Career Counseling</a>
                    </section>
                    <section className="foot-section4">
                        <h3 className="Information">Information</h3>
                        <a href="/home" className="LinkFoot"><i className="fa-solid fa-phone" style={{color: "#f2d49b",marginRight:"2%"}}></i> +123-456-7890</a>
                        <a href="/Aboutus" className="LinkFoot"><i className="fa-solid fa-envelope" style={{color: "#f2d49b",marginRight:"2%"}}></i> info@genical.com</a>
                        <a href="/Services" className="LinkFoot"><i className="fa-solid fa-location-dot" style={{color: "#f2d49b",marginRight:"2%"}}></i> 123 Elm Street, Springfield</a>
                        {/* <a href="/Appointment" className="LinkFoot">Appointment</a> */}
                        <h3 className="openhours">Opening Hours</h3>
                        <a href="/pricing" className="LinkFoot">Monday - Saturday(00:00-21:00)</a>
                        <a href="/Contact Us" className="LinkFoot">Sunday(Closed)</a>
                    </section>
                </div>
            </div>
            <div className="footline">
                <p className="copyright_reserved">Copyright 2023 © All Rights Reserved By Genical.</p>
            </div>
        </>
    )
}