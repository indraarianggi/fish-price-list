type WithNull<T> = {
  [P in keyof T]: T[P] | null
}

export interface IFilterOption {
  text: string
  value: string
}

export interface IOptionArea {
  province: string
  city: string
}

export interface IOptionSize {
  size: string
}

export interface IGetAllFishParams {
  limit?: number
  offset?: number
  search?: {
    uuid?: string
    komoditas?: string
    area_provinsi?: string
    area_kota?: string
    size?: string
    price?: string
    tgl_parsed?: string
  }
}

export type IFishPrice = WithNull<{
  uuid: string
  komoditas: string
  area_provinsi: string
  area_kota: string
  size: string
  price: string
  tgl_parsed: string
  timestamp: string
}>

export interface IFishPriceFormInput {
  uuid: string
  komoditas: string
  area_provinsi: string
  area_kota: string
  size: string
  price: string
  tgl_parsed: string
}

export interface IAddFishPriceResponse {
  updatedRange: string
}
