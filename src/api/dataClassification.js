import { ajax } from '@/utils';
import { mockUrl, apiUrl } from '@/config';

// a1
export const getA1List = (data) => ajax.get(`${mockUrl}/dataClassification/a1/list`)
