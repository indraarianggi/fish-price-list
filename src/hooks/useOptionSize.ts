import useSWR from 'swr'
import { getOptionSize } from '@/services/api'
import { ENDPOINTS } from '@/services/endpoints'

export default function useOptionSize() {
  const swr = useSWR(ENDPOINTS.optionSize, getOptionSize, {
    revalidateOnFocus: false,
  })

  return {
    ...swr,
    isLoading: !swr.error && !swr.data,
  }
}
