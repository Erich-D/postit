import { PostitState, PostitReducer} from "../postit-reducer"

test("SET Post", ()=>{
    const postState: PostitState = {
        note: "hello",
        notes: []
    }

    const nextState = PostitReducer(postState, {type:"SET_NOTE", payload: "goodbye"});
    expect(nextState.note).toBe("goodbye");
})

test("ADD Post", ()=>{
    const postState: PostitState = {
        note: "so sad",
        notes: ["goodbye", "too bad"]
    }

    const nextState = PostitReducer(postState, {type:"ADD_NOTE"});
    expect(nextState.notes.length).toBe(3);
})

test("ADD Small Post", ()=>{
    const postState: PostitState = {
        note: "so",
        notes: ["goodbye", "too bad"]
    }

    const nextState = PostitReducer(postState, {type:"ADD_NOTE"});
    expect(nextState.notes.length).toBe(2);
})

test("DELETE Posts", ()=>{
    const postState: PostitState = {
        note: "hello",
        notes: ["goodbye", "too bad", "so sad"]
    }

    const nextState = PostitReducer(postState, {type:"DELETE_POSTS"});
    expect(nextState.notes.length).toBe(0);
})

test("DELETE Post", ()=>{
    const postState: PostitState = {
        note: "hello",
        notes: ["goodbye", "too bad", "so sad"]
    }

    const nextState = PostitReducer(postState, {type:"DELETE_POST", payload: 1});
    expect(nextState.notes.includes("too bad")).toBe(false);
})