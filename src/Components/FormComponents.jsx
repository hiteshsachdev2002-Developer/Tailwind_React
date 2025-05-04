
function FormComponents({text,Type,placeholder})
{
    return(
        <>
            <div>
          <label className="block text-sm font-medium text-gray-700">{text}</label>
          <input
            type={Type}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
          />
        </div>
        </>
    )
}

export default FormComponents