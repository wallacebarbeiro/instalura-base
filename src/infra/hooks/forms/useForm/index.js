/* eslint-disable import/prefer-default-export */
import React from 'react';

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner.reduce((errorObjectAcc, currentError) => {
    const fieldName = currentError.path;
    const errorMessage = currentError.message;
    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export function useForm({
  initialValues,
  onSubmit,
  validateSchema,
}) {
  const [values, setValues] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouchedFields] = React.useState({});

  async function validadeValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setIsFormDisabled(false);
      setErrors({});
    } catch (err) {
      const formatedErros = formatErrors(err.inner);
      setErrors(formatedErros);
      setIsFormDisabled(true);
    }
  }

  React.useEffect(() => {
    validadeValues(values)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    // Validação do form
    isFormDisabled,
    setIsFormDisabled,
    // Passando os erros
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');
      setTouchedFields({
        ...touched,
        [fieldName]: true, // usuario: true, senha: true ...
      });
    },
  };
}
