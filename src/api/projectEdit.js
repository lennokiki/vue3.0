import {ajax} from '@/utils';

// 获取table列表
export const getCategoryBList = () => ajax.get('/mock/categoryB/list');

// 查询
export const getCategoryBSearch = (data) => ajax.get('/mock/categoryB/search', data);

// 上传
export const postCategoryBUpload = '/mock/categoryB/upload';
