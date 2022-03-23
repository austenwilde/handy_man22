import { MainHeader } from "../styles/shared";
import { MainTitle } from "../styles/shared";
import { Container, Row, Col , Button, Card} from "react-bootstrap";
import { Info } from  "../styles/shared";



const Home = () => (
  <>

  <MainTitle>
  <MainHeader>Welcome <br />To  <br /> HandyMan! </MainHeader>
  </MainTitle>


  
  <Container>
  <Row>
    <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnjybi3cS9EJ6HiHP5BqBWOMWeDPOS-SV4g&usqp=CAU"
    style=
    {{marginLeft:'50px',marginTop: '100px',}} alt= "wine">
      </img>
  </Col>
    <Col style={{marginLeft:'40px'}}>
    
    <Info>
      <h1 style={{marginTop:'50px'}}>Features that is <br /> amazing</h1>
    <p style={{color:'black',
              fontWeight:'300',
              marginTop:'20px',
  
  }}>
     
        simply dummy text printing and typesetting industry.been the industry's standard dummy text ever since < br />the 1500s, wh
     
      </p>
    <Button variant="outline-secondary" style={{marginTop:'20px',fontWeight:'300', }}>Meet the team</Button>{' '}
    <br/>
    <br/>
    <br />
    <div style={{ textAlign:'center'}}>
    <Button variant="outline-secondary" style={{fontWeight:'300',marginBottom:'20px'}}> 801-069-4200</Button>{' '}
    </div>
    </Info>
    </Col>
  </Row >
  
</Container>

<br/>
<h4 style={{color:'black',fontWeight:'300', textAlign:'center'}}> Services </h4>
<h5 style={{color:'black',fontWeight:'200', fontSize: '10px',textAlign:'center',paddingBottom:'20px'}}> Call Us Now (123) 123-1234</h5>
<Container>
  <Row md={4}>
    <Col>
    <Card style={{ width: '15rem' }}>
  <Card.Img style={{width:'150px',height:'150px', marginLeft:'70px', marginTop:'10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnl8f0rn8co_zL5hdrne0HZrj1xRepMjlmQ&usqp=CAU" />
  <Card.Body>
    <Card.Title>Painting</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
    <Col xs={6}>
    <Card style={{ width: '15rem' }}>
  <Card.Img style={{width:'150px',height:'150px', marginLeft:'70px', marginTop:'10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnl8f0rn8co_zL5hdrne0HZrj1xRepMjlmQ&usqp=CAU" />
  <Card.Body>
    <Card.Title>Plumming</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
      </Col>
    <Col><Card style={{ width: '15rem' }}>
  <Card.Img style={{width:'150px',height:'150px', marginLeft:'70px', marginTop:'10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnl8f0rn8co_zL5hdrne0HZrj1xRepMjlmQ&usqp=CAU" />
  <Card.Body>
    <Card.Title>Tiles</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '15rem' }}>
  <Card.Img style={{width:'150px',height:'150px', marginLeft:'70px', marginTop:'10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnl8f0rn8co_zL5hdrne0HZrj1xRepMjlmQ&usqp=CAU" />
  <Card.Body>
    <Card.Title >Doors and Window</Card.Title>
    <Card.Text style={{textAlign:'center'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card></Col>
  </Row>
</Container>





  </>




)
export default Home;



