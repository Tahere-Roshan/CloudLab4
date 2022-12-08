//reference-https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
//https://statusneo.com/different-ways-to-fetch-data-from-api-in-reactjs/
//

import { useState } from "react";
import { json } from "react-router-dom";

function Add(){

    const [postId, setPostId]=useState(null);
    function handleClick(){
        var jsonData={
            "Id": parseInt(document.getElementById("tourId").value),
            "description":document.getElementById("description").value,
            "date":document.getElementById("date").value,
            "price":parseInt(document.getElementById("price").value)
        }

        //send data to the backend via Post
        var tourId=document.getElementById("tourId").value;
        
        console.log(JSON.stringify(jsonData))
        const requestOption = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        }


        console.log("rea----",requestOption);

        fetch(`https://storefront20221206151127.azurewebsites.net/Tours/${tourId}`, requestOption)
        .then(alert("Add successful"))

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        };

        console.log("req data",jsonData)

        fetch("https://storefront20221206151127.azurewebsites.net/Tours", requestOptions)
        .then(response => {
          return response.json()
        })
        .then(data => {
            setPostId(data.tourId)
            setPostId(data.description)
            setPostId(data.date)
            setPostId(data.price)
          console.log("reached end ");
          console.log(data);
        })


    }

    return(

    <div>
        <table>
         
            <tr>
           
            </tr>
            <tr>
                <td><lable>Price</lable></td>
                <td><input id='price' type="text"></input></td>
            </tr>
            <tr>
                <td><lable>Description</lable></td>
                <td><input id='description' type="text"></input></td>

            </tr>
            <tr>
                <td><lable>Date</lable></td>
                <td><input id='date' type="text"></input></td>
            </tr>
        </table>
        <button onClick={handleClick}>Add</button>
</div>);
}

export {Add}