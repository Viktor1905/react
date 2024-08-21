import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return(
        <nav className={css.nav}>
            <div className={`${css.item}`}>
                <NavLink to='/profile' className={({isActive}) => isActive ? `${css.active}` : ''}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/dialogs' className={({isActive}) => isActive ? `${css.active}` : ''}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/news' className={({isActive}) => isActive ? `${css.active}` : ''}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/music' className={({isActive}) => isActive ? `${css.active}` : ''}>Music</NavLink>
            </div>
        </nav>
    )
}
export {Navbar}
