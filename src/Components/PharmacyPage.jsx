import PharmacyCards from "./PharmacyCards";
import pharmacyProducts  from "../utils/data"
function PharmacyPage()
{
    return(
        <>
           <div  className='grid grid-cols-4 gap-4 '>
           {
            pharmacyProducts.map((product)=>
            {  

               return(<PharmacyCards key={product.id} name={product.name} description={product.description} price={product.price}/>)
           
            })
           }
           </div>
        </>
    )
}

export default PharmacyPage;