import React ,{ Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter ,ImageHeader} from "react-simple-card";
import { Row,Col,Container } from 'react-bootstrap';

class Slide extends Component{
    render(){
        const{
            name,
            src
        }=this.props;
           return(
           
 <div className="card">
     <div className="card-header">
     <div className="header-img">
           <img src={src}/>
        </div>
       <div className="header-info">
            <h6>{name}</h6>
            <span className="lead">@jon samy</span>
            <br />
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            
        </div>
     </div>
     <div className="card-body">
         <p>Phasellus risus turpis, pretium sit amet magna non, 
             molestie ultricies enim. 
             Nullam pulvinar felis at metus malesuada, nec </p>
     </div>
     <div className="card-footer">
         <img src="images/twitter-circular-colored.png"/>
         <img src="images/facebook-logo-in-circular-coloredl.svg"/>
         <img src="images/instagram.svg"/>
         <img src="images/social-youtube-circular-buttoncolored.svg"/>
         <i class='fas fa-comments'></i>
     </div>
 </div>

           )}}
 export default Slide;