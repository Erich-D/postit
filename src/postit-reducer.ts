

export type PostitState = {
    note: string,
    notes: string[]
}

type SetPostAction = {type:"SET_NOTE", payload: string}
type AddPostAction = {type:"ADD_NOTE"};
type DeletePostsAction = {type:"DELETE_POSTS"};
type DeletePostAction = {type:"DELETE_POST", payload: number}
type PostitActions = SetPostAction | AddPostAction | DeletePostsAction | DeletePostAction

export function PostitReducer(state: PostitState, action: PostitActions): PostitState {
    let newState: PostitState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "ADD_NOTE": {
            if(newState.note.length < 3){alert("Post must have at least 3 characters"); return newState}
            newState.notes.push(newState.note);
            newState.note = "";
            return newState;
        }
        case "DELETE_POSTS": {
            newState.notes = [];
            return newState;
        }
        case "SET_NOTE": {
            newState.note = action.payload;
            return newState;
        }
        case "DELETE_POST": {
            const num: number = action.payload
            console.log(num)
            newState.notes.splice(num, 1);
            return newState;
        }
    }
}