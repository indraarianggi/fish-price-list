import useSWRInfinite from 'swr/infinite'

import { getAllFishPrice } from '@/services/api'
import { useState } from 'react'

export default function useAllFishPrice() {
  const [isReachingEnd, setIsReachingEnd] = useState(false)
  const limit = 6

  const swr = useSWRInfinite(
    (pageIndex, previousData) => {
      if (previousData && previousData.length < limit) {
        // reached the end
        setIsReachingEnd(true)
        return null
      }

      const offset = pageIndex * limit
      return ['list', limit, offset]
    },
    (_, limit, offset) => getAllFishPrice({ limit: limit, offset }),
    {
      shouldRetryOnError: false,
    },
  )

  return { swr, isReachingEnd }
}
