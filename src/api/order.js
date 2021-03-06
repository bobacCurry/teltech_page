import axios from '@/libs/api.request'

export const addGroupOrder = (order) => {
  	return axios.request({
    	url: `/service/order/add_order`,
    	method: 'post',
    	data:order
  	})
}

export const getUserOrder = (page,status) => {
	return axios.request({
    	url: `/service/order/get_order/${page}/${status}`,
    	method: 'get'
  	})
}

export const getOrder = (params) => {
	return axios.request({
    	url: `/admin/order/get_order`,
    	method: 'get',
    	params
  	})
}

export const startOrder = (_id) => {
	return axios.request({
    	url: `/admin/order/start_order/${_id}`,
    	method: 'post'
  	})
}

export const delOrder = (_id) => {
  return axios.request({
      url: `/admin/order/del_order/${_id}`,
      method: 'post'
    })
}