import React ,{ Component } from 'react';
import {Table} from 'react-bootstrap';


export class Asidebox extends Component{
  
    
    render(){
     return(
  <div className="asideBoxes">
    {/*Box1*/}
    <div className="asideBox1">
      <div className="cambox-header">
        <div className="h2di">
            <h2>Campaign Details</h2>
         </div>
         <div className="detail-icon">
            <img src="images/edit.svg" />
          </div>
      </div> 
      {/*cambox content*/}
    <div className="cambox-content">
        <div className="main-content">
           <div className="man-img"></div>
           <div className="para">
             <h5>Pharetra molestie nisi </h5>
             <p>Started: Feb 22, 2019</p>
           </div>
        </div>
        <div className="cambox-info">
            <p>Sed a magna semper, porta purus eu, ullamcorper ligula.
                Nam sit amet consectetur sapien. Etiam dui ipsum,
                viverra vel turpis ut, dignissim elementum mauris. Sed</p>
        </div>
        <div className="line"></div>
        
    </div>
    {/*product Box*/}
    <div className="product" dir="ltr">
        <h5>Product Only</h5>
      <ul>
        <li>Duration:<span>1-2 weeks</span></li>
        <li>Link:<span> website.com</span></li>
        <li>Country:<span> Egypt</span></li>
        <li>Gender:<span> Male, Female</span></li>
        <li>Age:<span>18-40</span></li> 
      </ul>
      <div className="prod-btn">
         <button className="model-btn">Modeling</button>
      </div>
    </div>

   </div>
        
    
{/*Box2*/}
        
<div className="asideBox2">
    <div className="total-table">   
        <Table responsive dir="ltr" className="table">
          <thead>
            <tr>
              <th className="th1"><h5>Total Reach</h5></th>
              <th className="th2"><h5>12.708</h5></th>
            </tr>
          </thead>
          <hr style={{borderTop: "1px solid #fcab83"}}/>
          <tbody>
            <tr>
              <td><img src="images/twitter-circular-button(1).svg"/>Twitter</td>
              <td>5.546</td>
            </tr>
            <hr style={{borderTop: "1px solid #fb7739"}} />
            <tr>
              <td><img src="images/instagram2x.png"/>Instagram</td>
              <td>2.048</td>
            </tr>
            <hr style={{borderTop: "1px solid #fb7739"}} />
            <tr>
              <td><img src="images/facebook-logo-in-circular-button-outlined-social-symbol@2x.png"/>Facebook</td>
              <td>9.248</td>
            </tr>
            <hr style={{borderTop: "1px solid #fb7739"}} />
            <tr>
              <td><img src="images/social-youtube-circular-button@2x.png"/>Youtube</td>
              <td>12.708</td>
            </tr>
          </tbody>
        </Table>;
     </div>
      <hr style={{borderTop: "1px solid #fcab83",width:'90%',margin:"0px 30px 0px 26px"}}/>
      <p>View Complete Analytics</p>

    </div> 
</div>
  
  



     )}}
     export default Asidebox;