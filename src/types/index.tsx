type WithNull<T> = {
  [P in keyof T]: T[P] | null
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
