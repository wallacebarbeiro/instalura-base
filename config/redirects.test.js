import redirects from './redirects';

// eslint-disable-next-line no-console
console.log(redirects);
// Test Driven Development
describe('config/redirects', () => {
  test('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot(); // Fotografia
  });
});
