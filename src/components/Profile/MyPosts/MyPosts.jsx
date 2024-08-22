import css from './MyPosts.module.css'

const MyPosts = (props) => {
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
                {props.postsElement}
            </div>
        </div>
    )
}
export {MyPosts}
