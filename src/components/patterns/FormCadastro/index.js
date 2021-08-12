import React from 'react';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionsStatus, setSubmissionsStatus] = React.useState(formStates.DEFAULT);

  const [userInfor, setUserInfo] = React.useState({
    usuario: 'omariosouto',
    nome: 'devsoutinho@gmail.com',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({ ...userInfor, [fieldName]: event.target.value });
  }

  const isFormInvalid = userInfor.usuario.length === 0 || userInfor.nome.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);

        // eslint-disable-next-line no-console
        // console.log('O formulário ta pronto, vamos cadastrar de fato o usuario');

        // DATA TRANSFER OBJECT = DTO
        const userDTO = {
          username: userInfor.usuario,
          name: userInfor.nome,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora:(');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionsStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionsStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.log(error);
          });
      }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>
      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfor.nome}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfor.usuario}
          onChange={handleChange}
        />
      </div>
      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth

      >
        Cadastrar
      </Button>
      {isFormSubmited && submissionsStatus === formStates.DONE && (
        <Box>
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: false }}
          />
        </Box>
      )}

      {isFormSubmited && submissionsStatus === formStates.ERROR && (
      <Box
        display="flex"
        justifyContent="center"
      >
        <Lottie
          width="150px"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: errorAnimation, loop: false, autoplay: false }}
        />
      </Box>
      )}

    </form>
  );
}

// eslit-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
