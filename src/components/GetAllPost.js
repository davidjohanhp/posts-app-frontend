import React, {useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

function GetAllPost() {
    const [valuesArray, setArray] = useState([]);
    let navigate = useNavigate();

    async function handleGet() {        
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
               
            },
        };
        const response = await fetch('/get-posts', requestOptions);
        let actualData = await response.json();
        setArray(actualData.posts);
        console.log(actualData.posts);
    }

    const getResponse = () => { //IMPLEMENT AXIOS
        const baseURL = 'https://posts-app-backend-production.up.railway.app/get-posts';
        // const baseURL = 'http://localhost:8080/get-posts';
        const requestOptions = {
            // method: 'GET',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8',
                // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                // 'Access-Control-Allow-Methods': '*',
            },
        };

        axios.get(baseURL, requestOptions).then((response) => {
            console.log(response);
            // let actualData = response
            console.log(response);
            setArray(response.data.posts)
        }
        ).catch(error => console.error(error))

        
    }

    useEffect(() => {
        // handleGet()
        getResponse()
      })

    return (
        <div id="create" className="intro route bg-image background">
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 align-middle">
                                <h1 className="intro-title mb-4">All <span className="name_big">Posts</span></h1>
                                <div className="container d-flex flex-wrap align-items-center">                        
                                    {valuesArray.map(posts => {
                                            return (
                                                <div class="card">
                                                <a href={"/get/"+posts.ID}><h3 class="card__title">{posts.Title}</h3></a>
                                                <p class="card__content">{posts.Body}</p>
                                                <div class="card__date">April 15, 2022</div>
                                                <div class="card__arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                        <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            );
                                        })
                                    }
                                </div>
                                <button className="create-button" onClick={() => navigate("/create")}>
                                    Create New Post
                                    {/* <Link to="/create">Create New Post</Link> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
    
}

export default GetAllPost;