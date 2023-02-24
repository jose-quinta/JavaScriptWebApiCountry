import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useHref, useNavigate, useParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext/CountryProvider";
import { useProvince } from "../context/ProvinceContext/ProvinceProvider";
import CardProvince from "../components/CardProvince";

function CountryForm() {
  const { createCountry, getCountry, updateCountry } = useCountry();
  const { provinces, getProvincesListFromCountry } = useProvince();
  const [country, setCountry] = useState({
    name: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const url = useHref();

  const create = '/country/new';
  const edit = `/country/edit/${params.id}`;
  const details = `/country/details/${params.id}`;

  useEffect(() => {
    const loadCountry = async () => {
      if (
        url.includes(details) || url.includes(edit)
      ) {
        const country = await getCountry(params.id);
        setCountry({
          name: country.name,
        });
      }
    };
    /* if (url.includes(details)) {
      getProvincesListFromCountry(params.id);
    } */
    loadCountry();
  }, []);

  /* function render() {
    return provinces.lenght === 0 ? (
      <h1 className="text-center">Not province yet</h1>
    ) : (
      provinces.map((province) => (
        <CardProvince province={province} key={province.id} />
      ))
    );
  } */

  return (
    <div>
      <div>
        {/* {url.includes(`details/${params.id}`) || url.includes(`edit/${params.id}`) ? "True" : "False"} */}
        <Formik
          initialValues={country}
          enableReinitialize={true}
          onSubmit={async (values) => {
            if (url.includes(edit)) {
              await updateCountry(params.id, values);
              navigate("/country");
            } else if (url.includes(details)) {
              navigate("/country");
            } else {
              await createCountry(values);
              navigate("/country");
            }
            setCountry({
              name: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="w-11/12 bg-slate-300 rounded-md p-4 mx-auto sm:mt-10 sm:max-w-sm"
            >
              <h2 className="text-xl font-bold uppercase text-center">
                {url.includes(edit)
                  ? "Edit Country"
                  : url.includes(details)
                  ? "Details Country"
                  : "New Country"}
              </h2>
              <label className="block">Name</label>
              <input
                type="text"
                name="name"
                className="px-2 py-1 rounded-sm w-full"
                placeholder="Write a name"
                readOnly={url.includes(details) ? true : false}
                onChange={handleChange}
                value={values.name}
              />
              <button
                type="submit"
                className="block bg-indigo-500 px-2 py-1 mt-2 mx-auto w-3/5 text-white md:w-full rounded-md"
                disabled={isSubmitting}
              >
                {url.includes(details) && isSubmitting
                  ? "Returning..."
                  : url.includes(details)
                  ? "Return List"
                  : url.includes(edit) && isSubmitting
                  ? "Updating..."
                  : url.includes(edit)
                  ? "Update"
                  : url.includes(create) && isSubmitting
                  ? "Saving"
                  : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {/* <div className="w-full mt-5 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {render()}
      </div> */}
    </div>
  );
}

export default CountryForm;
