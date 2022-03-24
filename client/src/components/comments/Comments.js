import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { Button } from 'react-bootstrap';

const Comments = () => {
  const { serviceId } = useParams();
  const [comments, setComments] = useState([])
  const [adding, setAdd] = useState(false);
  
  

  useEffect( () => {
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => setComments(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addComment = (comment) => {
    axios.post(`/api/services/${serviceId}/comments`, { comment })
      .then( res => setComments([ ...comments, res.data ]))
      .catch( err => console.log(err) )
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/services/${serviceId}/comments/${id}`, { comment } )
      .then( res => {
        const newUpdatedComments = comments.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setComments(newUpdatedComments)
      })
      .catch( err => console.log(err) )
  }

  const deleteComment = (id) => {
    axios.delete(`/api/services/${serviceId}/comments/${id}`)
      .then(res => setComments(comments.filter( c => c.id !== id )))
      .catch( err => console.log(err) )
  }

  return (
    <>
    {
      adding ? 
      <>
        <CommentForm 
          addComment={addComment}
          setAdd={setAdd}
        />
      <Button onClick={() => setAdd(false)}>Cancel</Button>
       </>
    :
      <Button onClick={() => setAdd(true)}>+</Button>
     }
      <h1>Comments</h1>
      <CommentList 
        comments={comments}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    </>
  )
}

export default Comments;