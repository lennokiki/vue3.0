const isProd = process.env.NODE_ENV === "production";

// 开发环境地址
let baseUrl = "";
let mockUrl = "/mock";
let apiUrl = "/api";

// 生产环境地址
if (isProd) {
  baseUrl = "http://www.baidu.com/api";
  mockUrl = "";
  apiUrl = "";
}

export { baseUrl, mockUrl, apiUrl };
