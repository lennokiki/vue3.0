import {ajax} from '@/utils';
import { mockUrl, apiUrl } from '@/config';

// 获取table列表
export const getCategoryBList = () => ajax.get(`${mockUrl}/categoryB/list`);

// 查询
export const getCategoryBSearch = (data) => ajax.get(`${mockUrl}/categoryB/search`, data);

// 上传
export const postCategoryBUpload = `${mockUrl}/categoryB/upload`;
