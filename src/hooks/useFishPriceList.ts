import useSWRInfinite from 'swr/infinite'

import { LIMIT_FETCH_DATA } from '@/constants'
import { getAllFishPrice } from '@/services/api'

interface ISearch {
  [key: string]: string
}

export default function useAllFishPrice(searchObj: ISearch) {
  const limit = LIMIT_FETCH_DATA

  const swr = useSWRInfinite(
    (pageIndex, previousData) => {
      if (previousData && previousData.length < limit) return null // reached the end

      let search = {}
      for (const key in searchObj) {
        if (searchObj[key]) {
          search = { ...search, [key]: searchObj[key] }
        }
      }

      const offset = pageIndex * limit
      return ['list', limit, offset, search]
    },
    (_, limit, offset, search) =>
      getAllFishPrice({ limit: limit, offset, search }),
    {
      shouldRetryOnError: false,
    },
  )

  return swr
}
