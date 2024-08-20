import css from './Post.module.css'
function Post(props){
    return (
        <div className={css.item}>
            <img  className={css.avatar} src="https://avatars.yandex.net/get-music-content/5502420/0eb03252.a.24538953-1/m1000x1000?webp=false"></img>
            <span>{props.message}</span>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export {Post}
