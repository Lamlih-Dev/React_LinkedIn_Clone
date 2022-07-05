import React, { useEffect, useState } from 'react'
import './Post.css'
import VisibilityPublic from "../../../images/post-public.svg"
import ThreeDots from "../../../images/three-dots.svg"
import Like from "../../../images/post-like.svg"
import Comment from "../../../images/post-comment.svg"
import Share from "../../../images/post-share.svg"
import Send from "../../../images/post-send.svg"
import Comments from "../comments/Comments"

export const PostActions = ({ title, icon }) => {
    return (
        <div className='post-action'>
            <img src={icon} alt="icon" />
            <p>{title}</p>
        </div>
      )
}

const Post = ({ avatar, name, description, content, timestamp, comments }) => {
    const [postSeniority, setPostSeniority] = useState("");
    const [likeEmote, setLikeEmote] = useState("https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt");
    const [celebrateEmote, setCelebrateEmote] = useState("https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8");
    const [supportEmote, setSupportEmote] = useState("https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1");
    const [funnyEmote, setFunnyEmote] = useState("https://static-exp1.licdn.com/sc/h/41j9d0423ck1snej32brbuuwg");
    const [loveEmote, setLoveEmote] = useState("https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22");
    const [insightfulEmote, setInsightfulEmote] = useState("https://static-exp1.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus");
    const [curiousEmote, setCuriousEmote] = useState("https://static-exp1.licdn.com/sc/h/4mv33903v0o9ikpwfuy2ftcc6");
    
    useEffect(()=>{
        if(!timestamp?.seconds){
            setPostSeniority("1s");
        }else{
            const todayDate = new Date();
            const postDate = new Date(timestamp.seconds * 1000);    
            let seconds = Math.floor((todayDate - (postDate))/1000);
            let minutes = Math.floor(seconds/60);
            let hours = Math.floor(minutes/60);
            let days = Math.floor(hours/24);

            setPostSeniority(seconds + "s")
            if(seconds >= 60){
                setPostSeniority(minutes + "min")
            }
            if(minutes >= 60){
                setPostSeniority(hours + "h")
            }
            if(hours >= 24){
                setPostSeniority(days + "d")
            }
        }
    }, [])

  return (
    <div className='post'>
        <div className="post-section">
            <div className="post-header">
                <div className="left-side">
                    <img className='post-owner-avatar' src={avatar} alt="avatar" width="50" height="50" />
                    <div className="post-owner-infos">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className="post-publishing-time">
                            <span>{postSeniority} . </span>
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
        <Comments comments={comments} />
    </div>
  )
}

export default Post