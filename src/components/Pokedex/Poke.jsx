import { useState, useEffect } from 'react'

const Poke = () => {
    const [pokemon, setPokemon] = useState(null)

    const [id, setId] = useState(1)

    const [busqueda, setBusqueda] = useState('')

    useEffect(() => {
        fetchPokemonById(id)

    }, [id])


    const fetchPokemonById = (pokemonId) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default,
                    peso: data.weight,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleAnterior = () => {
        if (id > 1) setId(id - 1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (busqueda.length > 2) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
                .then((res) => res.json())
                .then((data) => {
                    setPokemon({
                        nombre: data.name,
                        img: data.sprites.front_default,
                    })
                    setId(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <div className='container m-3'>
            <form onSubmit={handleSubmit}>
                <input type="text" className='form-control' value={busqueda} onChange={handleInputChange} />
            </form>
            <div className='d-flex justify-content-center'>
                {
                    !pokemon ? (
                        <h3>Cargando...</h3>
                    ) : (
                        <>
                            <h3>{pokemon.numero}</h3>
                            <h3>{pokemon.nombre}</h3>
                            <h4 className='peso'> {pokemon.peso}</h4>
                            <img src={pokemon.img} alt={pokemon.nombre} />

                        </>
                    )
                }
            </div>
            <button className='btn btn-info m-3 ' onClick={handleAnterior}>Anterior</button>
            <button className='btn btn-success m-3' onClick={handleSiguiente}>Siguiente</button>
        </div>
    )
}

export default Poke

/*

import PropTypes from 'prop-types'
import './ItemListComponent.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListComponent = ({losSimpsons}) => {

  return (
    <div className="tarjeta">
        {
            losSimpsons && losSimpsons.map(({id,nombre, description}, index) => (// primero todo el objeto desestruturado y el indice luego.
               <div className="card tarjetaDos" key={index}>
               <span>{id}</span>
               <div className="card-body ">
               <h5 className="card-title">Nombre: {nombre}</h5>
                 <p className="card-text">Descripcion: {description}</p>
                 <ItemCount />
               </div>
             </div>
            ))
        }
    </div>
  )
}

ItemListComponent.propTypes = {
    losSimpsons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
}; // Verifica que sea un array de objetos. 


/*{
            props.losSimpsons && props.losSimpsons.map((objeto, index) => (
                <div key={index}> 
                    <p>ID: {objeto.id}</p>
                    <p>Nombre: {objeto.nombre}</p>
                    <p>Descripcion: {objeto.description}</p>
                    <hr />
                </div>
            ))
        } Declarado explicitamente
        export default ItemListComponent 

const losSimpsons= [
    {
      id: 1,
      nombre: 'Homero',
      description: 'Padre de la familia.'
    },
    {
      id: 2,
      nombre: 'Marge',
      description: 'Madre de la familia.'
    },
    {
      id: 3,
      nombre: 'Bart',
      description: 'Estudiante'
    },
    {
      id: 4,
      nombre: 'Lisa',
      description: 'Saxofonista'
    },
    {
      id: 5,
      nombre: 'Maggie',
      description: 'Bebé'
    },
    {
      id: 6,
      nombre: 'Ayudante de Santa',
      description: 'Perro de carrera'
    },
    {
      id: 7,
      nombre: 'Bola de pelos',
      description: 'Gatito'
    } 

  ]


        */