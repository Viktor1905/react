import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Ekaterina'},
        {id: 3, name: 'Segrey'},
        {id: 4, name: 'ViktorBig'},
        {id: 5, name: 'Evgeniy'},
        {id: 6, name: 'Aleksandr'},
    ];
    let messages = [
        {message: 'Hi', id: 1},
        {message: 'Hello', id: 2},
        {message: 'Hi,bro', id: 3},
    ];
    let dialogsElement = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = messages.map(message => <Message message={message.message} id={message.id} />);

    return (
        <div className = {css.dialogs_wrapper}>
            <div className = {css.dialogs_items}>
                {dialogsElement}
            </div>

            <div className = {css.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export {Dialogs}
