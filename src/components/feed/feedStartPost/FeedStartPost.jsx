import React from 'react'
import FeedPhoto from "../../../images/feed-photo.svg"
import FeedVideo from "../../../images/feed-video.svg"
import FeedEvent from "../../../images/feed-event.svg"
import FeedArticle from "../../../images/feed-article.svg"
import "./FeedStartPost.css"

export const FeedPostOption = ({ title, icon }) => {
    return (
        <div className='feed-post-option'>
            <img src={icon} alt="icon" />
            <p>{title}</p>
        </div>
      )
}

const FeedStartPost = ({sendPost, input, setInput, avatar}) => {
  return (
    <div className='feed-start-post'>
        <form className="feed-form">
            <img src={avatar} alt="avatar" />
            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Start a post'/>
            <input onClick={sendPost} type="submit"/>
        </form>
        <div className="feed-post-options">
            <FeedPostOption icon={FeedPhoto} title="Photo" />
            <FeedPostOption icon={FeedVideo} title="Video" />
            <FeedPostOption icon={FeedEvent} title="Event" />
            <FeedPostOption icon={FeedArticle} title="Write article" />
        </div>
    </div>
  )
}

export default FeedStartPost