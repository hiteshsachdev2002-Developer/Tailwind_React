import loginImage from '../assets/login-bg.jpg';

function ImgSection() {
    return (
        <>
            <img
                src={loginImage}
                alt="Login Visual"
                className="object-cover w-full h-full"
            />
        </>
    )
}

export default ImgSection;