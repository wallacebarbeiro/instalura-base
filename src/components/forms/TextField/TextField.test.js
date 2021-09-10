import React from 'react';
import { render, screen } from '../../../infra/tests/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders compoment', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Mario"
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
});
