import api from './api';

export const getData = async (
  language: string,
  page: number,
  per_page: number,
) => {
  const response = await api.get(`${language}/${page}/${per_page}`);
  return response.data.items;
};
