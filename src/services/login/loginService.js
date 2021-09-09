/* eslint-disable import/prefer-default-export */
import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}
const BASE_URL = isStagingEnv
// Back End de dev
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
// Back End de prod, mas usamos iguais pq essa não está funcionando.
  : 'https://instalura-api-git-master-omariosouto.vercel.app';

export const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username, // 'omariosouto'
        password, // 'senhaegura'
      },
    })
      .then((respostaConvertida) => {
        const { token } = respostaConvertida.data;
        const DAY_IN_SECONDS = 86400;
        // Salvar o token
        setCookie(null, 'APP_TOKEN', token, {
          path: '/', // definir para todas as pg do site
          maxAge: DAY_IN_SECONDS * 7,
        });

        // Retornar só o token
        return {
          token,
        };
      });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};
