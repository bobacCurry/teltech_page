import axios from '@/libs/api.request'

export const addChat = (_id,auth) => {
  	return axios.request({
    	url: `/admin/chat/add_chat/${_id}/${auth}`,
    	method: 'post'
  	})
}

export const delChat = (_id) => {
  	return axios.request({
    	url: `/admin/chat/del_chat/${_id}`,
    	method: 'post'
  	})
}

export const getChat = (type,status,page,limit) => {
  	return axios.request({
    	url: `/admin/chat/get_chat/${page}/${limit}`,
    	params: {
	      type,
	      status
	    },
    	method: 'get'
  	})
}

export const getUsers = (page) => {
  return axios.request({
    url: `/admin/user/get_users/${page}`,
    method: 'get'
  })
}

export const resetPwd = (_id) => {
    return axios.request({
      url: `/admin/user/reset_pwd/${_id}`,
      method: 'post'
    })
}

export const setVip = (_id) => {
    return axios.request({
      url: `/admin/user/set_vip/${_id}`,
      method: 'post'
    })
}