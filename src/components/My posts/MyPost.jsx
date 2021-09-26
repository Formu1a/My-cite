import s from './MyPost.module.css'
import Post from './Post';



const MyPost = (props) => {
    return( 
    <div>
        <div className={s.post}>
            <h3>
                My Posts
            </h3>
        </div >
        <div className={s.text}>
            <textarea name="Your news" id="" cols="105" rows="4" placeholder="your news......" maxLength="1000"  ></textarea>
            <button className={s.button}>Send</button>
        </div>
        <div className={s.item}>
            <Post message='Hey,why nobody love me ?' likeCounts="23"/>
            <Post message='Its our new program! Hey! ' likeCounts="0"/>
        </div>
        
    </div>
    );
}

export default MyPost;