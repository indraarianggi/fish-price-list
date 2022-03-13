import React from 'react'

import { IFilterOption } from '@/types'

import './styles.scss'

interface IFilterProps {
  selectedFilter: string
  dropdownFilter: Array<IFilterOption>
  onChangeFilter: (value: string) => void
  searchPlaceHolder?: string
  onSearch: (value: string) => void
}

const Filter: React.FC<IFilterProps> = ({
  selectedFilter,
  dropdownFilter,
  onChangeFilter,
  searchPlaceHolder,
  onSearch,
}) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(e.target.value)
  }

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder={searchPlaceHolder ?? 'Cari...'}
        onChange={handleChangeInput}
      />
      <select value={selectedFilter} onChange={handleChangeSelect}>
        {dropdownFilter.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
