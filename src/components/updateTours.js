//reference-https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
//https://statusneo.com/different-ways-to-fetch-data-from-api-in-reactjs/
//

import { json } from "react-router-dom";

function UpdateTours(){
    function handleClick(){

        var jsonData={
            "Id": parseInt(document.getElementById("tourId").value),
            "description":document.getElementById("description").value,
            "date":document.getElementById("date").value,
            "price":parseInt(document.getElementById("price").value)
        }
        const Id =  parseInt(document.getElementById("tourId").value);

        let url = `https://storefront20221206151127.azurewebsites.net/Tours/${Id}`;
        console.log("url", url);

        console.log("Update ---- ", jsonData );
        //send data to the backend via Post
        var tourId=document.getElementById("tourId").value;
        
        console.log(JSON.stringify(jsonData))
        const requestOption = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        }

        console.log("rea----",requestOption);

        fetch(url, requestOption)
        .then(alert("Update successful"))
    }

    return(

    <div>
        <table>
            <tr>
                <th>Field</th><th>Value</th>

            </tr>
            <tr>
            <td>
                <label>Tour ID</label>
            </td>
            <td>
            <select id="tourId" selected>
                
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
            </select>
            </td>
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
        <button onClick={handleClick}>update</button>
</div>);
}

export {UpdateTours}