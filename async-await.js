let token = "current token"
let i = 0; j = 0;
let is_expired = true;
let x = null;


const refreshToken = () => {
  return token + " has been change"
}


const Token_promise = () => {
  console.log('Wait for access token')
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(refreshToken());
    }, 2000);
  });
};


const getAPI = async (url) => {
  if(is_expired){
    console.log('Token has been expired!')
    x = x
    ? x
    : Token_promise();
    const newToken = await x;
    token = newToken;
    x = null;
  }
  console.log(token, ', url:', url);
  return token + " " + url
}


const main = async () => {
 
  getAPI('/abc/');
  
  getAPI('/def/');
  
  let data2 = getAPI('/ghk/');
  // data2 dang o trang thai pending vi cac ham tren chua thuc hien xong
  // Vi day la async( bat dong bo) nen vay khi console.log no ra se la Promise <pending>
  console.log(data2)
};

main();
