import axios from '@/libs/api.request'

export const NewChatUser = (phone,target) => {
  return axios.request({
    url: `group/add_member/new_chat_user/${phone}/${target}`,
    method: 'post'
  })
}

export const GetChatUser = () => {
  return axios.request({
    url: `group/add_member/get_chat_user`,
    method: 'get'
  })
}

export const AddChatPhone = (phone,_id) => {
  return axios.request({
    url: `group/add_member/add_chat_phone/${phone}/${_id}`,
    method: 'post'
  })
}

export const AddChatUser = (chatid,_id) => {
  return axios.request({
    url: `group/add_member/add_chat_user/${chatid}/${_id}`,
    method: 'post'
  })
}

export const AddRun = (_id,status) => {
  return axios.request({
    url: `group/add_member/add_run/${_id}/${status}`,
    method: 'post'
  })
}

export const DelChatUser = (_id) => {
  return axios.request({
    url: `group/add_member/del_chat_user/${_id}`,
    method: 'post'
  })
}

export const DelChatPhone = (_id,phone) => {
  return axios.request({
    url: `group/add_member/del_chat_phone/${_id}/${phone}`,
    method: 'post'
  })
}