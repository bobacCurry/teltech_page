import axios from '@/libs/api.request'

export const getUserClient = () => {
  	return axios.request({
    	url: 'service/client/get_user_client',
    	method: 'get'
  	})
}

export const sendCode = (phone,type) => {
	return axios.request({
	    url: `service/auth/send_code/${phone}/${type}`,
	    method: 'post'
	})
}

export const confirmCode = (phone,code) => {
	return axios.request({
	    url: `service/auth/confirm_code/${phone}/${code}`,
	    method: 'post'
	})
}