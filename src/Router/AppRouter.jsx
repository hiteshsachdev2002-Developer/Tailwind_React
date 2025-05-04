import { createBrowserRouter } from "react-router-dom";
import PharmacyPage from "../Components/PharmacyPage";
import App from "../App";

const AppRouter =  createBrowserRouter(
    [
        {
           path:"/",
           element:<App/>
        },
        {
        path:"/Pharmacy",
        element:<PharmacyPage/>
        }
    ]
)


export default AppRouter;