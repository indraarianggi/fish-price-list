import { IFilterOption } from '@/types'

export const LIMIT_FETCH_DATA = 6

export const filterOptions: Array<IFilterOption> = [
  {
    text: 'Komoditas',
    value: 'komoditas',
  },
  {
    text: 'Kota',
    value: 'area_kota',
  },
  {
    text: 'Provinsi',
    value: 'area_provinsi',
  },
  {
    text: 'Ukuran',
    value: 'size',
  },
  {
    text: 'Harga',
    value: 'price',
  },
]
