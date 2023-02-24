import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useHref, useNavigate, useParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext/CountryProvider";
import { useProvince } from "../context/ProvinceContext/ProvinceProvider";

function ProvinceForm() {
  const { createProvince, getProvince, updateProvince } = useProvince();
  const { countries, loadListCountries } = useCountry();
  const [province, setProvince] = useState({
    name: "",
    id_country: 0,
  });

  const params = useParams();
  const navigate = useNavigate();
  const url = useHref();

  const create = "/province/new";
  const edit = `/province/edit/${params.id}`;
  const details = `/province/details/${params.id}`;

  useEffect(() => {
    const loadProvinces = async () => {
      if (url.includes(details) || url.includes(edit)) {
        const province = await getProvince(params.id);
        // console.log(province);
        setProvince({
          name: province.province,
          id_country: province.id_country,
        });
      }
    };
    loadProvinces();
    loadListCountries();
  }, []);

  function renderOptions() {
    if (countries.lenght === 0) {
      return <option values="">Not country yet</option>;
    } else {
      return countries.map((country) =>
        country.id === params.id ? (
          <option selected value={country.id} key={country.id}>
            {country.name}
          </option>
        ) : (
          <option value={country.id} key={country.id}>
            {country.name}
          </option>
        )
      );
    }
  }

  return (
    <div>
      {/* {url.includes(`details/${params.id}`) || url.includes(`edit/${params.id}`) ? "True" : "False"} */}
      <Formik
        initialValues={province}
        enableReinitialize={true}
        onSubmit={async (values) => {
          //  console.log(values);
          if (url.includes(edit)) {
            await updateProvince(params.id, values);
            navigate("/province");
          } else if (url.includes(details)) {
            navigate("/province");
          } else {
            await createProvince(values);
            navigate("/province");
          }
          setProvince({
            name: "",
            id_country: 0,
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
                ? "Edit Province"
                : url.includes(details)
                ? "Details Province"
                : "New Province"}
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
            <label className="block">Country</label>
            <select
              type="select"
              name="id_country"
              className="px-2 py-1 rounded-sm w-full"
              placeholder="Select your Country"
              readOnly={url.includes(details) ? true : false}
              /* multiple={true} */
              onChange={handleChange}
              value={values.id_country}
            >
              {renderOptions()}
            </select>
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
  );
}

export default ProvinceForm;
