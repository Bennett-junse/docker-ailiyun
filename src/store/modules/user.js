import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import watermark from '@/watermark'
const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      // 添加真实的登录验证逻辑
      // 只有特定的用户名和密码才能登录
      if (username === 'admin' && password === '123456') {
        // 模拟获取到的用户信息
        const data = {
          token: 'admin-token'
        }
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      } else {
        reject(new Error('用户名或密码错误'))
      }
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // 模拟获取用户信息
      const data = {
        roles: ['admin'],
        name: 'Admin'
      }
      
      let now = new Date(); // 获取当前时间
      let time_str = now.getFullYear() + "." + (now.getMonth() + 1) + "." + now.getDate(); // 格式化时间为字符串
      watermark.set(data.name + "\n" + time_str)
      
      const { roles, name } = data

      if (!roles || roles.length <= 0) {
        reject('getInfo: roles must be a non-null array!')
      }
      
      commit('SET_ROLES', roles)
      commit('SET_NAME', name)
      resolve(data)
    })
  },


  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        // 即使没有后端接口，我们也应该正常登出
        removeToken()
        resetRouter()
        commit('RESET_STATE')
        resolve()
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}