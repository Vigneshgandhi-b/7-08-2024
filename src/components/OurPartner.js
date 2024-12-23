import "../CSS/Home4.css"
import Image from "next/image"
import logo from "../../../public/logo1.png"
import logo1 from "../../../public/logo2.png"
import logo2 from "../../../public/logo3.png"
const ImgStyle1={
    width:"100px",
    height:"100px"
}
export default function OurPartner(){
    return(
        <>
            <div className="boxback">
                <div className="leftSider">
                    <h3 className="Our_partner">Our Partner</h3>
                    <h1 className="Collab">In Collabaration With</h1>
                    <p className="lorem4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="rightSider">
                    <div className="topside">
                        <section>
                            <Image src={logo} style={ImgStyle1} className="logo" alt="logo" />
                            <Image src={logo1} style={ImgStyle1} className="logo" alt="logo" />
                            <Image src={logo2} style={ImgStyle1} className="logo" alt="logo" />
                        </section>
                        <section>
                            <Image src={logo} style={ImgStyle1} className="logo" alt="logo" />
                            <Image src={logo1} style={ImgStyle1} className="logo" alt="logo" />
                            <Image src={logo2} style={ImgStyle1} className="logo" alt="logo" />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}