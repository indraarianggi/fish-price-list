import React from 'react'
import Skeleton from 'react-loading-skeleton'

import './styles.scss'

const PriceItemSkeleton = () => {
  return (
    <article className="price-item">
      <Skeleton height={20} count={3} style={{ margin: '0.5rem 0' }} />
    </article>
  )
}

export default PriceItemSkeleton
