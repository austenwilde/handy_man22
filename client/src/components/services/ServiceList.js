import Service from './Service';

const ServiceList = ({ services, updateService, deleteService }) => (
  <>
    { services.map( l => 
      <Service
        key={s.id}
        {...s}
        updateService={updateService}
        deleteService={deleteService}
      />
    )}
  </>
)

export default ServiceList;