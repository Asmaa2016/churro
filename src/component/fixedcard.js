import React ,{ Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter ,ImageHeader} from "react-simple-card";

class Fixedcard extends Component{
    render(){
           return(
 <div className="Fixedcard">
     <div className="card-header">
     <div className="header-img">
           <img src="images/boy2.png"/>
        </div>
       <div className="header-info">
            <h6>Justin Willis</h6>
            
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
     <img src="images/twitter-circular-button.png"/>
     <img src="images/instagram.png"/>
     <img src="images/facebook-logo-in-circular-button-outlined-social-symbol.svg"/>
     <i class="fa fa-youtube circle"></i>
     <br/>
     <button className="rejectbtn">Reject<i class="fa fa-remove" ></i></button>
     <button className="acceptbtn">Accept<i class="fa fa-check"></i>
</button>

     </div>
 </div>
  
           )}}
           export default Fixedcard;