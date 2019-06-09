import React from 'react';
import {Tab,Tabs} from 'react-mdl';
import { Row,Col,Container } from 'react-bootstrap';
import Fixedcard from './fixedcard';
import Asidebox from './asideBox';
import Carousel from './carsoul';
import {Header,Layout,Navigation,Grid,Cell,Drawer} from 'react-mdl';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
    activeTab:0
    };}
    toggleCategory(){
      /*Tabs choose*/
        if(this.state.activeTab===0){
            return(
        <Container className="main-container1">
          
              <Container className="content-container">
      
              <Col md={10} xs={6}>
              <div className="complete-box">
                  <img src="images/Active.svg"/>
                  <span className="content"> Active </span>
                </div>
                <Row >
                  
                      <Carousel/>
                  
                </Row>
                 <div className="pending-box">
                  <img src="images/pending.svg"/>
                  <span className="content"> Pending</span>
                </div>
                <Row className="fixed-cards" style={{paddingRight:"88px"}}>

                  <Col className="col"xs={12} md={2}><Fixedcard/></Col>
                  <Col className="col"xs={12} md={2}><Fixedcard/></Col>
                  <Col className="col"xs={12} md={2}><Fixedcard/></Col>
                  <Col className="col"xs={6} md={2}><Fixedcard/></Col>
                  <Col xs={4} md={2}><Fixedcard/></Col>
                </Row>
               
                <div className="complete-box">
                  <img src="images/Completed.svg"/>
                  <span className="content"> Completed</span>
                </div>
                <Row>
                  
                     <Carousel/>
                </Row>
                </Col>
              
              </Container>
              <Container className="aside-Container">
                  <Col xs={12} md={2}>
                  <Asidebox/>
                  </Col>
              </Container>
            
            
        </Container>
            );}
       else if(this.state.activeTab===1){
         
          return(
              <Container className="main-container2">
                <Container className="content-container">
                <div className="complete-box">
                  <img src="images/Active.svg"/>
                  <span className="content"> Active </span>
                </div>
                  <Row >
                    <Carousel/>
                  </Row>
                  <div className="pending-box">
                  <img src="images/pending.svg"/>
                  <span className="content"> Pending</span>
                </div>
                  <Row className="fixed-cards">
                    <Col className="col"xs={6} md={2}><Fixedcard/></Col>
                    <Col className="col" xs={6}md={2}><Fixedcard/></Col>
                    <Col className="col"xs={6}  md={2}><Fixedcard/></Col>
                    <Col className="col"xs={6} md={2}><Fixedcard/></Col>
                    <Col className="col"xs={6} md={2}><Fixedcard/></Col>
                  </Row>
                  <div className="complete-box">
                  <img src="images/Completed.svg"/>
                  <span className="content"> Completed</span>
                </div>
                  <Row>
                   <Carousel/>
                  </Row>
                  
                  </Container>
                </Container>

                )
                }}
 
   /*full page*/          
render(){
   return(
      <div  className="main">
        {/*Header*/}
      <Layout fixedHeader>
          <Header title={<span><span className="header-logo"><strong>churro</strong> </span><span className="sub-logo"><sub>Beta</sub></span></span>}>          
            <Navigation>
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                  <Tab>Campaigns</Tab>
                  <Tab>Creators</Tab>
              </Tabs>
            </div>
          
              <a href="#"><img src="images/close-envelope.svg"/></a>
              <a href="#"><img src="images/notifications-button.svg"/></a>
              <div className="Ellipse-77">
                  <a href="#"><img src="images/boy1.png"/></a>
              </div>
            </Navigation>
            </Header>
            <Drawer title="">
                  <Navigation>
                    
                     <a href="#"><img src="images/notifications-button.svg"/></a>
                     <a href="#"><img src="images/boy1.png"/></a>
                  </Navigation>
              </Drawer>
              {/*main page*/}
        <div className="mainbody">
            {this.toggleCategory()};
          </div>
      </Layout>
      </div>
        )}
        
}


export default Main
