import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = props.messages.map(message => <Message message={message.message} id={message.id} />);
    return (
        <div className = {css.dialogs_wrapper}>
            <div className = {css.dialogs_items}>
                { dialogsElement }
            </div>

            <div className = {css.messages}>
                { messagesElement }
            </div>
        </div>
    )
}

export {Dialogs}
