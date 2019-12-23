import axios from '@/libs/api.request'

export const getNotUsed = (_id,auth) => {
  	return axios.request({
    	url: `/service/client/get_notused_client`,
    	method: 'get'
  	})
}