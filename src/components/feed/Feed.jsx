import React, { useEffect, useState } from 'react'
import FeedStartPost from "./feedStartPost/FeedStartPost"
import Post from "./post/Post"
import Avatar from "../../images/avatar.jpg"
import firebase from 'firebase/compat/app'
import { db } from "../../firebase";
import "./Feed.css"

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(()=>{ 
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    if(input !== ""){
      db.collection("posts").add({  
        avatar: Avatar,
        name: "Ahmed Lamlih",
        description: "Front-end Web Developer",
        content: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
    

    setInput("");
  }

  return (
    <div className='feed'>
      <FeedStartPost sendPost={sendPost} input={input} setInput={setInput} />
      {posts.map(({id, data: { avatar, name, description, content, timestamp }})=>(
        <Post 
          key={id}
          avatar={avatar}
          name={name}
          description={description}
          content={content}
        />
      ))}
    </div>
  )
}

export default Feed