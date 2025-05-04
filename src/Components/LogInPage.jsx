import ImgSection from "./ImgSection";
import LoginForm from "./LoginForm";

function LogInPage()
{
    return(
        <>
           <div className="flex flex-col md:flex-row max-h-screen">
              <div className="login-image md:w-1/2">
                  <ImgSection/>
              </div>
               <div className=" md:w-1/2 flex items-center justify-center">
                   <LoginForm/>
         
               </div>
           </div>
         </>
    )
}

export default LogInPage;