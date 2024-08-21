import css from './Post.module.css'
const Post = (props) => {
    return (
        <div className={css.item}>
            <img  className={css.avatar} src="https://avatars.yandex.net/get-music-content/5502420/0eb03252.a.24538953-1/m1000x1000?webp=false"></img>
            <span className={css.message}>{props.message}</span>
            <div className={css.like_block}>
                <span className={css.heart}>{'\u2661'}</span>
                <span className={css.likes_count}>{props.likeCount}</span>
                {/*заполненное сердечко:2661*/}
            </div>
        </div>
    )
}
export {Post}
