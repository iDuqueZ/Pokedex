import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <Link className='card-poke' style={{textDecoration: 'none', color: 'black'}} to={`/${name}`}>
      <Card style={{ width: '18rem' }} className='mx-auto'>
        <Card.Img
          width='286'
          height='286'
          bg='dark'
          variant='top'
          src={pokemon?.sprites.front_default}
        />
        <Card.Body>
          <Card.Title>
            <Link style={{ display: 'block', textDecoration: 'none', color: 'black', textTransform: 'uppercase', fontWeight: '500', textAlign: 'right', width: '100%' }} to={`/${name}`}>{name}</Link>
          </Card.Title>
          <Card.Text as='div'>
            Abilities:
            <ul>
              {pokemon?.abilities.map((ability) => (
                <li key={ability.ability.name}>
                  <span key={ability.ability.name}>{ability.ability.name}</span>
                </li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export { PokemonCard };
