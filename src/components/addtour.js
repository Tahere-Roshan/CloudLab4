//reference-https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples

function AddTours(){
    function handleClick(){
        const requestOption ={
            method:'POST'
        };
        var tourID= parseInt(document.getElementById('tourId').value);
        var description=document.getElementById('description').value;
        var price=document.getElementById('price').value;
        var date= parseInt(document.getElementById('date').value);
        fetch(`https://storefront20221206151127.azurewebsites.net/Tours/${tourID}`, requestOption)
        .then(alert("Add Successful"))
    }
return(
    <div>
        <label>Input tour ID to delete</label>
        <input type="text" id="tourID"></input>
        <input type="text" id="description">Description</input>
        <input type="text" id="price">Price</input>
        <input type="text" id="date">Date</input>
        <button type="submit" onClick={handleClick}>Submit</button>
    </div>
);
}
export{AddTours}