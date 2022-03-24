import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';
import { Button } from 'react-bootstrap';

const Services = () => {
  const { workerId } = useParams()
  const [services, setServices] = useState([]);

  useEffect( () => {
    axios.get(`/api/workers/${workerId}/services`)
      .then( res => setServices(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addService = (service) => {
    axios.post(`/api/workers/${workerId}/services`, { service })
      .then( res => setServices([ ...services, res.data ]))
      .catch( err => console.log(err) )
  }

  const updateService = (id, service) => {
    axios.put(`/api/workers/${workerId}/services/${id}`, { service })
      .then( res => {
        const newUpdateServices = services.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setServices(newUpdateServices)
      })
      .catch( err => console.log(err) )
  }

  const deleteService = (id) => {
    axios.delete(`/api/workers/${ workerId }/services/${id}`)
      .then( res => setServices( services.filter( s => s.id !== id ) ) )
      .catch( err => console.log(err) )
  }

  return (
    <>
      {
        services ?
          <>
            <ServiceForm 
              addService={addService}
              setServices={setServices} 
            />
          <Button onClick={() => setServices(false)}>Cancel</Button>
          </>
        :
        <Button onClick={() => setServices(true)}>+</Button>
        }
      <h1>All Services</h1>
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      /> 
    </>
  )
}

export default Services;