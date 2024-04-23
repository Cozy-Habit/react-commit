import { useNavigate } from "react-router-dom";

import { useState } from "react";

export default function Index(){
    const navigate = useNavigate();
    
    const [owner, setOwner] = useState("");
    const [repo, setRepo] = useState("");
    
    function handleSubmit(){
        navigate(`/${owner}/${repo}`); //redirecting to
    }

    return(
            <form onSubmit={handleSubmit}>
                <label>
                    Owner:
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        name="owner"
                        id="owner"
                        onChange={(event) => {setOwner(event.target.value)}}/>
                </label>
                <label>
                    Repository:
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        name="repo"
                        id="repo"
                        onChange={(event) => {setRepo(event.target.value)}} />
                </label>
                <button type="submit" ></button>
            </form>
    );
}