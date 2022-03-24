import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerList from './WorkerList';
import WorkerForm from './WorkerForm';
import { Button } from 'react-bootstrap';
const Workers = () => {
  const [workers, setWorkers] = useState([])
  const [adding, setAdd] = useState(false)
  useEffect( () => {
    axios.get('/api/workers')
      .then( res => setWorkers(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addWorker = (worker) => {
    axios.post('/api/workers', { worker })
      .then( res => setWorkers([ ...workers, res.data ]))
      .catch( err => console.log(err) )
  }

  const updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, { worker })
      .then( res => {
        const newUpdatedWorkers = workers.map( w => {
          if (w.id === id) {
            return res.data
          }
          return w
        })
        setWorkers(newUpdatedWorkers)
      })
      .catch( err => console.log(err) )
  }

  const deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
      .then( res => setWorkers( workers.filter( w => w.id !== id ) ) )
      .catch( err => console.log(err) )
  }

  return (
    <>
      {
        adding ?
          <>
            <WorkerForm 
              addWorker={addWorker}
              setAdd={setAdd} 
            />
          <Button onClick={() => setAdd(false)}>Cancel</Button>
          </>
        :
        <Button onClick={() => setAdd(true)}>+</Button>
        }
      <h1>All Workers</h1>
      <WorkerList
        workers={workers}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      /> 
    </>
  )
}

export default Workers;