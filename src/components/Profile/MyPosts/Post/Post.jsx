import css from './Post.module.css'
const liked = (event) => event.currentTarget.classList.toggle(`${css.liked}`);

const Post = (props) => {
    return (
        <div className={css.item}>
            <img  className={css.avatar} src="https://avatars.yandex.net/get-music-content/5502420/0eb03252.a.24538953-1/m1000x1000?webp=false"></img>
            <span className={css.message}>{props.message}</span>
            <div className={css.like_block}>
                <svg className={css.heart} onClick={liked} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z" ></path> </g>
                </svg>
                <span className={css.likes_count}>{props.likeCount}</span>
                {/*заполненное сердечко:2661*/}

            </div>
        </div>
    )
}
export {Post}
