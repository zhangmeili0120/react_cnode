import axios from "axios";

// attention: action的type必须是唯一的。在不同方法里，也需要是唯一的

const getHomeData = function(dispatch, type, page) {
  dispatch({
    type: 'getData_start'
  })
  // 获取数据
  axios.get(`https://cnodejs.org/api/v1/topics?tab=${type}&limit=20&page=${page}`)
    .then(res => {
      dispatch({
        type: 'getData_success',
        data: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'getData_error'
      })
    })
}

const getHomeDetailData = function(dispatch, id) {
  dispatch({
    type: 'getTopicData_start'
  })
  axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
    .then(res => {
      dispatch({
        type: 'getTopicData_success',
        data: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'getTopicData_error'
      })
    })
}


const getUserDetailData = function(dispatch, id) {
  dispatch({
    type: 'getUserData_start'
  })
  axios.get(`https://cnodejs.org/api/v1/user/${id}`)
    .then(res => {
      dispatch({
        type: 'getUserData_success',
        data: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'getUserData_error'
      })
    })
}
export {getHomeData, getHomeDetailData, getUserDetailData}