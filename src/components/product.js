import { useEffect, useState } from "react";





export default function Product() {


    const [tourList, settourList] = useState([])
  useEffect(() => {
    fetch('https://storefront20221206151127.azurewebsites.net/Tours')
      .then((Response) => Response.json())
      .then((data) => {
        settourList(data)
      })
      .catch((error) => {
        console.log(error.message);
      });

  }, []);

  return (
    <div>
      <div className="grid text-center">
        <div className="g-col-6">

      
      <table className=" table table table-info table-striped table-hover ">
          <thead>
            <td className="">Id</td>
            <td className="">Description</td>
            <td className="">Name</td>
            <td className="">Price</td>
            <td className="">Reservations</td>
          </thead>

          <tbody>
            
            {tourList.map((tour) =>
              <tr className="">
                <td className="">{tour.id}</td>
                <td className="">{tour.date}</td>
                <td className="">{tour.description}</td>
                <td className="">{tour.price}</td>
                <td className="">{tour.reservations}</td>
                <td><button>Add to Cart</button></td>
              </tr>
              
              
            )}
          </tbody>
        </table>
        </div>
        </div>
    </div>
    
  )
}
