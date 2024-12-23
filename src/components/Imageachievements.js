import Image from "next/image"
import Award from "@/../public/award.png"
import ManAndWomen from "@/../public/man-and-woman.png"
import ps from "@/../public/problem-solving.png"
import therapist from "@/../public/therapist.png"
const Iconstyles={
    width:"64px",
    height:"64px",
  }

export default function Imageachievements(){
    return(
        <>
            <div className="image-3">
                <div className="centre">
                    <div className="excellence">
                        <Image src={Award} className="icon" style={Iconstyles} alt="award"/>
                        <Image src={ManAndWomen} className="icon" style={Iconstyles} alt="men and woman"/>
                        <Image src={ps} className="icon" style={Iconstyles} alt="problem solving"/>
                        <Image src={therapist} className="icon" style={Iconstyles} alt="psychologist"/>
                        <br/>
                    </div>
                    <div className="excellence1">
                        <p className="text1">13<span className="spantext">th</span></p>
                        <p className="text2">750<span className="spantext">+</span></p>
                        <p className="text3">96<span className="spantext">%</span></p>
                        <p className="text4">100<span className="spantext">+</span></p>
                    </div>
                    <div className="excellence2">
                        <p className="subtext1">Years Experience</p>
                        <p className="subtext2">Happy Client</p>
                        <p className="subtext3">Problem Solved</p>
                        <p className="subtext4">Psychologist</p>
                    </div>
                </div>
            </div>
        </>
    )
}