import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardProvince from "../components/CardProvince";
import { useProvince } from "../context/ProvinceContext/ProvinceProvider";

function ProvincePage() {
  const { provinces, loadProvinces } = useProvince();
  const navigate = useNavigate();

  useEffect(() => {
    loadProvinces();
  }, []);

  function render() {
    if (provinces.lenght === 0) {
      return <h1 className="text-center">Not country yet</h1>;
    } else {
        return provinces.map((province) => <CardProvince province={province} key={province.id} />);
    }
  }

  return (
    <div>
      <div className="block sm:flex items-baseline md:justify-around">
        <h1 className="text-center my-3 text-3xl">Province List</h1>
        <button
          className="h-3/6 text-white text-base bg-blue-700 rounded py-1 px-2 mx-1 md:text-xl hover:bg-blue-400 hover:opacity-75 hover:text-black"
          onClick={() => navigate(`/province/new`)}
        >
          New Province
        </button>
      </div>
      <div className='grid sm:grid-cols-2 md"grid-cols-3 lg:grid-cols-4 gap-4'>
        {render()}
      </div>
    </div>
  );
}

export default ProvincePage;
