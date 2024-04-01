import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './AddTransactionForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTransactionForm = ({ pageView }) => {
  const initialValues = {
    amount: '',
    selectedDate: '',
    comment: '',
    category: '',
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number().required('Amount is required'),
    selectedDate: Yup.date().required('Date is required'),
    category: Yup.string().required('Category is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      if (values.amount === '1000') {
        toast.error('Error: Backend returned an error message');
      } else {
        toast.success('Transaction submitted successfully');
        resetForm();
      }
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className={style.container}>
      <ToastContainer position="top-center" />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {pageView === 'expense' && (
              <Field as="select" name="category">
                <option value="">Select category...</option>
                <option value="Main expenses">Main expenses</option>
                <option value="Products">Products</option>
                <option value="Car">Car</option>
                <option value="Self care">Self care</option>
                <option value="Child care">Child care</option>
                <option value="Household products">Household products</option>
                <option value="Education">Education</option>
                <option value="Leisure">Leisure</option>
                <option value="Other expenses">Other expenses</option>
                <option value="Entertainment">Entertainment</option>
              </Field>
            )}

            <Field
              type="number"
              name="amount"
              placeholder="Enter amount"
              inputMode="numeric"
            />
            <ErrorMessage
              name="amount"
              component="div"
              className={style.error}
            />

            <Field type="date" name="selectedDate" />
            <ErrorMessage
              name="selectedDate"
              component="div"
              className={style.error}
            />

            <Field type="text" name="comment" placeholder="Add a comment" />

            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransactionForm;
