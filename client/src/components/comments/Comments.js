import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = () => {
  const [comments, setComments] = useState([])
  const { serviceId } = useParams();

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
      <CommentForm addComment={addComment} />
      <h1>Comment # {serviceId} </h1>
      <CommentList 
        comments={comments}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    </>
  )
}

export default Comments;