import React, {useState, useEffect} from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

function GetPost() {
    const [post, setPost] = useState("");
    let { id } = useParams();
    let navigate = useNavigate();

    async function handleGet() {        
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
        const response = await fetch('/get-post/' + id, requestOptions);
        let actualData = await response.json();
        setPost(actualData.post);
        console.log(actualData.post);
    }

    const getResponse = () => { //IMPLEMENT AXIOS
        const baseURL = 'https://posts-app-backend-production.up.railway.app/get-post';
        const requestOptions = {
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8',
            },
        };

        axios.get(baseURL+'/'+id, requestOptions).then((response) => {
            console.log(response);
            setPost(response.data.post)
        }
        ).catch(error => console.error(error))

        
    }

    useEffect(() => {
        // handleGet()
        getResponse()
      })
    
    async function handleDelete() {        
        const requestOptions = {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
        const response = await fetch('/post/' + id, requestOptions);
        let actualData = await response.json();
        // setPost(actualData.post);
        console.log(actualData.post);
        navigate('/');
    }

    return (
        <div id="create" className="intro route bg-image background">
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                    <button>
                        <Link to="/create">Create New Post</Link>
                    </button>
                    <button>
                        <Link to="/">Check All Post</Link>
                    </button>
                    <button onClick={handleDelete}>
                       Delete Post
                    </button>
                    <div className="row">
                        <div className="col-md-12 align-middle">
                            <div>
                                <h1 className="intro-title mb-4">Post <span className="name_big">{post.ID}</span></h1>                                
                                <div>
                                    <p>Title: {post.Title}</p>
                                    <p>Description: {post.Body}</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    );
    
}

export default GetPost;