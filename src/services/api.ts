import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

import {
  IAddFishPriceResponse,
  IFishPrice,
  IFishPriceFormInput,
  IGetAllFishParams,
  IOptionArea,
  IOptionSize,
} from '@/types'
import { ENDPOINTS } from './endpoints'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const ApiClient = async <T>(options: AxiosRequestConfig) => {
  return axiosInstance(options)
    .then((response: AxiosResponse<T>) => {
      return response.data
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error.response || error.message)
    })
}

export const getAllFishPrice = async (params: IGetAllFishParams) => {
  return await ApiClient<Array<IFishPrice>>({
    method: 'GET',
    url: ENDPOINTS.allFishPrice,
    params,
  })
}

export const getOptionArea = async () => {
  return await ApiClient<Array<IOptionArea>>({
    method: 'GET',
    url: ENDPOINTS.optionArea,
  })
}

export const getOptionSize = async () => {
  return await ApiClient<Array<IOptionSize>>({
    method: 'GET',
    url: ENDPOINTS.optionSize,
  })
}

export const postFishPrice = async (payload: IFishPriceFormInput) => {
  return await ApiClient<IAddFishPriceResponse>({
    method: 'POST',
    url: ENDPOINTS.addFishPrice,
    data: [payload],
  })
}
