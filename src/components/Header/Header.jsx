import css from './Header.module.css'
const Header = (props) => {
    return (
        <header className={css.header}>
            <img className={css.logo} src='https://avatars.mds.yandex.net/i?id=1d99fed654abb4fb73dc1816eb11c0c55652e1250d321dc7-12609382-images-thumbs&n=13'></img>
        </header>
    )
}

export {Header}
