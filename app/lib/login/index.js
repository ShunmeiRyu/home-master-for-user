import axiosInstance from "../axios"

export const register = async (data) => {
  const { data: res } = await axiosInstance({
    url: "/user",
    method: "post",
    data
  })
  return res
}

export const login = async (data) => {
  const { data: res } = await axiosInstance({
    url: "/user/token",
    method: "post",
    data
  })
  return res
}

export const verifyEmail = async (data) => {
  const { data: res } = await axiosInstance({
    url: "/user/status",
    method: "put",
    data
  })
  return res
}

export const resendCode = async (data) => {
  const { data: res } = await axiosInstance({
    url: "/user/code",
    method: "get",
    params: data
  })
  return res
}

export const changePassword = async (data) => {
  const { data: res } = await axiosInstance({
    url: "/user/password",
    method: "put",
    data
  })
  return res
}
