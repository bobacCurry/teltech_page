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