import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../redux/profile-reducer'
import MyPost from './MyPost';


let MapStateToProps =(state)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
        
    }
}

let MapDispatchToProps =(dispatch)=>{
    return{
        updateNewPostText:(text)=>{dispatch(updateNewPostTextActionCreator(text))},
        addPost:()=>{dispatch(addPostActionCreator())}

    }
}

const MyPostContainer = connect(MapStateToProps,MapDispatchToProps)(MyPost)


export default MyPostContainer;