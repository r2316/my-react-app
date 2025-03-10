import React from "react";
// import TypewriterComponent from "typewriter-effect";
import Starfield from "react-starfield";
//import './Typewriter.css';
import iam from "../assets/img/lam.png"
import me from "../assets/img/me2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import{faInstagram} from"@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import{ faLinkedin} from "@fortawesome/free-brands-svg-icons";
export default function Home(){
    return(
        <>
        <div style={{display:"flex"}}>
        <div style={{backgroundColor:"black",width:"65%",height:"700px",}}>
            <div className="w-full">
                <Starfield starCount={5000}
                starColor={[255,255,255]}
                speedFactor={0.05}
                backgroundColor="black">

                </Starfield>
            </div>
            
            <div>
                <div style={{paddingLeft:"200px",color:"orange", fontSize:"35px"}}>
                <p style={{ color: "gray", fontSize:"40px" ,fontWeight:"bold" , 
                letterSpacing:"2px", 
                    marginRight:"300px",paddingTop:"150px"}}>Hi There!</p>
                    <span style={{color:"gray",fontSize:"40px",fontWeight:"bold",
                        }}>I'M  </span>
                    <span style={{color:"orange",
                        fontSize:"40px",fontWeight:"bolder",marginRight:"200px",
                        letterSpacing:"2px"}}>Riya patel </span>

<br></br>
<br></br>
                {/* <TypewriterComponent
                options={{strings:["Software Developer","Mern Stack","Web Designer"]
                    ,autoStart:true,
                    loop:true,
                    deleteSpeed:50
                }}>
                   
                </TypewriterComponent> */}
                </div>   
               </div>
        </div>
        <div style={{backgroundColor:"black" , width:"45%"}}>
        <img style={{height:"400px",marginTop:"100px"}} src={iam}></img>
        </div>
    
    </div>

    <div style={{display:"flex"}}>
        <div style={{backgroundColor:"black", height:"600px", width:"70%"}}>

            <span style={{fontSize:"40px", color:"gray",paddingTop:"5px",textAlign:"left",
                 paddingLeft:"20px"}}>LET ME</span> 
                <span style={{fontSize:"40px", color:"orange",paddingTop:"5px"}}> INTRODUCE</span>
                <span style={{fontSize:"40px", color:"gray",paddingTop:"5px"}}>  MYSELF</span>
            
            <p style={{color:"gray",letterSpacing:"1px",fontSize:"20px", paddingTop:"50px",
            paddingLeft:"20px",
                fontWeight:"bold"}}>
            I fell in love with programming and I have at least learnt something, I think…
            </p>
            <p style={{paddingTop:"30px",textAlign:"left", paddingLeft:"20px"}}>
                <span style={{color:"gray",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold"}}>
                I am fluent in classics like </span>
                <span style={{color:"orange",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold" ,
                }}>C++, Javascript and Go.
                </span>
            </p>

            <p style={{paddingTop:"30px",textAlign:"left", paddingLeft:"20px"}}>
                <span style={{color:"gray",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold"}}>
                My field of Interest's are building new </span>
                <span style={{color:"orange",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold" ,
                }}>Web Technologies and Products</span>
                <span style={{color:"gray",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold"}}>
                and also in areas related to  </span>
                <span style={{color:"orange",letterSpacing:"1px",fontSize:"20px", fontWeight:"bold" ,
                }}>Blockchain.</span>
            </p>

            <p style={{paddingTop:"30px",textAlign:"left", paddingLeft:"20px"}}>
                <span style={{color:"gray",letterSpacing:"px",fontSize:"20px", fontWeight:"bold"}}>
                Whenever possible, I also apply my passion for developing products with</span>
                <span style={{color:"orange",letterSpacing:"px",fontSize:"20px", fontWeight:"bold" ,
                }}>Node.js</span>
                <span style={{color:"gray",letterSpacing:"px",fontSize:"20px", fontWeight:"bold"}}>
                and  </span>
                <span style={{color:"orange",letterSpacing:"px",fontSize:"20px", fontWeight:"bold" ,
                }}>Modern Javascript Library and Frameworks</span>
                 <span style={{color:"gray",letterSpacing:"px",fontSize:"20px", fontWeight:"bold"}}>
                 like  </span>
                 <span style={{color:"orange",letterSpacing:"px",fontSize:"20px", fontWeight:"bold" ,
                }}>React.js and Next.js</span>
                 
            </p>
            <p style={{fontSize:"40px", color:"gray", textAlign:"right", 
                paddingTop:"50px",paddingRight:"100px"}}>
            FIND ME ON
            </p>

            <p style={{fontSize:"15px", color:"gray", textAlign:"right"
               ,paddingRight:"120px"}}>
            Feel free to connect with me
            </p>
            <p style={{color:"orange",fontSize:"30px", textAlign:"right"
               ,paddingRight:"120px"}}>
              
            </p>
            <p style={{height:"50px",width:"50px",color:"orange",display:"flex",
                 gap:"20px",textAlign:"center",marginLeft:"700px",marginTop:"20px",}}>
            <a href="https://github.com/r2316/rpatel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
           
            </p>




        </div>
        <div style={{backgroundColor:"black", height:"600px", width:"30%"}}>
            <img src={me}></img>
        </div>

    </div>
        </>
        
    )
}