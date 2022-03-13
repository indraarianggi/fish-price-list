import useSWR from 'swr'
import { getOptionArea } from '@/services/api'
import { ENDPOINTS } from '@/services/endpoints'

export default function useOptionArea() {
  const swr = useSWR(ENDPOINTS.optionArea, getOptionArea, {
    revalidateOnFocus: false,
  })

  return {
    ...swr,
    isLoading: !swr.error && !swr.data,
  }
}
