import propToStyle from './index';

describe('propToStyle()', () => {
  describe('when receives a simple argument', () => {
    test(' and it is a string', () => {
    // Vamos inserir o que teremos que testar dentro do compoment antes de
    // passar o objeto com o mesmo valor
      const propToStyleResult = propToStyle('textAlign');

      // <Text textAlig="center" />
      const componentProps = { textAlign: 'center' }; // String
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });
    test(' and it is a number', () => {
    // Vamos inserir o que teremos que testar dentro do compoment antes de
    // passar o objeto com o mesmo valor
      const propToStyleResult = propToStyle('flex');

      // <Text flex=1 />
      const componentProps = { flex: 1 }; // Number
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when receives an orgument with  breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
    // Vamos inserir o que teremos que testar dentro do compoment antes de
    // passar o objeto com o mesmo valor
      const propToStyleResult = propToStyle('textAlign');

      // <Text textAlig="center" />
      const componentProps = { textAlign: { xs: 'center' } }; // String
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();

      expect(true).toBe(true);
    });

    test('renders two or more breakpoint resolution', () => {
      // Vamos inserir o que teremos que testar dentro do compoment antes de
      // passar o objeto com o mesmo valor
      const propToStyleResult = propToStyle('textAlign');

      // <Text textAlig="center" />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } }; // String
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();

      expect(true).toBe(true);
    });
  });
});
