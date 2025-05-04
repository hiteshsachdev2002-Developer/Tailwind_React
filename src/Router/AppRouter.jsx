import { createBrowserRouter } from "react-router-dom";
import PharmacyCards from "../Components/PharmacyCards";
import App from "../App";

const AppRouter =  createBrowserRouter(
    [
        {
           path:"/",
           element:<App/>
        },
        {
        path:"/Pharmacy",
        element:<PharmacyCards/>
        }
    ]
)


export default AppRouter;