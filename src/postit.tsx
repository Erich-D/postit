import React, { useReducer } from "react";
import { Header } from "./header";
import { PostitReducer, PostitState } from "./postit-reducer"

const containerStyle: React.CSSProperties = {
    maxWidth: '1000px',
    border: '1px solid black',
    margin: 'auto',
    height: '100vh'  
  }

const initialPostitState: PostitState = {
    note: "",
    notes: []
}

export function PostIt(){
 
    const [postitState, dispatch] = useReducer(PostitReducer, initialPostitState);

    return (
        <div style={containerStyle}>
            <Header title="Post It Notes"></Header>
            <div style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <div>
                    <label htmlFor="posts">Type Note Here</label>
                </div> 
                <textarea value={postitState.note} id="posts" cols={30} rows={5} onInput={(event:React.ChangeEvent<HTMLTextAreaElement>)=>dispatch({type:"SET_NOTE", payload:event.target.value })}></textarea>
            </div>
            
            <button onClick={()=>dispatch({type:"ADD_NOTE"})}>Add Post</button>
            <button onClick={()=>dispatch({type:"DELETE_POSTS"})}>Clear All</button>
            <ul>
                {postitState.notes.map((p, index) => <li><div style={{display:'flex', justifyContent:'space-between'}}>{p}<button onClick={()=>dispatch({type:"DELETE_POST", payload: index})}>X</button></div></li>)}
            </ul>
        </div>
    )
}