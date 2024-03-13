import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Card, CardBody, CardFooter, CardImg, Badge } from 'reactstrap'
import { Link } from 'react-router-dom';


const PokeTarjeta = (params) => {
  const [pokemon, setPokemon] = useState([]);
  const [imagen, setImagen] = useState('');
  const [cardClass, setCardClass] = useState('d-none');
  const [loadClass, setLoadClass] = useState('');

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = async () => {
    const liga = params.poke.url;
    axios.get(liga).then(async (response) => {
      const respuesta = response.data;
      setPokemon(respuesta);

      if (respuesta.sprites.other.dream_world.front_default != null) {
        setImagen(respuesta.sprites.other.dream_world.front_default);
      } else {
        setImagen(respuesta.sprites.other['official-artwork'].front_default);
      }

      setCardClass('')
      setLoadClass('d-none')
    })
  }
  return (
    <Col sm='4' lg='3' className='mb-4'>
      <Card className={'shadow border-4 border-light ' + loadClass}>
        <CardImg src='/pokeCarga.gif' height='230' className='p-3' />
      </Card>

      <Link className='link_poke' to={'/pokemon/' + pokemon.name}>
        <Card className={'card-hover shadow border-4 border-light ' + cardClass}>
          <CardImg src={imagen} height='220' className='p-2' />
          <CardBody className='text-center'>
            <Badge className='d-block' pill color='dark'># {pokemon.id}</Badge>
            <label className='fs-4 text-capitalize'>{pokemon.name}</label>
          </CardBody>
          <CardFooter className='bg-light text-center'>
            <Link to={'/pokemon/' + pokemon.name} className='btn btn-dark'>
              <i className='fa-solid fa-arrow-up-right-from-square'></i> Detalles
            </Link>
          </CardFooter>
        </Card>
      </Link>
    </Col>
  )
}

export default PokeTarjeta
