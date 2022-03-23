import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { MyFormContainer } from '../styles/shared';
const WorkerForm = ({ addWorker, id, title, specialty, review, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ title: '', specialty: '' , review: ''})
  useEffect( () => {
    if (id) {
      setWorker({ title, specialty, review })
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ title: '', specialty: '', review: ''})
  }
  return(
    <MyFormContainer>
      <h4>{ id ? "Edit" : "Create" } Worker</h4>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
      <Form.Label>Title</Form.Label>
          <Form.Control 
          name='title'
          value={worker.title}
          onChange={(e) => setWorker({ ...worker, title: e.target.value })}
          required
          placeholder='Worker Name'
        />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Specialty</Form.Label>
          <Form.Control 
          name='specialty'
          value={worker.specialty}
          onChange={(e) => setWorker({ ...worker, specialty: e.target.value })}
          required
          placeholder='Specialty'
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review</Form.Label>
          <Form.Control 
          as="textarea" 
          rows={3} 
          name='review'
          value={worker.review}
          onChange={(e) => setWorker({ ...worker, review: e.target.value})}
          placeholder='Review'
          />
        </Form.Group>
        <Button type='submit'>{ id ? "Update" : "Submit"}</Button>
      </Form>
    </MyFormContainer>
  )
}
export default WorkerForm;