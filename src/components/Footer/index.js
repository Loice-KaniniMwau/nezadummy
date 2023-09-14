import React from "react";
import './style.css'
import { BsLinkedin} from "react-icons/bs";



const Footer=()=>{
return(
    <>
    <section id="footer">
    <footer className="footer">
            <ul className="footer-menu">
            <li>
                    <img src="/images/LOGO.png" alt="NEZA LOGO" />
                </li>
                <li className="who we are">
                    <a href="/">Who we are</a>
                    <a href="#home">   <p>About Us</p></a>
                    <a href="#team">  <p>Team</p></a>
                    {/* <a href="#product">  <p>Product</p></a>
                    <p>About Us</p> */}
                  
                </li>
                <li className="contacts">
                    <a href="/">Contact Us</a>
                    <p>tinywellness@gmail.com</p>
                    <p>+25470756960</p>
                </li>
                <li className="connect">
                    <a href="/">Reach Out</a>
                    <p><BsLinkedin className="icons"/></p>
                </li>
            </ul>
      
</footer>
    </section>

    </>
)
}
export default Footer

