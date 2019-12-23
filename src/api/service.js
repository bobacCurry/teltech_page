import axios from '@/libs/api.request'

export const addPush = (info) => {
  	return axios.request({
    	url: `/service/push/add`,
    	data: info,
    	method: 'post'
  	})
}

export const getPush = (info) => {
  	return axios.request({
    	url: `/service/push/get`,
    	method: 'get'
  	})
}
