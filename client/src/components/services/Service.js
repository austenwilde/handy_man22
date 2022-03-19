import { useState } from 'react';
import ServiceForm from './ServiceForm';
import { Link } from 'react-router-dom';

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
         <button onClick={() => setEdit(false)}
         >
            Cancel
          </button>
        </>
        :
        <>
          <h5>{name}</h5>
          <p>{servicetype}</p>
          <p>{location}</p>
          <button 
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button 
            onClick={() => deleteService(id)}
          >
            Delete
          </button>
          <Link 
            to={`/services/${id}/comments`}
            state={{ serviceId: id, serviceName: name }}
          >
          <button>
            Comments
          </button>
          </Link>
        </>
      }
    </>
  )
}

export default Service;