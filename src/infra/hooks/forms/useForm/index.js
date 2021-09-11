/* eslint-disable import/prefer-default-export */
import React from 'react';

export function useForm({
  initialValues,
  onSubmit,
  validateSchema,
}) {
  const [values, setValues] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouchedFields] = React.useState({});

  React.useEffect(() => {
    // validateSchema

    validateSchema(values)
      .then(() => {
        // console.log(result);
        setIsFormDisabled(false);
        setErrors({});
      })
      .catch((err) => {
        const formatedErros = err.inner.reduce((errorObjectAcc, currentError) => {
          // console.log(currentError);
          const fieldName = currentError.path;
          const errorMessage = currentError.message;
          // Desta maneira aparecerá um erro por vez ja que um nome é unico vai um error ficar
          //  no outro seguindo a ordem do yup ou seja sempre os primeiros erros
          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage,
          };
        }, {});
        // console.log(formatedErros);
        setErrors(formatedErros);
        setIsFormDisabled(true);
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
