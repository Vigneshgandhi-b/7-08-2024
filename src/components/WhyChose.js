export default function WhyChose(){
    return(
        <>
            <div className="why_choose_genical">
                <h3 className="Whychose">Why choose Genical</h3>
                <h1 className="TCOYH">Taking Care of Your <br/>Mental Health</h1>
                <p className="Happiness">"For every minute you are angry, you lose sixty seconds of happiness." <br/>– Ralph Waldo Emerson</p>
                <div id="Vision_and_Message">
                    <div className="vision-list1">
                    <h3 className="Ourvision">Our Vision</h3>
                    <ul className="ul-vision1">
                        <li className="list1">Empower minds, inspire growth</li>
                        <li className="list1">Create connections, foster understanding</li>
                        <li className="list1">Support journeys, nurture hope</li>
                    </ul>
                    </div>
                    <div className="vision-list2">
                    <h3 className="Ourvision">Our Mission</h3>
                    <ul className="ul-vision1">
                        <li className="list1">Provide comfort and support to everyone.</li>
                        <li className="list1">Promote mental well-being and resilience.</li>
                        <li className="list1">Foster connections and empower positive change.</li>
                    </ul>
                    </div>
                </div> 
                <div className="infor">
                    <p className="Message_info">Confidentiality</p>
                    <progress id="file" value="99" max="100" color="#E0A146" >99% </progress>
                </div>
                <div className="infor2">
                    <p className="Message_info">Therapy</p>
                    <progress id="file" value="95" max="100" color="#E0A146" >95% </progress>
                </div>
                <div className="infor3">
                    <p className="Message_info">Counseling</p>
                    <progress id="file" value="97" max="100" color="#E0A146" >97% </progress>
                </div>
            </div>
        </>
    )
}