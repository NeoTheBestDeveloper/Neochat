const { default: profileReducer, addPostActionCreator, deletePostAC, changeLikeAC, changeDisikeAC } = require("./profileReducer");

let state = {
    postData: [
        {id: 1, message: 'test1', likesCount: 0, dislikesCount: 0},
        {id: 2, message: 'test2', likesCount: 1, dislikesCount: 0},
        {id: 3, message: 'test3', likesCount: 5, dislikesCount: 0},
        {id: 4, message: 'test4', likesCount: 4, dislikesCount: 0},
    ],
    likesCountStart: 0,
    dislikesCountStart: 0,
    idStart: 5,
}

test('new post should be added', () => {
    let action = addPostActionCreator("lol");
    
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(5);
});  

test('message of new post should be correct ', () => {
    let action = addPostActionCreator("lol");
    
    let newState = profileReducer(state, action);

    expect(newState.postData[4].message).toBe("lol");
});  

test(`after deleting length of message shouldn't be decrement if id is incorrect`, () => {
    let action = deletePostAC(1000);
    
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
});

test('new like should be added', () => {
    let action = changeLikeAC(1);
    
    let newState = profileReducer(state, action);

    expect(newState.postData[0].likesCount).toBe(1);
});

test('new dislike should be added', () => {
    let action = changeDisikeAC(1);
    
    let newState = profileReducer(state, action);

    expect(newState.postData[0].dislikesCount).toBe(1);
});

test('if post have like, click on dislike should remove like', () => {
    let action = changeDisikeAC(2);
    
    let newState = profileReducer(state, action);

    expect(newState.postData[1].likesCount).toBe(0);
});

