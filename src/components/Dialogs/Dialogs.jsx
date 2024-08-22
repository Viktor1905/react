import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";

const Message = (props) => {
    return (
        <div className = {css.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Ekaterina'},
        {id: 3, name: 'Segrey'},
        {id: 4, name: 'ViktorBig'},
        {id: 5, name: 'Evgeniy'},
        {id: 6, name: 'Aleksandr'},
    ];
    let messagesData = [
        {message: 'Hi', id: 1},
        {message: 'Hello', id: 2},
        {message: 'Hi,bro', id: 3},
    ];
    return (
        <div className = {css.dialogs_wrapper}>
            <div className = {css.dialogs_items}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id} />
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id} />
                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id} />
            </div>

            <div className = {css.messages}>
                <Message message = 'Hi' />
                <Message message = 'Hello' />
                <Message message = 'Hi, bro' />
            </div>
        </div>
    )
}

export {Dialogs}
