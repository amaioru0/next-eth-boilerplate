// login.ts

import { isLoggedIn, setAuthTokens, clearAuthTokens, getAccessToken, getRefreshToken } from 'axios-jwt'
import { axiosInstance } from './api'


export const getNonce = async (publicAddress: string) => {
    const nonce: Array<any> = []
    await axiosInstance.get(`/users/nonce/${publicAddress}`).then((res) => {
        nonce.push(res.data.nonce)
    }).catch(async (err) => {
        await axiosInstance.post(`/auth/registerEth`, { publicAddress: publicAddress }).then((res) => {
            nonce.push(res.data.nonce)
        })
    })
    return { nonce: nonce[0] };
}

export const login = async (publicAddress: string, signature:string) => {
    const params = {
        publicAddress: publicAddress,
        signature: signature
    }

  const response = await axiosInstance.post('/auth/loginEth', params)

  // save tokens to storage
  setAuthTokens({
    accessToken: response.data.tokens.access.token,
    refreshToken: response.data.tokens.refresh.token
  })
  const token = await getAccessToken();
  console.log(token)
  const refreshToken = await getRefreshToken();
  console.log("refresh")
  console.log(refreshToken)
  const user = response.data.user

  return { user: user };
}

// 5. Clear the auth tokens from localstorage
export const logout = async () => {
    await clearAuthTokens()
    console.log("loged out")
}

export const getUser = async () => {
    const response = await axiosInstance.get("/users/me")
    const user = response.data;
    return({ user: user });
}