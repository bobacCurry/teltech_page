import axios from '@/libs/api.request'

export const getNotUsed = (_id,auth) => {
  	return axios.request({
    	url: `/service/client/get_notused_client`,
    	method: 'get'
  	})
}

export const delUserClient = (phone) => {
  	return axios.request({
    	url: `/service/client/del_user_client/${phone}`,
    	method: 'post'
  	})
}

export const restore = (phone) => {
  	return axios.request({
    	url: `/service/client/restore/${phone}`,
    	method: 'post'
  	})
}

export const getAddChat = (page) => {
  	return axios.request({
    	url: `/service/client/get_add_chat/${page}`,
    	method: 'get'
  	})
}


export const getlClient = (phone) => {
    return axios.request({
      url: `/service/client/get_client/${phone}`,
      method: 'get'
    })
}
