import axios from '@/libs/api.request'

export const addPush = (info) => {
  	return axios.request({
    	url: `/service/push/add`,
    	data: info,
    	method: 'post'
  	})
}

export const updatePush = (_id,data) => {
  	return axios.request({
    	url: `/service/push/update/${_id}`,
    	method: 'post',
    	data
  	})
}

export const getPush = (page) => {
  	return axios.request({
    	url: `/service/push/get?page=${page}`,
    	method: 'get'
  	})
}

export const getOnePush = (_id) => {
  	return axios.request({
    	url: `/service/push/get_one/${_id}`,
    	method: 'get'
  	})
}

export const changeStatus = (_id) => {
  	return axios.request({
    	url: `/service/push/change_status/${_id}`,
    	method: 'post'
  	})
}

export const delPush = (_id) => {
    return axios.request({
      url: `/service/push/del_push/${_id}`,
      method: 'post'
    })
}

export const addChat = (data) => {
    return axios.request({
      url: `/service/vip/add_chat`,
      method: 'post',
      data
    })
}

export const getAddChat = (page) => {
    return axios.request({
      url: `/service/vip/get_add_chat/${page}`,
      method: 'get'
    })
}