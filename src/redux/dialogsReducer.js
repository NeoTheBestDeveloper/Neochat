const ADD_MESSAGE = 'ADD-MESSAGE';

let initState = {
    dialogsData: [
        { id: 1, name: "Jane" },
        { id: 2, name: "Mark" },
    ],
    messagesData: [
    ],
    idStart: 0,
}

export const dialogsReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.idStart,
                messageItem__text: action.newMessageBody,
                author: "Me",
                avatar: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                idStart: { ...state }.idStart + 1,
            };

        }

        default:
            return state;
    }

}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;