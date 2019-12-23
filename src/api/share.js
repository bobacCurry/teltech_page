import axios from '@/libs/api.request'

export const getUserClient = () => {
  	return axios.request({
    	url: 'service/client/get_user_client',
    	method: 'get'
  	})
}

export const sendCode = (phone) => {
	return axios.request({
	    url: `service/auth/send_code/${phone}`,
	    method: 'post'
	})
}

export const confirmCode = (phone,code) => {
	return axios.request({
	    url: `service/auth/confirm_code/${phone}/${code}`,
	    method: 'post'
	})
}


export const addChat = (chatid,chatType,auth) => {
  	return axios.request({
    	url: `service/chat/add_chat/${chatid}/${chatType}/${auth}`,
    	method: 'post'
  	})
}

export const getUserChat = (page,limit) => {
  	return axios.request({
    	url: `service/chat/get_user_chat/${page}/${limit}`,
    	method: 'get'
  	})
}