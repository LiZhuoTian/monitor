import request from '../../utils/request.js'
import qs from 'qs'; // 根据需求是否导入qs模块
import base from '../base.js'
const login = {
/* 	//租客/成员注册（公共）
	registrationPublic(communityId,idNumber,mobilephone,name,publicPropertyId,type){
		return request.httpRequest(`${base.sq}/registration?communityId=${communityId}&idNumber=${idNumber}&mobilephone=${mobilephone}&name=${name}&publicPropertyId=${publicPropertyId}&type=${type}`, 'POST')
	},
	//获取banner
	getBannerList(){
		return request.httpRequest(`${base.sq}/banner`,'GET')
	}, */
	
	//手机号or身份证+密码登录
	loginByPassword(params){
		return request.httpRequest(`${base.url}/user/loginByPwd`,'POST',params)
	},
	//手机号+验证码登录
	loginByPhone(params){
		return request.httpRequest(`${base.url}/user/loginByPhone`,'POST',params)
	},
	//获取用户所绑定老人
	getOldList(params){
		return request.httpRequest(`${base.url}/user/getBindOldList`,'POST',params)
	},
	//视频上传
	pushVideo(params){
		return request.httpRequest(`${base.url}/app/picture/VideoRecognition`,'GET',params)
	},

}

export default login;