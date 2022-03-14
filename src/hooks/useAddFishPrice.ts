import { IFishPriceFormInput } from '@/types'
import { postFishPrice } from '@/services/api'
import { useState } from 'react'

interface ICallbacks {
  onSuccess: () => void
  onError: () => void
}

export default function useAddFishPrice() {
  const [loading, setLoading] = useState(false)

  const addFishPrice = async (
    payload: IFishPriceFormInput,
    callbacks: ICallbacks,
  ) => {
    const { onSuccess, onError } = callbacks

    try {
      setLoading(true)

      await postFishPrice(payload)

      setLoading(false)
      onSuccess()
    } catch (error) {
      setLoading(false)
      onError()
    }
  }

  return { addFishPrice, loading }
}
