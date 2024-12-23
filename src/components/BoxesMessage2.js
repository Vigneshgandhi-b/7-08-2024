import Image from "next/image"
import Consult from "@/../public/consultation.png"
import therapy from "@/../public/therapist.png"
import medication from "@/../public/AI.png"

export default function BoxesMessage2({style2,ControlBox}){
    return(
        <>
            <div className="boxes" style={ControlBox}>
                <div className="box1">
                    <Image className="imageicons" src={Consult} style={style2} alt="icon" />
                    <p className="boxmessage">Consultation</p>
                    <p className="boxmessage-c">Consult with our psychologist to get best suggesstion and clarity solutions</p>
                </div>
                <div className="box2">
                    <Image className="imageicons" src={therapy} style={style2} alt="icon" />
                    <p className="boxmessage-2">Therapy</p>
                    <p className="boxmessage-c2">Attend the One to One Therapy Session with our psychologist</p>
                </div>
                <div className="box3">
                    <Image className="imageicons" src={medication} style={style2} alt="icon" />
                    <p className="boxmessage-3">Medication</p>
                    <p className="boxmessage-c3">Consult with our psychologists to get best suggesstion</p>
                </div>
            </div>
        </>
    )
}