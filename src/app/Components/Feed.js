import React, { useEffect, useState } from 'react'
import "./CSS/Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';


function Feed() {
    const [input,setInput] = useState('');
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot(snapShot =>(
            setPosts(snapShot.docs.map(doc => (
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        ))
    },[]);
 
    const sendPost = (e) => {
        e.preventDefault();
        
         db.collection('posts').add({
           name:'',
           description:'',
           message:input,
           photoUrl:'',
           timestamp: firebase.firestore.FieldValue.serverTimestamp()
         });
    };
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost}type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" /> 
                 <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
             
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl}}) => ( 
                <Post  key={id}
             name={name}
             description={description}
             message={message}
             photoUrl={photoUrl}/>
            )
            )}
            <Post 
             
              />
        </div>
    </div>
  )
}

export default Feed;