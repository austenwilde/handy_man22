
import { MainHeader } from "../styles/shared";
import { MainTitle } from "../styles/shared";
import { Container, Row, Col , Button, Card} from "react-bootstrap";
import { Info } from  "../styles/shared";
import { P } from "../styles/shared";
import { C } from "../styles/shared"


const About = () => (
  <>


  
  <MainTitle>
  <MainHeader>Meet the Team ! <br /> <P>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the industry's standard dummy<br /> text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a <br />type specimen book. It has survived not only five c</P>
  </MainHeader>
  
  </MainTitle>
  

<Container>
  <C>
  <Row>
    
    <Col> <img src="https://www.pngitem.com/pimgs/m/228-2281581_hard-worker-png-hard-work-icon-svg-transparent.png"
    style=
    {{marginLeft:'110px',marginTop: '100px', width:'150px'}} alt= "Workers1">
      </img>
      <p style={{marginLeft:'160px'}}>Austen</p>
  </Col>
  <Col><img src="https://www.pngitem.com/pimgs/m/228-2281581_hard-worker-png-hard-work-icon-svg-transparent.png "
    style=
    {{marginLeft:'50px',marginTop: '100px', width:'150px'}} alt= "Workers2">
      </img>
      <p style={{marginLeft:'110px'}}>Leo</p>
  </Col>
  <Col><img src="https://www.pngitem.com/pimgs/m/228-2281581_hard-worker-png-hard-work-icon-svg-transparent.png "
    style=
    {{marginLeft:'70px',marginTop: '100px', width:'150px'}} alt= "Workers3">
      </img>
      <p style={{marginLeft:'130px'}}>Axel</p>
  </Col>
  <Col><img src="https://www.pngitem.com/pimgs/m/228-2281581_hard-worker-png-hard-work-icon-svg-transparent.png "
    style=
    {{marginLeft:'100px',marginTop: '100px', width:'150px'}} alt= "Workers4">
      </img>
      <p style={{marginLeft:'150px'}}>Boston</p>
  </Col>
    <Col style={{marginLeft:'40px'}}>
  </Col>
  </Row >
  </C>


  <Row>
    <Col>
    <P style={{marginTop:'50px',marginLeft:'120px'}}>Want to Join the Team?
      <br /> Service or Contact us
    </P>
    
    </Col>
    <Col>
    <div style={{marginTop:'40px',marginLeft:'120px'}}>
    <Button variant="outline-secondary" style={{fontWeight:'300'}}> 801-069-4200 </Button>
    </div>
    </Col>
  </Row>
  <div style={{height:'50vh', backgroundColor:'#EEEEEE', marginTop:'40px'}}>

  </div>
  </Container>

  </>
 
)


export default About;