import React, {useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    // let navigate = useNavigate();

    async function handleSubmit(e) {        
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8'
                
            },
            body: JSON.stringify({ 
                title: title,
                body: body
            })
        };
        console.log(requestOptions.body);
        const response = await fetch('/post', requestOptions);
        let actualData = await response.json();
        console.log(actualData) 

        if (response.status === 200) {
            console.log(actualData.post);
            // navigate('/');
        }
        else {
            // console.log("failed");
            console.log(actualData.message);
        }
    }

    return (
        <div id="create" className="intro route bg-image background">
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-middle" data-AOS="fade-right">
                            <div>
                                <h1 className="intro-title mb-4">Create <span className="name_big">Post</span></h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <label>Title</label>
                                        <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)}></input>
                                    </div>
                                    <div className="row">
                                        <label>Body</label>
                                        <input type="text" required value={body} onChange={(event) => setBody(event.target.value)}></input>
                                    </div>
                                    <div className="row">
                                        <button type="submit">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    );
    
}

export default CreatePost;