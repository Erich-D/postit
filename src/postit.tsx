import React, { useReducer } from "react"
import { PostitReducer, PostitState } from "./postit-reducer"

const initialPostitState: PostitState = {
    note: "",
    notes: []
}

export function PostIt(){
 
    const [postitState, dispatch] = useReducer(PostitReducer, initialPostitState);

    return <>
        <h1>Post It Notes</h1>

        <label htmlFor="posts">Type Note Here</label>
        <textarea value={postitState.note} id="posts" cols={30} rows={5} onInput={(event:React.ChangeEvent<HTMLTextAreaElement>)=>dispatch({type:"SET_NOTE", payload:event.target.value })}></textarea>
        <button onClick={()=>dispatch({type:"ADD_NOTE"})}>Add Post</button>
        <button onClick={()=>dispatch({type:"DELETE_POSTS"})}>Clear All</button>
        <ul>
            {postitState.notes.map((p, index) => <li>{p}<button onClick={()=>dispatch({type:"DELETE_POST", payload: index})}>X</button></li>)}
        </ul>
    </>
}