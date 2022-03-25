import { useState } from 'react';
import CommentForm from './CommentForm';
import { Stack, Form, Button } from 'react-bootstrap'
import { CommentUnderline } from '../styles/shared';
const Comment = ({ id, subject, body, user, updateComment, deleteComment }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <CommentForm
            id={id}
            user={user}
            subject={subject}
            body={body}
            updateComment={updateComment}
            setEdit={setEdit}
          />
          <Button variant="warning"
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        :
        <>
        <Form>
          <CommentUnderline>
        <Stack direction="horizontal" gap={5}>
          <div><h3>{user}</h3></div>
          <div><h4>{subject}</h4></div>
          <div><h6>{body}</h6></div>
          <div>
          <Button variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button variant="danger"
            onClick={() => deleteComment(id)}
          >
            Delete
          </Button>
          </div>
          </Stack>
          </CommentUnderline>
          </Form>
        </>
      }  
    </>
  )
}

export default Comment;