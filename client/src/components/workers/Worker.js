import { useState } from 'react';
import WorkerForm from './WorkerForm';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row} from 'react-bootstrap'

const Worker = ({ id, title, specialty, review, updateWorker, deleteWorker }) => {
  const [editing, setEdit] = useState(false)
  return(
    <>
      {
        editing ?
        <>
         <WorkerForm
            id={id}
            title={title}
            specialty={specialty}
            review={review}
            updateWorker={updateWorker}
            setEdit={setEdit}
            // deleteWorker={deleteWorker}
         />
         <Button variant="warning" onClick={() => setEdit(false)}>
            Cancel
          </Button>
        </>
        :
        <>
          <Row key={id} xs={3} md={6} className="g-3">
            {/* {Array.from({ length: 6}).map((_)  => (  */}
          <Col>
                  <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{specialty}</Card.Subtitle>
                  <Card.Text>
                    {review}
                  </Card.Text>
                  <Button variant="warning" onClick={() => setEdit(true)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => deleteWorker(id)}>
                      Delete
                    </Button>
                <Link to={`/workers/${id}/services`}>
                Services
                </Link>
            </Card.Body>
          </Card>
          </Col>
          {/* ))} */}
          </Row>
        </>
      }
    </>
  )
}


//   

export default Worker;