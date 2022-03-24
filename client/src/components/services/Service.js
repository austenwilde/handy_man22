import { useState } from 'react';
import ServiceForm from './ServiceForm';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row} from 'react-bootstrap'

const Service = ({ name, id, servicetype, location, updateService, deleteService }) => {
  const [editing, setEdit] = useState(false)
  // const [service, setService] = useState({ name: name, servicetype: servicetype, location: location })




  return(
    <>
      {
        editing ?
        <>
         <ServiceForm 
            id={id}
            name={name}
            servicetype={servicetype}
            location={location}
            updateService={updateService}
            setEdit={setEdit}
         />
         <Button onClick={() => setEdit(false)}
         >
            Cancel
          </Button>
        </>
        :
        <>
         <Row xs={3} md={3} className="g-3">
            {Array.from({ length: 6}).map((_) => (
          <Col>
                  <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{servicetype}</Card.Subtitle>
                  <Button variant="warning" onClick={() => setEdit(true)}>
                      Show
                    </Button>
                    <Button variant="danger" onClick={() => deleteService(id)}>
                      Delete
                    </Button>
                <Link to={`/services/${id}/comments`}>
                Comments
                </Link>
            </Card.Body>
          </Card>
          </Col>
          ))}
          </Row>
          
        </>
      }
    </>
  )
}

export default Service;