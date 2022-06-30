import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import formStyles from 'assets/scss/layout/_form.module.scss';
import buttonStyles from 'assets/scss/components/_buttons.module.scss';
import Multiselect from 'multiselect-react-dropdown';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const initialValues: FormState = {
  blogTitle: '',
  blogCategory: '',
  blogKeywords: '',
};

const AddBlog = () => {
  const validationSchema = Yup.object({
    blogTitle: Yup.string().required('Blog Title is required'),
    blogCategory: Yup.string().required('Blog Category is required'),
    blogKeywords: Yup.string(),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form className={`mt-0 ${formStyles.customForm}`}>
            <div className="row align-items-start">
              <div className=" col-12 mb-4">
                <div className="position-relative mb-3">
                  <Field
                    type="text"
                    name="blogTitle"
                    className={`border-0 position-relative w-100 ${
                      values.blogTitle !== '' ? `${formStyles.active}` : ''
                    }`}
                  />
                  <label
                    htmlFor=""
                    className={`mb-0 ${formStyles.placeholderLabel}`}
                  >
                    Add Blog Title
                  </label>
                  <ErrorMessage
                    name="blogTitle"
                    component="p"
                    className={`mb-0 pt-2 ${formStyles.invalidMessage}`}
                  />
                </div>
              </div>
              <div className=" col-6 mb-4">
                <div className="position-relative">
                  <Field
                    component="select"
                    name="blogCategory"
                    className={`border-0 position-relative w-100 ${
                      values.blogCategory !== '' ? `${formStyles.active}` : ''
                    }`}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Category1">Category 1</option>
                    <option value="Category2">Category 2</option>
                  </Field>
                  <ErrorMessage
                    name="blogCategory"
                    component="p"
                    className={`mb-0 pt-2 ${formStyles.invalidMessage}`}
                  />
                </div>
              </div>
              <div className=" col-6 mb-4">
                <Multiselect
                  displayValue="key"
                  id="css_custom"
                  onSelect={function noRefCheck() {}}
                  options={[
                    {
                      cat: 'Group 1',
                      key: 'Option 1',
                    },
                    {
                      cat: 'Group 1',
                      key: 'Option 2',
                    },
                    {
                      cat: 'Group 1',
                      key: 'Option 3',
                    },
                    {
                      cat: 'Group 2',
                      key: 'Option 4',
                    },
                    {
                      cat: 'Group 2',
                      key: 'Option 5',
                    },
                    {
                      cat: 'Group 2',
                      key: 'Option 6',
                    },
                    {
                      cat: 'Group 2',
                      key: 'Option 7',
                    },
                  ]}
                  placeholder="Select Keywords"
                  style={{
                    searchBox: {
                      border: 'none',
                      'border-radius': '0',
                    },
                  }}
                  className={`border-0 position-relative w-100 ${formStyles.customSelect}`}
                />
              </div>
              <div className="col-12 my-4">
                <Editor />
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-md-3">
                <button
                  type="submit"
                  className={`btn btn-primary text-center w-100 mt-2 py-2 ${buttonStyles.btn}`}
                >
                  Add Blog
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default AddBlog;
