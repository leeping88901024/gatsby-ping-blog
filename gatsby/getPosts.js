const axios = require('axios');
const getMockPosts = require('./getMockPosts');

// 接口地址
// process.env.API_BASE_URL = '192.168.1.206';


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

process.env.API_BASE_URL = 'http://www.macdull.top';
process.env.API_SPACE_ID = 'headers';
const { API_BASE_URL, API_SPACE_ID, API_TOKEN } = process.env;
// console.log(`the API_BASE_URL is ${API_BASE_URL}, the API_SPACE_ID is ${API_SPACE_ID}, and the API_TOKEN is ${API_TOKEN}.`)

// Get All Post from Contentful
// content-type: 'header'
const getPosts = async (contentType) => {
  console.log(contentType)
  // 访问我个人的服务器
  const POST_URL = `${API_BASE_URL}/api/${API_SPACE_ID}?contentType=${contentType}`;
  console.log(POST_URL);
  const res = await axios.get(POST_URL)
    .catch((err) => {
      console.log(err);
    });
  console.log('#############################################################')
  return res;
};

if (API_SPACE_ID) {
  console.log('has API_SPACE_ID and API_TOKEN');
  module.exports = getPosts;
} else {
  console.log('use mock posts');
  module.exports = getMockPosts;
}
