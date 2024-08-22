import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
const MyPosts = (props) => {
    let postData = [
        {id: 1, message: 'Hi, my friend', likesCount: 10},
        {id: 2, message: 'Hello, how are you?', likesCount: 5},
        {id: 3, message: 'Nice ava', likesCount: 8},
        {id: 4, message: 'Are you learning React?', likesCount: 12},
    ];
    return (
        <div className = {css.my_posts}>
            My posts
            <div>
                <div>
                    <textarea className = {css.new_post}></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
                <div>
                <button>Remove</button>
                </div>
            </div>
            <div className={css.posts}>
                <Post message = {postData[0].message} likeCount = {postData[0].likesCount} />
                <Post message = {postData[1].message} likeCount = {postData[1].likesCount} />
                <Post message = {postData[2].message} likeCount = {postData[2].likesCount} />
                <Post message = {postData[3].message} likeCount = {postData[3].likesCount} />
            </div>
        </div>
    )
}
export {MyPosts}
