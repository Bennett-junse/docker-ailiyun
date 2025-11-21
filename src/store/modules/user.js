import { logout } from '@/api/user'
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
      // In a real application, this would call an API to authenticate the user
      // For demo purposes, only admin/123456 is accepted
      if (username === 'admin' && password === '123456') {
        // Simulate getting user information
        const data = {
          token: 'admin-token'
        }
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      } else {
        reject(new Error('Invalid username or password'))
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

      const now = new Date() // Get current time
      const time_str = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate() // Format time as string
      watermark.set(data.name + '\n' + time_str)

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
        removeToken() // Must remove token first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(() => {
        // Even without backend interface, we should logout normally
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
      removeToken() // Must remove token first
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
