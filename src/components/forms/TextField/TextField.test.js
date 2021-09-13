/* eslint-disable no-console */
import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders compoment', () => {
    render(
      <TextField
        placeholder="Nome"
        value=""
        onChange={() => {}}
        name="nome"
      />
      ,
    );

    // screen.debug();

    const textField = screen.getByPlaceholderText(/nome/i);
    // eslint-disable-next-line no-console
    console.log(TextField);

    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />
          ,
        );
        const textNome = screen.getByPlaceholderText(/nome/i);
        user.type(textNome, 'devsoutinho@gmail.com');
        // screen.debug();

        console.log(onChangeMock.mock);
        expect(onChangeMock).toHaveBeenCalledTimes(21);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="devsoutinhogmail.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />
        ,
      );
      // elemento tenha spab de texto
      // muda css
      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('devsoutinhogmail.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
