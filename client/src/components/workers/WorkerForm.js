import { useState, useEffect } from 'react';
const WorkerForm = ({ addWorker, id, title, specialty, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ title: '', specialty: '' })
  useEffect( () => {
    if (id) {
      setWorker({ title, specialty })
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
    setWorker({ title: '', specialty: '' })
  }
  return(
    <>
      <h4>{ id ? "Edit" : "Create" } Worker</h4>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          value={worker.title}
          onChange={(e) => setWorker({ ...worker, title: e.target.value })}
          required
          placeholder='Worker Name'
        />
        <textarea
          name='specialty'
          value={worker.specialty}
          onChange={(e) => setWorker({ ...worker, specialty: e.target.value })}
          required
          placeholder='Specialty'
        ></textarea>
        <button type='submit'>{ id ? "Update" : "Submit"}</button>
      </form>
    </>
  )
}
export default WorkerForm;