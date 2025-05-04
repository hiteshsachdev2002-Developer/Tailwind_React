import FormComponents from "./FormComponents";
import Button from "./Button";
import Anchor from "./Anchor";

function LoginForm() {

    return (
        <>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form className="space-y-4">
                    <FormComponents text={"Email"} Type={"email"} placeholder={"Hitesh@gmail.com"}/>
                    <FormComponents text={"Password"} Type={"password"} placeholder={"123..."} />
                    <div>
                    </div>
                    <Button text={"Sign In"}/>
                    <Anchor/>
               </form>
            </div>
        </>
    )
}

export default LoginForm;