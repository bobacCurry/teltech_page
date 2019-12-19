import axios from '@/libs/api.request'

export const addChat = () => {
  	return axios.request({
    	url: '/admin/chat/add_chat',
    	method: 'post'
  	})
}

export const delChat = () => {
  	return axios.request({
    	url: '/admin/chat/del_chat',
    	method: 'post'
  	})
}

export const getChat = (status,page,limit) => {
  	return axios.request({
    	url: `/admin/chat/get_chat/${status}/${page}/${limit}`,
    	method: 'get'
  	})
}