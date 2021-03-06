import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { loginService } from '../../../services/login/loginService';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuário" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('"Senha é obrigatória"')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

// console.log(
//   'Login schema',
//   loginSchema.validate(
//     { usuario: 'omariosouto', senha: '' },
//     { abortEarly: false },
//   )
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err.inner);
//     }),
// );

export default function LoginForm({ onSubmit }) {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      loginService.login({
        username: values.usuario, // 'omariosouto'
        password: values.senha, // 'senhaegura'
      }).then(() => {
        router.push('/app/profile');
      })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(
        values,
        { abortEarly: false },
      );
    },
  });
  return (
    <form id="formCadastro" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
      <pre>
        {/* {JSON.stringify(form.erros, null, 4)} */}
        {/* {JSON.stringify(form.touched, null, 4)} */}
      </pre>
    </form>
  );
}

LoginForm.defaultProps = {
  onSubmit: undefined,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
