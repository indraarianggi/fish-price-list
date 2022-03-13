import React from 'react'
import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid'

import { IFishPrice } from '@/types'
import { formatCurrency } from '@/utils/formatCurrency'
import { capitalize } from '@/utils/formatString'
import './styles.scss'

interface IPriceItemProps {
  item: IFishPrice
}

const PriceItem: React.FC<IPriceItemProps> = ({ item }) => {
  return (
    <article className="price-item">
      <header>
        <span className="commodity">{item.komoditas ?? '-'}</span>
        <span className="price">
          {item.price ? formatCurrency(item.price) : '-'}
        </span>
      </header>
      <span className="size">
        <b>Ukuran:</b> {item.size ?? '0'}
      </span>
      <footer>
        <div className="location">
          <LocationMarkerIcon className="icon" />
          <span>
            {item.area_kota && item.area_provinsi
              ? `${capitalize(item.area_kota)}, ${capitalize(
                  item.area_provinsi,
                )}`
              : '-'}
          </span>
        </div>
        <div className="date">
          <CalendarIcon className="icon" />
          <span>{item.tgl_parsed ?? '-'}</span>
        </div>
      </footer>
    </article>
  )
}

export default PriceItem
