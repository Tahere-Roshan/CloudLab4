//reference-https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples

function DeleteTours(){
    function handleClick(){
        const requestOption ={
            method:'Delete'
        };
        var tourID=document.getElementById('tourID').value;
        fetch(`https://storefront20221206151127.azurewebsites.net/Tours/${tourID}`, requestOption)
        .then(alert("Delete Successful"))
    } 
return(
    <div>
        <label>Input tour ID to delete</label>
        <input type="text" id="tourID"></input>
        <button type="submit" onClick={handleClick}>Submit</button>
    </div>
);
}
export{DeleteTours}