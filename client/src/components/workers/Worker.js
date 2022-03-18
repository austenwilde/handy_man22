import { useState } from 'react';
import WorkerForm from './WorkerForm';
import { Link } from 'react-router-dom';
const Worker = ({ id, title, specialty, updateWorker, deleteWorker }) => {
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
            updateWorker={updateWorker}
            setEdit={setEdit}
         />
         <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h5>{title}</h5>
          <p>{specialty}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteWorker(id)}>
            Delete
          </button>
          <Link to={`/workers/${id}/services`}>
            <button>
              Services
            </button>
          </Link>
        </>
      }
    </>
  )
}
export default Worker;