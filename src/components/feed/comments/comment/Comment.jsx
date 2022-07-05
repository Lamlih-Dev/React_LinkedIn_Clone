import React from 'react'
import ThreeDots from "../../../../images/three-dots.svg"
import "./Comment.css"

const Comment = ({ commentOwnerAvatar, commentOwnerName, commentOwnerDescription, commentContent }) => {
  return (
    <div className='comment'>
      <div className="comment-owner-avatar">
        <img src={commentOwnerAvatar} alt="icon" width="40px" height="40px" />
      </div>
      <div className="comment-section">
        <div className="comment-content">
          <div className="comment-content-header">
            <h1 className="comment-owner-name">{commentOwnerName}</h1>   
            <div className="right-side">
              <p>2w</p>
              <img src={ThreeDots} alt="dots" width="18px" height="18px"/>    
            </div>
          </div>       
          <p className="comment-owner-description">{commentOwnerDescription}</p>
          <p className='comment-message'>{commentContent}</p>
        </div>
        <div className="comment-actions">
          <p>Like</p> | <p>Reply</p>
        </div>
      </div>
    </div>
  )
}

export default Comment