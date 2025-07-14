import pic from "./images/bubble.png";
import { Component } from "react";
import "./Navbarstyles.css";


class Navbar extends Component{
    state={clicked:false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
render(){
    return(
        <>
        <div class="hero">
        <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
         <a href="index.html"><svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
            </a>
            <div class="container">
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="Syllabus.pdf">Syllabus</a></li>
                    <li><a href="Books.html">Books</a></li>
                    <li><a href="pvq.html">PYP</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            
            <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            
        </nav>
        <div class="content" align="left">
                    <h1 >Welcome to <br></br>SE COMP CLUB</h1>
                    <p class="text-xl mt-2 md:mt-4 tracking-wide">Designer - Developer - Youtuber</p> </div>
                
                <div class="bubbles">
                    <img src={pic} alt="none"/>
                    <img src={pic} alt="none"/>
                    <img src={pic} alt="none"/>
                    <img src={pic} alt="none"/>
                    <img src={pic} alt="none"/>
                    <img src={pic} alt="none"/>
                    <img src={pic} alt="none"/>
                </div>
            </div>
        </>
        );
    }
}
export default Navbar;