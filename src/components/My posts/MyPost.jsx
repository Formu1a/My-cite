import s from './MyPost.module.css'
import Post from './Post';
import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../redux/profile-reducer'



const MyPost = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/> )

    let newPostElement = React.createRef();

    let addPost =()=>{
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return( 
    <div>
        <div className={s.post}>
            <h3>
                My Posts
            </h3>
        </div >
        <div className={s.text}>
            <textarea name="Your news" onChange={onPostChange} value={props.newPostText} ref={newPostElement}  cols="105" rows="4" placeholder="your news......" maxLength="1000"  />
            <button onClick={addPost} className={s.button}>Send</button>
        </div>
        <div className={s.item}>
            {postsElement}
        </div>
        
    </div>
    );
}

export default MyPost;