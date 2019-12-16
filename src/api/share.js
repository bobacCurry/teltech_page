import axios from '@/libs/api.request'

export const getUserClient = () => {
  return axios.request({
    url: 'service/client/get_user_client',
    method: 'get'
  })
}
