import DataLoader from 'dataloader';
import { getPostByIds, getCategoryByIds, getTagByIds, getMediaByIds } from './requester';

const batchGetPosts = (ids) => {
  return getPostByIds(ids).then(posts => posts.map((post) => Promise.resolve(post)));
}

const batchGetCategories = (ids) => {
  return getCategoryByIds(ids).then(categories => categories.map((category) => Promise.resolve(category)));
}

const batchGetTags = (ids) => {
  return getTagByIds(ids).then(tags => tags.map((tag) => Promise.resolve(tag)));
}

const batchGetMedias = (ids) => {
  return getMediaByIds(ids).then(medias => medias.map((media) => Promise.resolve(media)));
}


export const postDataLoader = new DataLoader(keys => batchGetPosts(keys));
export const categoryDataLoader = new DataLoader(keys => batchGetCategories(keys));
export const tagsDataLoader = new DataLoader(keys => batchGetTags(keys));
export const mediaDataLoader = new DataLoader(keys => batchGetMedias(keys));
