export default function About(){
    return(
        <>
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
        </>
    )
}