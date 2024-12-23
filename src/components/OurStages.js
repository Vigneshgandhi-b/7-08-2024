import Image from "next/image"
import notetaking from "../../../public/note-taking.png"
import consult from "../../../public/consult2.png"
import CustomerService from "../../../public/customer-service.png"
import Therapy from "../../../public/therapist.png"
import Clinic from "../../../public/clinic.png"
import final from "../../../public/final.png"
import Clock from "../../../public/clock.png"
export default function OurStages({stageclass,forstagestyle}){
    return(
        <>
            <div id="our_stages">
                <h3 className="OurStages">Our Stages</h3>
                <h1 className="BAP">Because All Problems Have Solutions</h1>
                <p className="Stage1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                <div className="ImagesPsych">
                    <Image src={notetaking} alt="icon" style={forstagestyle} className={stageclass} />
                    <Image src={consult} alt="icon" style={forstagestyle} className={stageclass} />
                    <Image src={Therapy} alt="icon" style={forstagestyle} className={stageclass} />
                    <Image src={final} alt="icon" style={forstagestyle} className={stageclass} />
                </div>
                <div className="ImagePsych2">
                    <h3 className="psychtext1">Make an Appointment</h3>
                    <h3 className="psychtext2">Consultation</h3>
                    <h3 className="psychtext3">Therapy/Counseling</h3>
                    <h3 className="psychtext4">Final Result</h3>
                </div>
            </div>
            <div className="ContainerBox">
                <div className="leftCont">
                    <div id="Name">
                        <label className="label" htmlFor="YourName">Your Name</label>
                        <br/>
                        <input type="text" className="inputboxtext" about="Name" placeholder="Full Name"/>
                    </div>
                    <div id="Email">
                        <label className="label" htmlFor="YourEmail">Your Email</label>
                        <br/>
                        <input type="email" className="inputboxtext" placeholder="Email Address" about="Email" />
                    </div>
                    <div id="Phone">
                        <label className="label" htmlFor="Yourphone">Your phone</label>
                        <br/>
                        <input type="tel" className="inputboxtext" placeholder="phone Number" about="phone" />
                    </div>
                    <div id="SplitInput">
                        <section className="input1">
                            <label className="label" htmlFor="Yourphone">Select Services</label>
                            <br/>
                            <input type="text" placeholder="Select Services" className="splitboxtext" about="services" />
                        </section>
                        <section className="input2">
                            <label className="label" htmlFor="Yourphone">Select Date</label>
                            <br/>
                            <input type="date" className="splitboxtext" placeholder="Select Date" about="services" />
                        </section>
                    </div>
                    <div id="button">
                        <button type="submit" about="book_an_appointment" className="Appointbtn">Book an Appointment</button>
                    </div>
                </div>
                <div className="rightCont">
                    <h3 className="Appoint">Appointment</h3>
                    <h1 className="MakeAppoint">Make An Appointment</h1>
                    <p className="lorem1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="AppointInfo">
                        <div className="CustomerServices" style={{width:"100%",height:"100px"}}>
                            <section>
                                <Image src={CustomerService} alt="Customer Services" style={{width:"64px",height:"64px"}} about="CS"></Image>
                            </section>
                            <section>
                                <p className="cs">Customer Services</p>
                                <p className="cs1">+123-456-7890</p>
                            </section>
                        </div>
                        <div className="CustomerServices2" style={{width:"100%",height:"100px"}}>
                            <section>
                                <Image src={Clinic} alt="Customer Services" style={{width:"64px",height:"64px"}} about="CS"></Image>
                            </section>
                            <section>
                                <p className="cs">Clinic Address</p>
                                <p className="cs1">99th living street,bengaluru cant</p>
                            </section>
                        </div>
                        <div className="CustomerServices3" style={{width:"100%",height:"100px"}}>
                            <section>
                                <Image src={Clock} alt="Customer Services" style={{width:"64px",height:"64px"}} about="CS"></Image>
                            </section>
                            <section>
                                <p className="cs">Opening Hours</p>
                                <p className="cs1">Monday - Saturday ( 00:00-21:00 )</p>
                                <p className="cs2">Sunday ( closed )</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}