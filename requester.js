import fetch from 'node-fetch';
import config from './config';
import url from 'url';

const API = `${config.host}/wp-json/wp/v2`;

const request = (uri) => {
  console.log('🌎' + API + uri);
  return fetch(API + uri).then(res => res.json());
};

// Batch requests
export const getPostByIds = (ids) => request('/posts?include=' + ids.join(','));
export const getCategoryByIds = (ids) => request('/categories?include=' + ids.join(','));
export const getTagByIds = (ids) => request('/tags?include=' + ids.join(','));
export const getMediaByIds = (ids) => request('/media?include=' + ids.join(','));

// standalone request
export const getUsers = (id) => request('/users/');
export const getPosts = ({ search, order, orderBy }) => {
  const qs = [];
  if (search) qs.push({ search });
  if (order) qs.push({ order });
  if (orderBy) qs.push({ orderBy });

  return request(`/posts?search=${search}`);
}
