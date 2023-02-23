import React from 'react';
import { Formik } from 'formik';

const MainStudent = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ 
        email: '', 
        password: '' 
    }}
      onSubmit={(values, { setSubmitting }) => {
        console.log();
      }}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue
        /* and other goodies */
      }) => (
        <form >
          <div className='row'>
            <div className='col-12 col-md-4 px-1 mt-1'>  
            <label>สาขา</label>
            <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
            </div>

          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default MainStudent ;