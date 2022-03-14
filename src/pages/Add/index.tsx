import React, { useCallback, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import JsonToForm from 'json-reactform'
import Skeleton from 'react-loading-skeleton'
import { v4 as uuid } from 'uuid'

import useOptionArea from '@/hooks/useOptionArea'
import useOptionSize from '@/hooks/useOptionSize'
import useAddFishPrice from '@/hooks/useAddFishPrice'
import { IFishPriceFormInput } from '@/types'
import { capitalize } from '@/utils/formatString'

import './styles.scss'

interface IFormOption {
  label: string
  value: string | string[]
}

const Add = () => {
  const history = useHistory()

  const { data: areas, isLoading: loadingAreas } = useOptionArea()

  const { data: sizes, isLoading: loadingSizes } = useOptionSize()

  const areaOptions = useMemo(() => {
    let results: Array<IFormOption> = []

    if (areas) {
      results = areas.map((item) => ({
        label: `${capitalize(item.city)} - ${capitalize(item.province)}`,
        value: [item.city, item.province],
      }))
    }

    return results
  }, [areas])

  const sizeOptions = useMemo(() => {
    let results: Array<IFormOption> = []

    if (sizes) {
      results = sizes.map((item) => ({ label: item.size, value: item.size }))
    }

    return results
  }, [sizes])

  const formModel = useMemo(
    () => ({
      Komoditas: {
        type: 'text',
        required: true,
        placeholder: 'Nama komoditas ikan',
      },
      Area: {
        type: 'select',
        required: true,
        placeholder: 'Pilih area',
        options: areaOptions,
      },
      Ukuran: {
        type: 'select',
        required: true,
        placeholder: 'Pilih ukuran',
        options: sizeOptions,
      },
      Harga: {
        type: 'number',
        required: true,
        placeholder: 'Masukkan harga',
      },
      Tanggal: {
        type: 'date',
        required: true,
        placeholder: 'Pilih tanggal',
      },
      Tambah: {
        type: 'submit',
        disabled: false,
      },
    }),
    [areaOptions, sizeOptions],
  )

  const { addFishPrice } = useAddFishPrice()

  const handleSubmit = useCallback((data: any) => {
    const payload: IFishPriceFormInput = {
      uuid: uuid(),
      komoditas: data['Komoditas'],
      area_kota: data['Area'].value[0],
      area_provinsi: data['Area'].value[1],
      size: data['Ukuran'].value,
      price: data['Harga'],
      tgl_parsed: data['Tanggal'],
    }

    addFishPrice(payload, {
      onSuccess: () => history.push('/'),
      onError: () => console.log('Gagal menambahkan data'),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="add-container">
      <h1>Tambah Data Harga Ikan</h1>
      {!loadingAreas && !loadingSizes ? (
        <JsonToForm model={formModel} onSubmit={handleSubmit} />
      ) : (
        <Skeleton height={40} count={5} style={{ margin: '1rem 0' }} />
      )}
    </div>
  )
}

export default Add
