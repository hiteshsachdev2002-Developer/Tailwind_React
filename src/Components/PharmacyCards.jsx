import { useState } from 'react';
import medicine from '../assets/medicine.jpg';
function PharmacyCards({name,description,price,})
{
    const [btn,SetbtnType] = useState("Add to Cart");
    const [isAdded, setIsAdded] = useState(false);

   function handelCart()
   {

      SetbtnType("Added To Cart");
      setIsAdded(true);
   }

    return(
        <>
           <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 m-10 ">
           <img
            className="w-full h-48 object-cover"
            src={medicine}
            alt="Product"
           />
           <div className="p-4">
        {/* Name and Price */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <span className="text-blue-600 font-bold">${price}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        {/* Button */}
        <button className={`w-full ${isAdded? 'bg-green-600':'bg-blue-600'  } text-white py-2 rounded-md` } onClick={handelCart}>
           {btn}
        </button>
      </div>

           </div>
           
        </>
    )
}

export default PharmacyCards;