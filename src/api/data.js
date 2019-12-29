import axios from '@/libs/api.request'

export const uploadImg = data => {
  return axios.request({
    url: 'data/upload_image',
    method: 'post',
    data: data
  })
}

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'data/save_error_logger',
    data: info,
    method: 'post'
  })
}

// export const uploadImg = formData => {
//   return axios.request({
//     url: 'image/upload',
//     data: formData
//   })
// }

export const getOrgData = () => {
  return axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}

export const getTreeSelectData = () => {
  return axios.request({
    url: 'get_tree_select_data',
    method: 'get'
  })
}
