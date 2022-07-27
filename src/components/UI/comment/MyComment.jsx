import React from 'react'
import classes from './MyComment.module.css';

const MyComment = ({ commentData }) => {
      return (
            <>
                  <div key={commentData.id} className={classes.comment}>
                        <p className={classes.comment__name}>{commentData.name} | <span className={classes.comment__email}>{commentData.email}</span></p>
                        <p className={classes.comment__content}>{commentData.body}</p>
                  </div>
            </>
      )
}

export default MyComment