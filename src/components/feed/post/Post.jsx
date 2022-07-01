import React from 'react'
import './Post.css'
import VisibilityPublic from "../../../images/post-public.svg"
import ThreeDots from "../../../images/three-dots.svg"
import Like from "../../../images/post-like.svg"
import Comment from "../../../images/post-comment.svg"
import Share from "../../../images/post-share.svg"
import Send from "../../../images/post-send.svg"

export const PostActions = ({ title, icon }) => {
    return (
        <div className='post-action'>
            <img src={icon} alt="icon" />
            <p>{title}</p>
        </div>
      )
}

const Post = ({ avatar, name, description, content }) => {
  return (
    <div className='post'>
        <div className="post-header">
            <div className="left-side">
                <img className='post-owner-avatar' src={avatar} alt="avatar" width="50" height="50" />
                <div className="post-owner-infos">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="post-publishing-time">
                        <span>2h . </span>
                        <img src={VisibilityPublic} alt="public" />
                    </div>
                </div>
            </div>
            <div className="right-side">
                <img src={ThreeDots} alt="dots" width="25px" height="25px"/>
            </div>
        </div>
        <div className="post-content">
            <p>{content}</p>
        </div>
        <hr />
        <div className="post-actions">
            <PostActions icon={Like} title="Like" />
            <PostActions icon={Comment} title="Comment" />
            <PostActions icon={Share} title="Share" />
            <PostActions icon={Send} title="Send" />
        </div>
    </div>
  )
}

export default Post