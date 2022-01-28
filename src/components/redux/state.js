    let ADD_POST='ADD-POST'
    let ADD_MESSAGE='ADD-MESSAGE'
    let UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
    let UPDATE_NEW_MESSAGE='UPDATE-NEW-MESSAGE=TEXT'


let store = {
    _state: {
        profilePage:{
            posts:[
                {id:1, message:"Hey,why nobody love me ?", likeCounts:23},
                {id:2, message:"Its our new program! Hey!", likeCounts:4},
                ],
            newPostText:''
        },
    
        dialogsPage:{
            messages:[
                {id:1, message:"Hi"},
                {id:2, message:"How are you?"},
                {id:3, message:"Hi Yatora )"},
                {id:4, message:"Hi Julia"},
                {id:5, message:"Hi Dima"},
                ],
                newMessageText:'',
            dialogs:[
                    {id:1, name:"Dima"},
                    {id:2, name:"Arina"},
                    {id:3, name:"Anton"},
                    {id:4, name:"Oleg"},
                    {id:5, name:"Igor"},
                    {id:6, name:"Yoto"},
                    ],
        }
    },
    _callSubscriber(){},

    getState(){
        return this._state
    },

    subscribe(observer){
        this._callSubscriber= observer
    },
    dispatch(action){
        if(action.type ===ADD_POST){
            let newPost = {
                id:5,
                message:this._state.profilePage.newPostText,
                likeCounts:0
            } 
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        };
        if(action.type ===ADD_MESSAGE){
            let newMessage = {
                id:6,
                message:this._state.dialogsPage.newMessageText,
            } 
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber(this._state)
        };
        if(action.type ===UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        };
        if(action.type ===UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        };
        
        
    },
    
}

export const addPostActionCreator = () =>{
    return {
        type:ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) =>{
    return {type:UPDATE_NEW_POST_TEXT,newText:text}
}

export const addMessageActionCreator = () =>{
    return {type:ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) =>{
    return {type:UPDATE_NEW_MESSAGE,newText:text}
}

export default store

