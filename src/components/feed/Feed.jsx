import React, { useEffect, useState } from 'react'
import FeedStartPost from "./feedStartPost/FeedStartPost"
import Post from "./post/Post"
import firebase from 'firebase/compat/app'
import { db } from "../../firebase";
import "./Feed.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

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
        avatar: user.photoURL,
        name: user.displayName,
        description: "New User",
        content: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
    

    setInput("");
  }
  return (
    <div className='feed'>
      <FeedStartPost sendPost={sendPost} input={input} setInput={setInput} avatar={user.photoURL} />
      {posts.map(({id, data: { avatar, name, description, content, timestamp, comments }})=>(
        <Post 
          key={id}
          avatar={avatar}
          name={name}
          description={description}
          content={content}
          timestamp={timestamp}
          comments={comments}
        />
      ))}
    </div>
  )
}

export default Feed