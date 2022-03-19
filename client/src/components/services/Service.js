import { useState } from 'react';
import ServiceForm from './ServiceForm';

const Service = ({ name, id, servicetype, location, updateService, deleteService }) => {
  const [editing, setEdit] = useState(false)

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
         <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h5>{name}</h5>
          <p>{servicetype}</p>
          <p>{location}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteService(id)}>
            Delete
          </button>
          <button>
            Todos
          </button>
        </>
      }
    </>
  )
}

export default Service;