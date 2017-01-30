import fetch from 'node-fetch';
import config from './config';

const API = `${config.host}/wp-json/wp/v2`;

const request = (uri) => {
  console.log(API + uri);
  return fetch(API + uri).then(res => res.json());
};

export const getCategoryById = (id) => request('/categories/' + id);
export const getPostById = (id) => request('/posts/' + id);
export const getTagById = (id) => request('/tags/' + id);
export const getMetaById = (id) => request('/metas/' + id);
export const getUsers = (id) => request('/users/');
export const getUserById = (id) => request('/users/' + id);
export const getMediaById = (id) => request('/media/' + id);

export const getPosts = ({ search }) => {
  if (!search) return request(`/posts`);
  return request(`/posts?search=${search}`);
}
