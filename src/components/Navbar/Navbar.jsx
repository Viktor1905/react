import css from './Navbar.module.css';

function Navbar() {
    return(
        <nav className={css.nav}>
            <div className={`${css.item} ${css.active}`}>
                <a href='react/src/components/Navbar/Navbar#'>Profile</a>
            </div>
            <div className={css.item}>
                <a href='react/src/components/Navbar/Navbar#'>Messages</a>
            </div>
            <div className={css.item}>
                <a href='react/src/components/Navbar/Navbar#'>News</a>
            </div>
            <div className={css.item}>
                <a href='react/src/components/Navbar/Navbar#'>Music</a>
            </div>
        </nav>
    )
}
export {Navbar}
