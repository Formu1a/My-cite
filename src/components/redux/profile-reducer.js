let ADD_POST='ADD-POST'
let UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'

let initialState = {
    posts:[
        {id:1, message:"Hey,why nobody love me ?", likeCounts:23},
        {id:2, message:"Its our new program! Hey!", likeCounts:4},
        ],
    newPostText:''
}


const profileReducer = (state = initialState,action)=>{

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:5,
                message:state.newPostText,
                likeCounts:0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () =>{
    return {
        type:ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) =>{
    return {type:UPDATE_NEW_POST_TEXT,newText:text}
}

export default profileReducer