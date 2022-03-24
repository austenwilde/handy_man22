import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { MyFormContainer } from '../styles/shared';
const CommentForm = ({ addComment, id, subject, body, user, updateComment, setEdit }) => {
  const [comment, setComment] = useState({ subject: '', body: '', user: '' })

  useEffect(() => {
    if (id) {
      setComment({ subject, body, user })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ subject: '', body: '', user: ''})
  }

  return (
    <MyFormContainer>
      <h1>{ id ? "Update" : "Create" } Comment</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
      <Form.Label>User</Form.Label>
          <Form.Control 
          name='user'
          value={comment.user}
          onChange={(e) => setComment({ ...comment, user: e.target.value })}
          required
          placeholder='Username'
        />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control 
          name='subject'
          value={comment.subject}
          onChange={(e) => setComment({ ...comment, subject: e.target.value })}
          required
          placeholder='Subject'
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control 
          as="textarea" 
          rows={3} 
          name='body'
          value={comment.body}
          onChange={(e) => setComment({ ...comment, body: e.target.value })}
          required
          placeholder='Body'
        />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </MyFormContainer>
  )
}

export default CommentForm;