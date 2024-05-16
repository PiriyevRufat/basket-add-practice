import React, { useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import MainContext from "../../../context/context";
import Table from "../../../components/admin/Table/Table";
const AddPage = () => {
  const { data, setData } = useContext(MainContext);
  return (
    <div>
      <Formik
        initialValues={{ image: "", title: "", price: "", name: "" }}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post("http://localhost:8080/api/categories", { ...values })
            .then((res) => {
              setData([...data, ...res.data]);
            }).catch(error=>{
                console.log(error)
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="title..."
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <input
              placeholder="name..."
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              placeholder="image..."
              type="text"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              placeholder="price..."
              type="text"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <Table items={data} />
    </div>
  );
};

export default AddPage;
