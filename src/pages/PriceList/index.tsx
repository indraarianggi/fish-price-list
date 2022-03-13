import React from 'react'
import InfiniteScroll from 'react-swr-infinite-scroll'

import useAllFishPrice from '@/hooks/useFishPriceList'
import { IFishPrice } from '@/types'
import PriceItem from '@/components/PriceItem'

import './styles.scss'

const PriceList = () => {
  const { swr, isReachingEnd } = useAllFishPrice()

  return (
    <div className="price-list">
      <InfiniteScroll
        swr={swr}
        loadingIndicator="Memuat data..."
        isReachingEnd={isReachingEnd}>
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
  )
}

export default PriceList
