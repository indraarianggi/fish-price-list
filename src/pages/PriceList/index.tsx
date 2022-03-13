import React, { useCallback, useState } from 'react'
import InfiniteScroll from 'react-swr-infinite-scroll'
import debounce from 'lodash.debounce'

import useAllFishPrice from '@/hooks/useFishPriceList'
import { IFishPrice } from '@/types'
import Filter from '@/components/Filter'
import PriceItem from '@/components/PriceItem'
import { filterOptions, LIMIT_FETCH_DATA } from '@/constants'

import './styles.scss'

const PriceList = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(filterOptions[0].value)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((value: string) => {
      setSearch(value)
    }, 1000),
    [],
  )

  const handleFilter = useCallback((value: string) => {
    setFilter(value)
  }, [])

  const swr = useAllFishPrice({ [filter]: search })

  return (
    <div className="price-list-container">
      <Filter
        selectedFilter={filter}
        dropdownFilter={filterOptions}
        onChangeFilter={handleFilter}
        onSearch={handleSearch}
      />
      <div className="price-list">
        <InfiniteScroll
          swr={swr}
          loadingIndicator="Memuat data..."
          isReachingEnd={(swr) =>
            swr.data?.[0]?.length === 0 ||
            swr.data?.[swr.data?.length - 1]?.length < LIMIT_FETCH_DATA
          }>
          {(priceList: Array<IFishPrice>) => {
            return priceList.length > 0 ? (
              priceList.map((item, index) => (
                <PriceItem key={index} item={item} />
              ))
            ) : (
              <p>Tidak ada data</p>
            )
          }}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default PriceList
