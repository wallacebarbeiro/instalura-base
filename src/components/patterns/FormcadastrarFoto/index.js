import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import FormCadastrarForm, { CadastrarPostBody, CadastrarPostFooter, CadastrarPostHeader } from './styles';
import filterList from './instagramFilters';
import { userService } from '../../../services/user/userService';

function FormContent({ setModalState }) {
  const router = useRouter();

  const [inputValue, setInputValue] = React.useState('');
  const [isValidUrl, setIsvalidUrl] = React.useState(null);
  const [pagination, setPagination] = React.useState({
    activePage: 1,
    buttonDisableStatus: true,
  });

  const [post, setPost] = React.useState({
    photoUrl: '',
    description: 'Um novo post',
    filter: 'none',
  });

  const changeFilter = (event) => {
    const filterName = event.target.value;
    setPost((prevResult) => ({
      ...prevResult,
      description: 'Um novo post',
      filter: filterName,
    }));
    setPagination((prevResult) => ({
      ...prevResult,
      buttonDisableStatus: false,
    }));
    setIsvalidUrl(null);
  };

  const validaUrl = (urlImage) => {
    // eslint-disable-next-line no-useless-escape
    const re = new RegExp('(https?:\/\/.*\.(?:png|jpg|svg|xpto))');
    const validar = re.test(urlImage);
    if (validar) {
      setIsvalidUrl(true);
      setPost((prevResult) => ({
        ...prevResult,
        photoUrl: inputValue,
      }));
      setPagination((prevResult) => ({
        ...prevResult,
        buttonDisableStatus: false,
      }));
      return true;
    }
    setIsvalidUrl(false);
    return false;
  };

  const handlePost = async () => {
    await userService
      .sendNewPost(post)
      .then(() => {
        router.push('/app/profile');
      }).finally(() => {
        setPagination(() => ({
          activePage: 1,
          buttonDisableStatus: true,
        }));
        setInputValue('');
        setModalState(false);
      });
  };

  return (
    <FormCadastrarForm
      id="formCadastrarPost"
      onSubmit={(event) => {
        event.preventDefault();
        setPagination((prevResult) => ({
          ...prevResult,
          buttonDisableStatus: true,
        }));
        handlePost();
      }}
    >

      <Box>
        <CadastrarPostHeader>
          <Button
            type="button"
            onClick={() => setModalState(false)}
          >
            <img src="/images/x.png" alt="Default" />
          </Button>
        </CadastrarPostHeader>
        <CadastrarPostBody
          className="newImageBox"
        >
          { pagination.activePage === 1
            ? (
              <img
                src="/images/no-image.png"
                alt="Default"
                className={`filter-${post.filter}`}
              />
            )
            : (
              <img
                src={post.photoUrl}
                alt="New pic"
                className={`filter-${post.filter} full__size`}
              />
            ) }
        </CadastrarPostBody>

        <CadastrarPostFooter>
          { pagination.activePage === 1 && (
            <Box>
              <Box
                display="flex"
              >
                <Box
                  width="92%"
                >
                  <TextField
                    className="imageUrlField"
                    marginBottom="0px"
                    onChange={({ target }) => setInputValue(target.value)}
                    value={inputValue}
                    name="fotoUrl"
                    placeholder="URL da imagem"
                  />
                  { isValidUrl === false && <Text color="red" display="block" textAlign="center"><small>A url não é válida</small></Text> }

                </Box>

                <Button
                  className="btn__verifyUrl"
                  type="button"
                  id="validUrl"
                  variant="secondary.main"
                  onClick={() => validaUrl(inputValue)}
                >
                  <img src="/images/arrow-right.svg" alt="Enviar imagem" />
                </Button>
              </Box>
              <Text
                tag="p"
                marginBottom="38px"
                textAlign="center"
                fontSize="14px"
                color="#88989E
            "
              >
                Formatos suportados: jpg, png, svg e xpto.
              </Text>
            </Box>
          )}
          { pagination.activePage !== 1 && (
          <Box>
            <ul className="listFilter" onChange={changeFilter}>
              <li key="no-filter">
                <label htmlFor="no-filter">
                  <input id="no-filter" style={{ display: 'none' }} type="radio" value="no-filter" name="filter" />
                  <img
                    src={inputValue}
                    alt="no-filter"
                  />
                  <span>Normal</span>
                </label>
              </li>
              {filterList.map((filtro) => (
                <li key={filtro.name}>
                  <label htmlFor={filtro.name}>
                    <input id={filtro.name} style={{ display: 'none' }} type="radio" value={`${filtro.className}`} name="filter" />
                    <img
                      src={inputValue}
                      alt={filtro.name}
                      className={`filter-${filtro.className}`}
                    />
                    <span>{filtro.name}</span>
                  </label>
                </li>

              ))}
            </ul>

          </Box>
          )}

          { pagination.activePage === 1
              && (
              <button
                className="btn__action"
                type="button"
                id="btnAvancar"
                width="100%"
                display="block"
                variant="primary.main"
                disabled={pagination.buttonDisableStatus}
                onClick={() => setPagination(() => ({
                  activePage: 2,
                  buttonDisableStatus: true,
                }))}
              >
                Avançar
              </button>
              )}

          { pagination.activePage !== 1
            && (
              <button
                type="submit"
                className="btn__action"
                width="100%"
                display="block"
                variant="primary.main"
                disabled={pagination.buttonDisableStatus}
              >
                Post
              </button>
            )}

        </CadastrarPostFooter>

      </Box>

    </FormCadastrarForm>
  );
}

// eslit-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
export default function FormCadastrarFoto({ propsDoModal, setModalState }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid.Col
        display="flex"
        paddingRight="0px"
        paddingLeft="0px"
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px 0 rgba(7, 12, 14, 0.1)"
          display="flex"
          borderRadius="8px"
          flexDirection="column"
          justifyContent="center"
          margin={{
            xs: '0 auto !important',
            md: '0 auto !important',
          }}
          width={{
            xs: '360px',
            lg: '375px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >

          <FormContent setModalState={setModalState} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormContent.propTypes = {
  setModalState: PropTypes.func.isRequired,
};
