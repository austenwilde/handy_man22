import { useState, useEffect } from 'react';

const ListForm = ({ addList, id, name, servicetype, location, updateList, setEdit }) => {
  const [list, setList] = useState({ name: '', servicetype: '', })

  useEffect( () => {
    if (id) {
      setList({ name, servicetype, location})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateList(id, service)
      setEdit(false)
    } else {
      addList(service)
    }
    setList({ name: '', servicetype: '' })
  }

  return(
    <>
      <h4>{ id ? "Edit" : "Create" } Service</h4>
      <form onSubmit={handleSubmit}>
        <input 
          name='name'
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
          required
          placeholder='Service'
        />
        <textarea
          name='servicetype'
          value={list.servicetype} 
          onChange={(e) => setService({ ...service, servicetype: e.target.value })}
          required
          placeholder='servicetype'
        ></textarea>
        <button type='submit'>{ id ? "Update" : "Submit"}</button>
      </form>
    </>
  )
}

export default ServiceForm;