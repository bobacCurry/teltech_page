import axios from '@/libs/api.request'

export const addButler = (data) => {
  	return axios.request({
    	url: `/bots/butler/add`,
    	method: 'post',
    	data
  	})
}

export const delButler = (_id) => {
  	return axios.request({
    	url: `/bots/butler/del`,
    	method: 'post',
    	data:{
    		_id
    	}
  	})
}

export const getButler = (page) => {
  	return axios.request({
    	url: `/bots/butler/get`,
    	method: 'post',
    	data: {
    		page
    	}
  	})
}