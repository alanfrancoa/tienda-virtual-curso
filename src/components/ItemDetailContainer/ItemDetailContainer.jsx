import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirProductos } from '../../helpers/pedirProductos'
import ItemDetail from '../ItemDetail/ItemDetail'

import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        pedirProductos()
          .then((res) => {
            setItem(res.find(prod => prod.id === Number(itemId))) //no se puede pasar directamente, parseamos a number
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => { setLoading(false) })
      }, [itemId])

  return (
    <div >
        {
            loading ? <div className='spinner'><span className="spinner-grow spinner-grow-l" aria-hidden="true"></span></div>
            : <ItemDetail {...item}/>
        }
    </div>
  )
}

export default ItemDetailContainer