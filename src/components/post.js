//https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
//request to the Reqres api which is a fake online REST api that includes a /api/posts

import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function Post() {


    const [postId, setPostId]=useState(null);
    useEffect(() => { // This is wrong becuase 
        // POST request using fetch inside useEffect React hook
        const reqData = { "id": 0,
        "description": "string",
        "date": "string",
        "price": 0 }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqData)
        };

        console.log("req data",reqData)

        fetch("https://storefront20221206151127.azurewebsites.net/Tours", requestOptions)
        .then(response => {
          return response.json()
        })
        .then(data => {
            setPostId(data.id)
          console.log("reached end ");
          console.log(data);
        })
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
        
    
            return (
        
                <div className="container p-3">
                <div className="text-cente">
                    <h3>Post Function</h3>
                    <div>Post Id : {postId}</div>
                    </div>
                    
       </div>
          
            )

        }
           


    

