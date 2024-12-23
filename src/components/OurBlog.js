import Image from "next/image"
import Psyco from "@/../public/psy1.jpg"

const ImageStyle={
    width:"100%",
    height:"50%",
    borderRadius:"20px"
}

export default function OurBlog(){
    return(
        <>
            <div id="Our_Blog">
                <h3 className="OurStages" >Our Stages</h3>
                <h1 className="BAP">Because All Problems Have Solutions</h1>
                <p className="Stage1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                <div className="cards">
                    <div className="box1card">
                        <Image className="card" src={Psyco} style={ImageStyle} alt="image"/>
                        <h4 className="Mental-Health">Mental Health, Education Facility Survey Research</h4>
                        {/* <p className="Date">15 December 2024</p> */}
                        <section className="secBlog">
                            <i className="fa-solid fa-calendar-days" style={{color: "#f2d49b",marginRight:"10px",marginLeft:"20px"}}/>
                            <p className="Date">15 December 2024</p>
                            <i className="fa-solid fa-message" style={{color: "#f2d49b",marginLeft:"10px"}}/>
                        </section>
                        <p className="loremblog">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <a className="blogRead" href="#">Read more <i className="fa-solid fa-arrow-right" style={{color: "#f2d49b"}} /></a>
                    </div> 
                    <div className="box1card">
                        <Image className="card" src={Psyco} style={ImageStyle} alt="image"/>
                        {/* <Image className="card" src={Psyco} style={ImageStyle} alt="image"/> */}
                        <h4 className="Mental-Health">Mental Health, Education Facility Survey Research</h4>
                        <section className="secBlog">
                            <i className="fa-solid fa-calendar-days" style={{color: "#f2d49b",marginRight:"10px",marginLeft:"20px"}}/>
                            <p className="Date">15 December 2024</p>
                            <i className="fa-solid fa-message" style={{color: "#f2d49b",marginLeft:"10px"}}/>
                        </section>
                        <p className="loremblog">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <a className="blogRead" href="#">Read more <i className="fa-solid fa-arrow-right" style={{color: "#f2d49b"}} /></a>
                    </div>
                    <div className="box1card">
                        <Image className="card" src={Psyco} style={ImageStyle} alt="image"/>
                        {/* <Image className="card" src={Psyco} style={ImageStyle} alt="image"/> */}
                        <h4 className="Mental-Health">Mental Health, Education Facility, Survey Research</h4>
                        {/* <p className="Date"><i className="fa-solid fa-calendar-days" style={{color: "#f2d49b",marginRight:"10px",marginLeft:"20px"}}> 15 December 2024 </i><i className="fa-solid fa-message" style={{color: "#f2d49b"}}></i></p> */}
                        <section className="secBlog">
                            <i className="fa-solid fa-calendar-days" style={{color: "#f2d49b",marginRight:"10px",marginLeft:"20px"}}/>
                            <p className="Date">15 December 2024</p>
                            <i className="fa-solid fa-message" style={{color: "#f2d49b",marginLeft:"10px"}}/>
                        </section>
                        <p className="loremblog">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <a className="blogRead" href="#">Read more <i className="fa-solid fa-arrow-right" style={{color: "#f2d49b"}} /></a>
                    </div>
                </div>
                <div>
                    <button type="button" className="viewBlog">VIEW ALL BLOG</button>
                </div>
            </div>
        </>
    )
}