import { Field, ErrorMessage } from 'formik';
import TextError from './text-error';

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="">
      <label
        htmlFor={name}
        className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <Field
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;