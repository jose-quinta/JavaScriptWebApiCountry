import { useNavigate } from "react-router-dom";
import { useProvince } from "../context/ProvinceContext/ProvinceProvider";

function CardProvince({ province }) {
  const { deleteProvince } = useProvince();
  const navigate = useNavigate();

  return (
    <div className="h-28 sm:border sm:border-black sm:rounded sm:h-36">
      <div className="h-2/6">
        <h3 className="text-center text-2xl">{province.province}</h3>
        <h5 className="font-light text-slate-700 text-base sm:ml-3">
          {province.country}
        </h5>
      </div>
      <div className="h-4/6 flex justify-center items-stretch">
        <button
          className="h-3/6 text-white text-sm bg-blue-700 rounded self-end mb-1 py-1 px-2 md:mx-1 md:text-xl hover:bg-blue-400 hover:opacity-75 hover:text-black"
          onClick={() => navigate(`/province/edit/${province.id}`)}
        >
          Edit
        </button>
        <button
          className="h-3/6 text-white text-sm bg-gray-700 rounded self-end mb-1 sm:py-1 sm:px-2 mx-1 md:text-xl hover:bg-gray-400 hover:opacity-75 hover:text-black"
          onClick={() => navigate(`/province/details/${province.id}`)}
        >
          Details
        </button>
        <button
          className="h-3/6 text-white text-sm bg-red-700 rounded self-end mb-1 sm:py-1 sm:px-2 md:mx-1 md:text-xl hover:bg-red-400 hover:opacity-75 hover:text-black"
          onClick={() => deleteProvince(province.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardProvince;
