import { useState, useEffect } from 'react';

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
        <input 
          name='servicetype'
          value={service.servicetype}
          onChange={(e) => setService({ ...service, servicetype: e.target.value })}
          required
          placeholder='Service Type'
        />
        <textarea
          name='location'
          value={service.location} 
          onChange={(e) => setService({ ...service, location: e.target.value })}
          required
          placeholder='location'
        ></textarea>
        <button type='submit'>{ id ? "Update" : "Submit"}</button>
      </form>
    </>
  )
}

export default ServiceForm;