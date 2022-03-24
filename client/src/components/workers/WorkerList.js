import Worker from './Worker';

const WorkerList = ({ workers, updateWorker, deleteWorker }) => (
  <>
    { workers.map( w => 
      <Worker
        key={w.id}
        {...w}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      />
    )}
  </>
)

export default WorkerList;