
function Anchor()
{
    return(
        <>
           <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Create one
          </a>
        </p> 
        </>
    )
}

export default Anchor;