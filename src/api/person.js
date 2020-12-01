import axios from '@/libs/api.request'

export const addPerson = (person) => {
  	return axios.request({
    	url: `/service/person/add_person`,
    	method: 'post',
    	data: person
  	})
}

export const getPerson = () => {
  	return axios.request({
    	url: `/service/person/get_person`,
    	method: 'post'
  	})
}

export const delPerson = (_id) => {
  	return axios.request({
    	url: `/service/person/del_person/${_id}`,
    	method: 'post'
  	})
}

export const addPersonPhone = (_id,phone) => {
  	return axios.request({
    	url: `/service/person/add_person_phone`,
    	method: 'post',
    	data: { _id, phone }
  	})
}

export const delPersonPhone = (_id,phone) => {
  	return axios.request({
    	url: `/service/person/del_person_phone`,
    	method: 'post',
    	data: { _id, phone }
  	})
}

export const sendMessage = (_id,phone) => {
  	return axios.request({
    	url: `/service/person/send_message/${_id}/${phone}`,
    	method: 'post'
  	})
}