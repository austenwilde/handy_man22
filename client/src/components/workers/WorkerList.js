import Worker from './Worker';

const WorkerList = ({ workers, updateWorker, deleteWorker }) => (
  <>
    { workers.map( l => 
      <Worker
        key={l.id}
        {...l}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      />
    )}
  </>
)

export default WorkerList;