import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { MyFormContainer } from '../styles/shared';

const ServiceForm = ({ addService, id, name, servicetype, location, updateService, setEdit }) => {
  const [service, setService] = useState({ name: '', servicetype: '', location: ''})

  useEffect( () => {
    if (id) {
      setService({ name, servicetype, location })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ name: '', servicetype: '', location: '' })
  }

  return(
    <MyFormContainer>
    <h4>{ id ? "Edit" : "Create" } Service</h4>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
        <Form.Control 
        name='name'
        value={service.name}
        onChange={(e) => setService({ ...service, name: e.target.value })}
        required
        placeholder='Service'
      />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Service type</Form.Label>
        <Form.Control 
        name='servicetype'
        value={service.servicetype}
        onChange={(e) => setService({ ...service, servicetype: e.target.value })}
        required
        placeholder='Service Type'
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Location</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} 
        name='location'
        value={service.location}
        onChange={(e) => setService({ ...service, location: e.target.value})}
        placeholder='Location'
        />
      </Form.Group>
      <Button type='submit'>{ id ? "Update" : "Submit"}</Button>
    </Form>
  </MyFormContainer>
  )
}

export default ServiceForm;