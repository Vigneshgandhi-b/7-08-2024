import '@/app/CSS/Navbar.css'
import Logo from "@/../public/AI.png"
import Image from 'next/image';
export default function Navbar(){
    return(
        <div className='Navbar Navbar-top'>
            <div className='Navbar-header'>
                <section className='NavSec'>
                    <Image className='Navbarlogo' src={Logo} alt='Icon' style={{width:"40px",height:"40px",position:"relative"}} />
                </section>
                <section className='NavSec2'>
                    <p className='headtext'>Genical</p>
                    <p className='Subheadtext'>Take care of your health</p>
                </section>
            </div>
            <div className='Navbar-body'>
                <ul className='Navbar-list'>
                    <li className='Navbarchildren'>
                        <a className='Navbarchildren'>Home</a>
                    </li>
                    <li className='Navbarchildren'>
                        <a className='Navbarchildren'>About us <i className="fa-solid fa-caret-down" style={{color: "#f2d49b"}}></i></a>
                    </li>
                    <li className='Navbarchildren'>
                        <a className='Navbarchildren'>Services <i className="fa-solid fa-caret-down" style={{color: "#f2d49b"}}></i></a>
                    </li>
                    
                    <li className='Navbarchildren'>
                        <a className='Navbarchildren'>Pages <i className="fa-solid fa-caret-down" style={{color: "#f2d49b"}}></i></a>
                    </li>
                    <li className='Navbarchildren'>
                        <a className='Navbarchildren'>Blog <i className="fa-solid fa-caret-down" style={{color: "#f2d49b"}}></i></a>
                    </li>
                    <li className='Navbarchildren'>
                        <a className='Navbarchildren'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='Navbar-footer'>
                <p about='call_us' id='Call' className='Foot'> <i className="fa-solid fa-phone-volume" style={{color:"#F2D49B",paddingRight:"10px"}}></i>Call Us</p>
                <p about='call_us' className='Foot1'>+123-456-7890</p>
            </div>
        </div>
    );
}