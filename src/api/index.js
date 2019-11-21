import ajax from '@/utils/service';

//sug?code=utf-8&q=鞋
export const getData = (data) => ajax.get('/api/weather', data)
