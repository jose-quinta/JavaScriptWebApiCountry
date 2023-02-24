import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCountry from "../components/CardCountry";
import { useCountry } from "../context/CountryContext/CountryProvider";

function CountryPage() {
  const { countries, loadCountries } = useCountry();
  const navigate = useNavigate();

  useEffect(() => {
    loadCountries();
  }, []);

  function render() {
    if (countries.lenght === 0) {
      return <h1 className="text-center">Not country yet</h1>;
    } else {
      return countries.map((country) => <CardCountry country={country}  key={country.id} />);
    }
  }

  return (
    <div>
      <div className="block sm:flex items-baseline justify-around">
        <h1 className="text-center my-3 text-3xl">Country List</h1>
        <button
          className="h-3/6 text-white text-base bg-blue-700 rounded py-1 px-2 md:text-xl hover:bg-blue-400 hover:opacity-75 hover:text-black"
          onClick={() => navigate(`/country/new`)}
        >
          New Country
        </button>
      </div>
      <div className='w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {render()}
      </div>
    </div>
  );
}

export default CountryPage;
