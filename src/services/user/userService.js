/* eslint-disable import/prefer-default-export */

import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
// Back End de dev
  ? 'https://instalura-api.vercel.app'
// Back End de prod, mas usamos iguais pq essa não está funcionando.
  : 'https://instalura-api.vercel.app';

export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          totalLikes: 100,
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
  async sendNewPost(data) {
    const url = `${BASE_URL}/api/posts`;
    try {
      const token = await authService().getToken();
      const response = await HttpClient(url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (response.data) {
        return response.data;
      }
      return undefined;
    } catch (err) {
      return undefined;
    }
  },
  async sendLike(id) {
    const url = `${BASE_URL}/api/posts/${id}/like`;
    try {
      const token = await authService().getToken();
      const response = await HttpClient(url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: {},
      });
      if (response.data) {
        return response.data;
      }
      return undefined;
    } catch (err) {
      return undefined;
    }
  },
};
