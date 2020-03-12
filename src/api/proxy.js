import axios from '@/libs/api.request'

export const addProxy = (data) => {
  	return axios.request({
    	url: `/admin/proxy/add_proxy`,
    	method: 'post',
    	data
  	})
}

export const getProxy = () => {
	return axios.request({
    	url: `/admin/proxy/get_proxy`,
    	method: 'get'
  	})
}

export const delProxy = (_id) => {
  	return axios.request({
    	url: `/admin/proxy/del_proxy/${_id}`,
    	method: 'post'
  	})
}

export const changeStatus = (_id,status) => {
  	return axios.request({
    	url: `/admin/proxy/change_status/${_id}/${status}`,
    	method: 'post'
  	})
}