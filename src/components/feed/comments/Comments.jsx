import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import CommentsEmojies from "../../../images/comments-emojies.svg"
import CommentsImages from "../../../images/comments-images.svg"
import Comment from "./comment/Comment"
import "./Comments.css"

const Comments = ({ comments }) => {
  {console.log(comments)}
  const user = useSelector(selectUser);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const CommentForm = () => {
    return(
      <div className="comment-form">
        <img src={user.photoURL} alt="avatar" width="40px" height="40px" />
        <form>
          <input type="text" placeholder='Add a comment...' />
          <div className="left-side">
            <img src={CommentsEmojies} alt="icon" />
            <img src={CommentsImages} alt="icon" />
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className='comments-section'>
      {comments.length === 0 ? 
        (
          <>
            {!showCommentForm ? 
              (<p onClick={()=>setShowCommentForm(true)}>Be the first to comment on this</p>) 
              :
              (<CommentForm />)
            } 
          </>
        ) : 
        (
          <>
            <CommentForm />
            <div className="comment-sort">
              <p>Most Relevent</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
               </svg>
            </div>
            {comments.map(
              (comment)=>(
                <Comment 
                  key={comment.commentContent}
                  commentOwnerAvatar={comment.commentOwnerAvatar}
                  commentOwnerName={comment.commentOwnerName}
                  commentOwnerDescription={comment.commentOwnerDescription}
                  commentContent={comment.commentContent}
                />
                
              )
            )}
          </>
        )
      }
    </div>
  )
}

export default Comments