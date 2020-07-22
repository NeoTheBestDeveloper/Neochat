const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initState = {
    dialogsData: [
        { id: 1, name: "Jane" },
        { id: 2, name: "Mark" },
    ],
    messagesData: [
    ],
    newMessageText: '',
    idStart: 0,
}

export const dialogsReducer = (state = initState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
        }

        case ADD_MESSAGE: {
            if (state.newMessageText.trim().length === 0) {
                return state;
            }

            let newMessage = {
                id: state.idStart,
                messageItem__text: state.newMessageText,
                author: "Me",
                avatar: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: '',
                idStart: { ...state }.idStart + 1,
            };

        }

        default:
            return state;
    }

}

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export default dialogsReducer;