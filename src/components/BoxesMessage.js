import Image from "next/image"
import Quotes from "@/../public/quotes.png"
import manAva from "@/../public/manavatar.png"
import womAva from "@/../public/woman.png"
const Iconstyles={
    width:"64px",
    height:"64px"
}

const Instyles={
    marginTop:"100px",
}

export default function BoxesMessage(){
    return(
        <>
            <div className="boxes" style={Instyles}>
                <div className="box1" style={{backgroundColor:"#284659 !important"}}>
                    <Image className="imageicons" src={Quotes} style={Iconstyles} alt="icon" />
                    {/* <p className="boxmessage">Consultation</p> */}
                    <p className="boxmessage-c" style={{width:"80%",marginLeft:"10%"}}>This platform has been a game-changer for me. The articles and resources are so well-written and easy to understand. I’ve started practicing mindfulness daily, thanks to the tips here, and it’s made a huge difference in my stress levels.</p>
                    <Image className="person" src={manAva} style={{width:"64px",height:"64px",marginTop:"0px"}} alt="person-1"/>
                    <p className="pName" style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"-1px"}}>Mathew king</p>
                    <p className="designation" style={{color:"#E0A146",fontFamily:"sans-serif",marginTop:"-15px"}}>Army</p>
                </div>
                <div className="box2">
                    <Image className="imageicons" src={Quotes} style={Iconstyles} alt="icon" />
                    {/* <p className="boxmessage-2">Therapy</p> */}
                    <p className="boxmessage-c2" style={{width:"80%",marginLeft:"10%"}}>I love the content and guidance offered, but I sometimes feel overwhelmed with the amount of information. It would be great to have a personalized section or step-by-step guides to help me focus on the areas I need most</p>
                    <Image className="person" src={womAva} style={{width:"64px",height:"64px",marginTop:"0px"}} alt="person-1"/>
                    <p className="pName" style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"-1px"}}>Amy Grace</p>
                    <p className="designation" style={{color:"#E0A146",fontFamily:"sans-serif",marginTop:"-15px"}}>Artist</p>
                </div>
                <div className="box3">
                    <Image className="imageicons" src={Quotes} style={Iconstyles} alt="icon" />
                    {/* <p className="boxmessage-3">Medication</p> */}
                    <p className="boxmessage-c3" style={{width:"80%",marginLeft:"10%"}}>Their insights during therapy sessions are valuable, but I noticed that some clients might benefit from a bit more structured guidance or action steps to take between sessions. Adding this element could enhance their progress.</p>
                    <Image className="person" src={manAva} style={{width:"64px",height:"64px",marginTop:"0px"}} alt="person-1"/>
                    <p className="pName" style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"-1px"}}>Dany Silvercrest</p>
                    <p className="designation" style={{color:"#E0A146",fontFamily:"sans-serif",marginTop:"-15px"}}>Designer</p>
                </div>
            </div>
        </>
    )
}