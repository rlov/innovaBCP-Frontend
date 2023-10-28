import { apiClient } from './config';

export const getCategories = async () => {
  const { data } = await apiClient.get('common/info/categories/all');
  return data;
};
