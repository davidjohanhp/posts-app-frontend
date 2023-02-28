import React, {useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function GetAllPost() {
    const [valuesArray, setArray] = useState([]);
    let navigate = useNavigate();

    async function handleGet() {        
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
        const response = await fetch('/get-posts', requestOptions);
        let actualData = await response.json();
        setArray(actualData.posts);
        console.log(actualData.posts);
    }

    useEffect(() => {
        handleGet()
      })

    return (
        <div id="create" className="intro route bg-image background">
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                    <button>
                        <Link to="/create">Create New Post</Link>
                    </button>
                    <div className="row">
                        <div className="col-md-12 align-middle">
                            <div>
                                <h1 className="intro-title mb-4">All <span className="name_big">Posts</span></h1>                                
                                {valuesArray.map(posts => {
                                        return (
                                            <div>
                                                <a href={"/get/"+posts.ID} >Title: {posts.Title}</a>
                                                <p>Description: {posts.Body}</p>
                                                {/* <button>
                                                    <Link to={"/get/"+posts.ID} >Check Post Detail</Link>
                                                </button> */}
                                                <br></br>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    );
    
}

export default GetAllPost;