import { useState, useEffect } from 'react';
import { useHref } from 'react-router-dom';
import { useCountry } from '../context/CountryContext/CountryProvider';

function NotFound() {
    const { getCountry } = useCountry();
    const [country, setCountry] = useState({
      id: 0,
      name: '',
    });

    const path = useHref();
    const params = path[path.length-1];

    useEffect(() => {
      const load = async () => {
        if ( params === '2' ) {
          const country = await getCountry(params);
          setCountry({
            id: country.id,
            name: country.name,
          });
          // console.log(country);
        }
      };
      load();
    }, []);

    return (
      <div>
        <h2 className="text-center text-slate-900 text-3xl mt-5">
          Page Not Found
        </h2>
        <div>
          <h3 className="text-center text-slate-900">{country.id}</h3>
          <h4 className="text-center text-slate-900">{country.name}</h4>
        </div>
      </div>
    );
}

export default NotFound;