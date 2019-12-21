import ajax from './ajax'

//  埋点地址
let url = 'https://ac.qq.com/Comic/ComicIn';
const sdc = (data) => ajax(url, {data}, 'POST');

//获取首页数据
const  reqHome =()=>{
    sdc({a: 'aa'});
  
  return ajax('/home')
}
//第二页数据
const reqTextile=() =>{
    sdc({a: 'bb'});
  
  return  ajax('/detail')
}
//第三页数据
 const reqKinds = () =>{
    sdc({a: 'cc'});
   
  return   ajax('/nav')
}





  const reqData = () => ajax('/data')
//获取banner数组
  const reqBanner = () => ajax('/banner')






// 获取图片验证码
  const reqCaptcha = () => {
    sdc({a: 'bb'});
    return ajax('/api/captcha')
  }
// 账号密码登录
  const accountLogin = ({name, pwd, captcha}) => {
    sdc({name, pwd, captcha});
    return ajax('/api/login_pwd/',{name, pwd, captcha},"POST")
  }
// 获取短信验证码
 const mobileCode = (phone) => {
    sdc({phone});
  return ajax('/api/sendcode', {phone})
}
// 手机号验证码登录
const phoneLogin = ({phone, code}) => {
  sdc({phone, code});
  return ajax('/api/login_sms/', {phone, code},"POST");
}


export {
  reqHome,
  reqTextile,
  reqKinds,
}
