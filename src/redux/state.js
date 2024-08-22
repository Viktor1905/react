const state = {
    profile:{
       posts: [
            {id: 1, message: 'Hi, my friend', likesCount: 10, liked: false},
            {id: 2, message: 'Hello, how are you?', likesCount: 5, liked: false},
            {id: 3, message: 'Nice ava', likesCount: 8, liked: false},
            {id: 4, message: 'Are you learning React?', likesCount: 12, liked: true },
        ],
    },
    dialogs: {
        dialogs: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Ekaterina'},
            {id: 3, name: 'Segrey'},
            {id: 4, name: 'ViktorBig'},
            {id: 5, name: 'Evgeniy'},
            {id: 6, name: 'Aleksandr'},
        ],
        messages: [
            {message: 'Hi', id: 1},
            {message: 'Hello', id: 2},
            {message: 'Hi,bro', id: 3},
        ],
    },

}

export { state }