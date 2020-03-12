import axios from '@/libs/api.request'

export const createGroup = ({title,description,phone}) => {
  	return axios.request({
    	url: `/service/group/create_group`,
    	method: 'post',
    	data: {title,description,phone}
  	})
}
