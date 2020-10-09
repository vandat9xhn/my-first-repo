let token = "current token"
let is_expired = true;
let i = 0; j = 0;


const refreshToken = () => {
    if(is_expired){
        console.log('a')
        token = token +  'Token has been change';
    }
}


const getAPI = (url) => {
    for(i = 0; i <= 100000000; i++){
        j = i ** 2 + j;
    }
  console.log(token, ', url:', url)
  
  }


main = () => {
 
  getAPI('/abc/');
  console.log(1)
  getAPI('/def/');
  console.log(2)
  getAPI('/ghk/');
  console.log(3)
  
};

refreshToken();
main();
