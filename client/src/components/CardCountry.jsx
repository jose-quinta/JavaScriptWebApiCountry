import { useNavigate } from "react-router-dom";
import { useCountry } from "../context/CountryContext/CountryProvider";

function CardCountry({ country }) {
  const { deleteCountry } = useCountry();
  const navigate = useNavigate();

  return (
    <div className="h-28 bg-cyan-200 py-2 sm:rounded sm:h-36">
      <div className="h-2/6">
        <h3 className="text-center text-2xl">{country.name}</h3>
      </div>
      <div className="h-4/6 flex justify-center items-stretch">
        <button
          className="h-3/6 text-white text-base bg-blue-700 rounded self-end mb-1 py-1 px-2 lg:mx-1 md:text-xl hover:bg-blue-400 hover:opacity-75 hover:text-black"
          onClick={() => navigate(`/country/edit/${country.id}`)}
        >
          Edit
        </button>
        <button
          className="h-3/6 text-white text-base bg-gray-700 rounded self-end mb-1 mx-1 py-1 px-2 md:mx-0 md:text-xl hover:bg-gray-400 hover:opacity-75 hover:text-black"
          onClick={() => navigate(`/country/details/${country.id}`)}
        >
          Details
        </button>
        <button
          className="h-3/6 text-white text-base bg-red-700 rounded self-end mb-1 py-1 px-2 lg:mx-1 md:text-xl hover:bg-red-400 hover:opacity-75 hover:text-black"
          onClick={() => deleteCountry(country.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardCountry;
